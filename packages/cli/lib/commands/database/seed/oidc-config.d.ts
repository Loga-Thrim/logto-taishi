import type { LogtoOidcConfigType } from '@logto/schemas';
import { LogtoOidcConfigKey } from '@logto/schemas';
import type { DatabaseTransactionConnection } from 'slonik';
export declare const seedOidcConfigs: (pool: DatabaseTransactionConnection, tenantId: string) => Promise<void>;
/**
 * Each config reader will do the following things in order:
 * 1. Try to read value from env (mimic the behavior from the original core)
 * 2. Generate value if #1 doesn't work
 */
export declare const oidcConfigReaders: {
    [key in LogtoOidcConfigKey]: () => Promise<{
        value: LogtoOidcConfigType[key];
        fromEnv: boolean;
    }>;
};
