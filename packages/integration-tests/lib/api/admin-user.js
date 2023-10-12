import { authedAdminApi } from './api.js';
export const createUser = async (payload = {}) => authedAdminApi
    .post('users', {
    json: payload,
})
    .json();
export const getUser = async (userId) => authedAdminApi.get(`users/${userId}`).json();
export const getUsers = async () => authedAdminApi.get('users').json();
export const updateUser = async (userId, payload) => authedAdminApi
    .patch(`users/${userId}`, {
    json: payload,
})
    .json();
export const suspendUser = async (userId, isSuspended) => authedAdminApi.patch(`users/${userId}/is-suspended`, { json: { isSuspended } }).json();
export const deleteUser = async (userId) => authedAdminApi.delete(`users/${userId}`);
export const updateUserPassword = async (userId, password) => authedAdminApi
    .patch(`users/${userId}/password`, {
    json: {
        password,
    },
})
    .json();
export const deleteUserIdentity = async (userId, connectorTarget) => authedAdminApi.delete(`users/${userId}/identities/${connectorTarget}`);
export const assignRolesToUser = async (userId, roleIds) => authedAdminApi.post(`users/${userId}/roles`, { json: { roleIds } });
export const getUserRoles = async (userId) => authedAdminApi.get(`users/${userId}/roles`).json();
export const deleteRoleFromUser = async (userId, roleId) => authedAdminApi.delete(`users/${userId}/roles/${roleId}`);
export const postUserIdentity = async (userId, connectorId, connectorData) => authedAdminApi
    .post(`users/${userId}/identities`, {
    json: {
        connectorId,
        connectorData,
    },
})
    .json();
export const verifyUserPassword = async (userId, password) => authedAdminApi.post(`users/${userId}/password/verify`, { json: { password } });
//# sourceMappingURL=admin-user.js.map