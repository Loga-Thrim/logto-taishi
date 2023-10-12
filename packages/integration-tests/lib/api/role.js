import { RoleType } from '@logto/schemas';
import { generateRoleName } from '#src/utils.js';
import { authedAdminApi } from './api.js';
export const createRole = async ({ name, description, type, scopeIds, }) => authedAdminApi
    .post('roles', {
    json: {
        name: name ?? generateRoleName(),
        description: description ?? generateRoleName(),
        type: type ?? RoleType.User,
        scopeIds,
    },
})
    .json();
export const getRoles = async (options) => authedAdminApi.get('roles', { searchParams: new URLSearchParams(options) }).json();
export const getRole = async (roleId) => authedAdminApi.get(`roles/${roleId}`).json();
export const updateRole = async (roleId, payload) => authedAdminApi
    .patch(`roles/${roleId}`, {
    json: {
        ...payload,
    },
})
    .json();
export const deleteRole = async (roleId) => authedAdminApi.delete(`roles/${roleId}`);
export const getRoleScopes = async (roleId) => authedAdminApi.get(`roles/${roleId}/scopes`).json();
export const assignScopesToRole = async (scopeIds, roleId) => authedAdminApi
    .post(`roles/${roleId}/scopes`, {
    json: { scopeIds },
})
    .json();
export const deleteScopeFromRole = async (scopeId, roleId) => authedAdminApi.delete(`roles/${roleId}/scopes/${scopeId}`);
export const getRoleUsers = async (roleId) => authedAdminApi.get(`roles/${roleId}/users`).json();
export const assignUsersToRole = async (userIds, roleId) => authedAdminApi.post(`roles/${roleId}/users`, {
    json: { userIds },
});
export const deleteUserFromRole = async (userId, roleId) => authedAdminApi.delete(`roles/${roleId}/users/${userId}`);
export const getRoleApplications = async (roleId) => authedAdminApi.get(`roles/${roleId}/applications`).json();
export const assignApplicationsToRole = async (applicationIds, roleId) => authedAdminApi.post(`roles/${roleId}/applications`, {
    json: { applicationIds },
});
export const deleteApplicationFromRole = async (applicationId, roleId) => authedAdminApi.delete(`roles/${roleId}/applications/${applicationId}`);
//# sourceMappingURL=role.js.map