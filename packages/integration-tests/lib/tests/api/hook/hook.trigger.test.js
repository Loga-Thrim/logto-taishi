import { createHmac } from 'node:crypto';
import { HookEvent, LogResult, SignInIdentifier, ConnectorType, } from '@logto/schemas';
import { deleteUser } from '#src/api/admin-user.js';
import { authedAdminApi } from '#src/api/api.js';
import { getWebhookRecentLogs } from '#src/api/logs.js';
import { clearConnectorsByTypes, setEmailConnector, setSmsConnector, } from '#src/helpers/connector.js';
import { getHookCreationPayload } from '#src/helpers/hook.js';
import { createMockServer } from '#src/helpers/index.js';
import { registerNewUser, resetPassword, signInWithPassword } from '#src/helpers/interactions.js';
import { enableAllPasswordSignInMethods, enableAllVerificationCodeSignInMethods, } from '#src/helpers/sign-in-experience.js';
import { generateNewUser, generateNewUserProfile } from '#src/helpers/user.js';
import { generatePassword, waitFor } from '#src/utils.js';
// Note: return hook payload and signature for webhook security testing
const hookServerRequestListener = (request, response) => {
    // eslint-disable-next-line @silverhand/fp/no-mutation
    response.statusCode = 204;
    const data = [];
    request.on('data', (chunk) => {
        // eslint-disable-next-line @silverhand/fp/no-mutating-methods
        data.push(chunk);
    });
    request.on('end', () => {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        const payload = Buffer.concat(data).toString();
        response.end(JSON.stringify({
            signature: request.headers['logto-signature-sha-256'],
            payload,
        }));
    });
};
describe('trigger hooks', () => {
    const { listen, close } = createMockServer(9999, hookServerRequestListener);
    beforeAll(async () => {
        await enableAllPasswordSignInMethods({
            identifiers: [SignInIdentifier.Username],
            password: true,
            verify: false,
        });
        await listen();
    });
    afterAll(async () => {
        await close();
    });
    it('should trigger sign-in hook and record error when interaction finished', async () => {
        const createdHook = await authedAdminApi
            .post('hooks', { json: getHookCreationPayload(HookEvent.PostSignIn) })
            .json();
        const logKey = 'TriggerHook.PostSignIn';
        const { userProfile: { username, password }, user, } = await generateNewUser({ username: true, password: true });
        await signInWithPassword({ username, password });
        // Check hook trigger log
        const logs = await getWebhookRecentLogs(createdHook.id, new URLSearchParams({ logKey, page_size: '100' }));
        expect(logs.some(({ payload: { result, error } }) => result === LogResult.Error && error === 'RequestError: Invalid URL')).toBeTruthy();
        // Clean up
        await authedAdminApi.delete(`hooks/${createdHook.id}`);
        await deleteUser(user.id);
    });
    it('should trigger multiple register hooks and record properly when interaction finished', async () => {
        const [hook1, hook2, hook3] = await Promise.all([
            authedAdminApi
                .post('hooks', { json: getHookCreationPayload(HookEvent.PostRegister) })
                .json(),
            authedAdminApi
                .post('hooks', {
                json: getHookCreationPayload(HookEvent.PostRegister, 'http://localhost:9999'),
            })
                .json(),
            // Using the old API to create a hook
            authedAdminApi
                .post('hooks', {
                json: {
                    event: HookEvent.PostRegister,
                    config: { url: 'http://localhost:9999', retries: 2 },
                },
            })
                .json(),
        ]);
        const logKey = 'TriggerHook.PostRegister';
        const { username, password } = generateNewUserProfile({ username: true, password: true });
        const userId = await registerNewUser(username, password);
        // Check hook trigger log
        for (const [hook, expectedResult, expectedError] of [
            [hook1, LogResult.Error, 'RequestError: Invalid URL'],
            [hook2, LogResult.Success, undefined],
            [hook3, LogResult.Success, undefined],
        ]) {
            // eslint-disable-next-line no-await-in-loop
            const logs = await getWebhookRecentLogs(hook.id, new URLSearchParams({ logKey, page_size: '100' }));
            expect(logs.some(({ payload: { result, error } }) => result === expectedResult && (!expectedError || error === expectedError))).toBeTruthy();
        }
        // Clean up
        await Promise.all([
            authedAdminApi.delete(`hooks/${hook1.id}`),
            authedAdminApi.delete(`hooks/${hook2.id}`),
            authedAdminApi.delete(`hooks/${hook3.id}`),
        ]);
        await deleteUser(userId);
    });
    it('should secure webhook payload data successfully', async () => {
        const createdHook = await authedAdminApi
            .post('hooks', {
            json: getHookCreationPayload(HookEvent.PostRegister, 'http://localhost:9999'),
        })
            .json();
        const { username, password } = generateNewUserProfile({ username: true, password: true });
        const userId = await registerNewUser(username, password);
        const logs = await authedAdminApi
            .get(`hooks/${createdHook.id}/recent-logs?page_size=100`)
            .json();
        const log = logs.find(({ payload: { hookId } }) => hookId === createdHook.id);
        expect(log).toBeTruthy();
        const response = log?.payload.response;
        expect(response).toBeTruthy();
        const { body: { signature, payload }, } = response;
        expect(signature).toBeTruthy();
        expect(payload).toBeTruthy();
        const calculateSignature = createHmac('sha256', createdHook.signingKey)
            .update(payload)
            .digest('hex');
        expect(calculateSignature).toEqual(signature);
        await authedAdminApi.delete(`hooks/${createdHook.id}`);
        await deleteUser(userId);
    });
    it('should trigger reset password hook and record properly when interaction finished', async () => {
        await clearConnectorsByTypes([ConnectorType.Email, ConnectorType.Sms]);
        await setEmailConnector();
        await setSmsConnector();
        await enableAllVerificationCodeSignInMethods({
            identifiers: [SignInIdentifier.Email, SignInIdentifier.Phone],
            password: true,
            verify: true,
        });
        // Create a reset password hook
        const resetPasswordHook = await authedAdminApi
            .post('hooks', {
            json: getHookCreationPayload(HookEvent.PostResetPassword, 'http://localhost:9999'),
        })
            .json();
        const logKey = 'TriggerHook.PostResetPassword';
        const { user, userProfile } = await generateNewUser({
            primaryPhone: true,
            primaryEmail: true,
            password: true,
        });
        // Reset Password by Email
        await resetPassword({ email: userProfile.primaryEmail }, generatePassword());
        // Reset Password by Phone
        await resetPassword({ phone: userProfile.primaryPhone }, generatePassword());
        // Wait for the hook to be trigged
        await waitFor(1000);
        const relatedLogs = await getWebhookRecentLogs(resetPasswordHook.id, new URLSearchParams({ logKey, page_size: '100' }));
        const succeedLogs = relatedLogs.filter(({ payload: { result } }) => result === LogResult.Success);
        expect(succeedLogs).toHaveLength(2);
        await authedAdminApi.delete(`hooks/${resetPasswordHook.id}`);
        await deleteUser(user.id);
        await clearConnectorsByTypes([ConnectorType.Email, ConnectorType.Sms]);
    });
});
//# sourceMappingURL=hook.trigger.test.js.map