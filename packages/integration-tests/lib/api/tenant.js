import { cloudApi } from './api.js';
export const createTenant = async (accessToken, payload) => {
    return cloudApi
        .extend({
        headers: { authorization: `Bearer ${accessToken}` },
    })
        .post('tenants', { json: payload })
        .json();
};
export const getTenants = async (accessToken) => {
    return cloudApi
        .extend({
        headers: { authorization: `Bearer ${accessToken}` },
    })
        .get('tenants')
        .json();
};
export const updateTenant = async (accessToken, tenantId, payload) => {
    return cloudApi
        .extend({
        headers: { authorization: `Bearer ${accessToken}` },
    })
        .patch(`tenants/${tenantId}`, { json: payload })
        .json();
};
export const deleteTenant = async (accessToken, tenantId) => {
    return cloudApi
        .extend({
        headers: { authorization: `Bearer ${accessToken}` },
    })
        .delete(`tenants/${tenantId}`)
        .json();
};
//# sourceMappingURL=tenant.js.map