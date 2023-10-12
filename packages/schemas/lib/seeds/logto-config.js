import { LogtoTenantConfigKey } from '../types/index.js';
import { cloudApiIndicator } from './cloud-api.js';
export const createDefaultAdminConsoleConfig = (forTenantId) => Object.freeze({
    tenantId: forTenantId,
    key: LogtoTenantConfigKey.AdminConsole,
    value: {
        signInExperienceCustomized: false,
    },
});
export const createCloudConnectionConfig = (forTenantId, appId, appSecret) => Object.freeze({
    tenantId: forTenantId,
    key: LogtoTenantConfigKey.CloudConnection,
    value: {
        appId,
        appSecret,
        resource: cloudApiIndicator,
    },
});
