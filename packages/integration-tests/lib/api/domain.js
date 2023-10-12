import { generateDomain } from '#src/utils.js';
import { authedAdminApi } from './api.js';
export const createDomain = async (domain) => authedAdminApi
    .post('domains', {
    json: {
        domain: domain ?? generateDomain(),
    },
})
    .json();
export const getDomains = async () => authedAdminApi.get('domains').json();
export const getDomain = async (domainId) => authedAdminApi.get(`domains/${domainId}`).json();
export const deleteDomain = async (domainId) => authedAdminApi.delete(`domains/${domainId}`);
//# sourceMappingURL=domain.js.map