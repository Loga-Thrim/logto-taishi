// To refactor: should combine into other similar utils
// Since they are just different in URLs
import { cloudApiIndicator, CloudScope, PredefinedScope, adminTenantId, defaultTenantId, getManagementApiResourceIndicator, getManagementApiAdminName, adminConsoleApplicationId, InteractionEvent, AdminTenantRole, RoleType, } from '@logto/schemas';
import { conditionalArray } from '@silverhand/essentials';
import { authedAdminTenantApi as api, adminTenantApi } from '#src/api/api.js';
import { adminConsoleRedirectUri, logtoConsoleUrl } from '#src/constants.js';
import { initClient } from '#src/helpers/client.js';
import { generatePassword, generateUsername } from '#src/utils.js';
export const resourceDefault = getManagementApiResourceIndicator(defaultTenantId);
export const resourceMe = getManagementApiResourceIndicator(adminTenantId, 'me');
const createUserWithRoles = async (roleNames) => {
    const username = generateUsername();
    const password = generatePassword();
    const user = await api
        .post('users', {
        json: { username, password },
    })
        .json();
    // Should have roles for default tenant Management API and admin tenant Me API
    const roles = await api.get('roles').json();
    await Promise.all(roles
        .filter(({ name, type }) => roleNames.includes(name) && type !== RoleType.MachineToMachine)
        .map(async ({ id }) => api.post(`roles/${id}/users`, {
        json: { userIds: [user.id] },
    })));
    return [user, { username, password }];
};
export const createUserWithAllRoles = async () => {
    const allRoles = await api.get('roles').json();
    const allRoleNames = allRoles.map(({ name }) => name);
    return createUserWithRoles(allRoleNames);
};
export const deleteUser = async (id) => {
    await api.delete(`users/${id}`);
};
export const putInteraction = async (cookie, payload) => adminTenantApi
    .put('interaction', {
    headers: { cookie },
    json: payload,
    followRedirect: false,
})
    .json();
export const initClientAndSignIn = async (username, password, config) => {
    const client = await initClient({
        endpoint: logtoConsoleUrl,
        appId: adminConsoleApplicationId,
        ...config,
    }, adminConsoleRedirectUri);
    await client.successSend(putInteraction, {
        event: InteractionEvent.SignIn,
        identifier: {
            username,
            password,
        },
    });
    const { redirectTo } = await client.submitInteraction();
    await client.processSession(redirectTo);
    return client;
};
export const createUserWithAllRolesAndSignInToClient = async () => {
    const [{ id }, { username, password }] = await createUserWithAllRoles();
    const client = await initClientAndSignIn(username, password, {
        resources: [resourceDefault, resourceMe],
        scopes: [PredefinedScope.All],
    });
    return { id, client };
};
export const createUserAndSignInToCloudClient = async (userRoleType) => {
    const [{ id }, { username, password }] = await createUserWithRoles(conditionalArray(AdminTenantRole.User, userRoleType === AdminTenantRole.Admin && getManagementApiAdminName(adminTenantId)));
    const client = await initClientAndSignIn(username, password, {
        resources: [cloudApiIndicator],
        scopes: Object.values(CloudScope),
    });
    return { id, client };
};
//# sourceMappingURL=admin-tenant.js.map