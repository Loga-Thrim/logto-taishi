import { InteractionEvent } from '@logto/schemas';
import { putInteraction, sendVerificationCode } from '#src/api/interaction.js';
import { initClient } from '#src/helpers/client.js';
import { expectRejects } from '#src/helpers/index.js';
import { generateEmail, generatePhone } from '#src/utils.js';
/**
 * Note: These test cases are designed to cover exceptional scenarios of API calls that
 * cannot be covered within the auth flow.
 */
describe('POST /interaction/verification/verification-code', () => {
    it('Should fail to send email verification code if related connector is not found', async () => {
        const client = await initClient();
        await client.successSend(putInteraction, {
            event: InteractionEvent.SignIn,
        });
        await expectRejects(client.send(sendVerificationCode, {
            email: generateEmail(),
        }), {
            code: 'connector.not_found',
            statusCode: 400,
        });
    });
    it('Should fail to send phone verification code if related connector is not found', async () => {
        const client = await initClient();
        await client.successSend(putInteraction, {
            event: InteractionEvent.SignIn,
        });
        await expectRejects(client.send(sendVerificationCode, {
            phone: generatePhone(),
        }), {
            code: 'connector.not_found',
            statusCode: 400,
        });
    });
});
//# sourceMappingURL=post-send-verification-code.test.js.map