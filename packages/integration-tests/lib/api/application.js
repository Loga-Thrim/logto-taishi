import { conditional } from '@silverhand/essentials';
import { authedAdminApi } from './api.js';
export const createApplication = async (name, type, rest) => authedAdminApi
    .post('applications', {
    json: {
        name,
        type,
        ...rest,
    },
})
    .json();
export const getApplications = async (types) => {
    const searchParams = new URLSearchParams(conditional(types &&
        types.length > 0 && [...types.map((type) => ['search.type', type]), ['mode.type', 'exact']]));
    return authedAdminApi.get('applications', { searchParams }).json();
};
export const getApplication = async (applicationId) => authedAdminApi.get(`applications/${applicationId}`).json();
export const updateApplication = async (applicationId, payload) => authedAdminApi
    .patch(`applications/${applicationId}`, {
    json: {
        ...payload,
    },
})
    .json();
export const deleteApplication = async (applicationId) => authedAdminApi.delete(`applications/${applicationId}`);
export const getApplicationRoles = async (applicationId) => authedAdminApi.get(`applications/${applicationId}/roles`).json();
export const assignRolesToApplication = async (applicationId, roleIds) => authedAdminApi.post(`applications/${applicationId}/roles`, {
    json: { roleIds },
});
export const putRolesToApplication = async (applicationId, roleIds) => authedAdminApi.put(`applications/${applicationId}/roles`, {
    json: { roleIds },
});
export const deleteRoleFromApplication = async (applicationId, roleId) => authedAdminApi.delete(`applications/${applicationId}/roles/${roleId}`);
//# sourceMappingURL=application.js.map