import { authedAdminApi } from './api.js';
export const getAdminConsoleConfig = async () => authedAdminApi.get('configs/admin-console').json();
export const updateAdminConsoleConfig = async (payload) => authedAdminApi
    .patch(`configs/admin-console`, {
    json: payload,
})
    .json();
//# sourceMappingURL=logto-config.js.map