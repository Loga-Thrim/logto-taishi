import type { AdminConsoleData, CloudConnectionData } from '../types/index.js';
import { LogtoTenantConfigKey } from '../types/index.js';
export declare const createDefaultAdminConsoleConfig: (forTenantId: string) => Readonly<{
    tenantId: string;
    key: LogtoTenantConfigKey;
    value: AdminConsoleData;
}>;
export declare const createCloudConnectionConfig: (forTenantId: string, appId: string, appSecret: string) => Readonly<{
    tenantId: string;
    key: LogtoTenantConfigKey;
    value: CloudConnectionData;
}>;
