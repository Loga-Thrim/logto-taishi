import { generateScopeName } from '#src/utils.js';
import { authedAdminApi } from './api.js';
export const getScopes = async (resourceId, options) => authedAdminApi.get(`resources/${resourceId}/scopes`, options).json();
export const createScope = async (resourceId, name) => {
    const scopeName = name ?? generateScopeName();
    return authedAdminApi
        .post(`resources/${resourceId}/scopes`, {
        json: {
            name: scopeName,
            description: scopeName,
        },
    })
        .json();
};
export const updateScope = async (resourceId, scopeId, payload) => authedAdminApi
    .patch(`resources/${resourceId}/scopes/${scopeId}`, {
    json: {
        ...payload,
    },
})
    .json();
export const deleteScope = async (resourceId, scopeId) => authedAdminApi.delete(`resources/${resourceId}/scopes/${scopeId}`);
//# sourceMappingURL=scope.js.map