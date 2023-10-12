import { authedAdminApi } from './api.js';
export const requestVerificationCode = async (payload) => authedAdminApi.post('verification-codes', { json: payload });
export const verifyVerificationCode = async (payload) => authedAdminApi.post('verification-codes/verify', { json: payload });
//# sourceMappingURL=verification-code.js.map