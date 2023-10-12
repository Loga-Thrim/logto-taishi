import { generateResourceIndicator, generateResourceName } from '#src/utils.js';
import { authedAdminApi } from './api.js';
export const createResource = async (name, indicator) => authedAdminApi
    .post('resources', {
    json: {
        name: name ?? generateResourceName(),
        indicator: indicator ?? generateResourceIndicator(),
    },
})
    .json();
export const getResources = async () => authedAdminApi.get('resources').json();
export const getResource = async (resourceId, options) => authedAdminApi.get(`resources/${resourceId}`, options).json();
export const updateResource = async (resourceId, payload) => authedAdminApi
    .patch(`resources/${resourceId}`, {
    json: {
        ...payload,
    },
})
    .json();
export const deleteResource = async (resourceId) => authedAdminApi.delete(`resources/${resourceId}`);
export const setDefaultResource = async (resourceId, isDefault = true) => authedAdminApi
    .patch(`resources/${resourceId}/is-default`, { json: { isDefault } })
    .json();
//# sourceMappingURL=resource.js.map