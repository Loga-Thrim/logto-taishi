import type { LogtoConfig, LogtoConfigKey, logtoConfigGuards } from '@logto/schemas';
import type { CommonQueryMethods } from 'slonik';
import type { z } from 'zod';
export declare const doesConfigsTableExist: (pool: CommonQueryMethods) => Promise<boolean>;
export declare const getRowsByKeys: (pool: CommonQueryMethods, tenantId: string, keys: LogtoConfigKey[]) => Promise<import("slonik").QueryResult<LogtoConfig>>;
export declare const updateValueByKey: <T extends LogtoConfigKey>(pool: CommonQueryMethods, tenantId: string, key: T, value: z.TypeOf<import("@logto/schemas").LogtoConfigGuard[T]>) => Promise<import("slonik").QueryResult<import("slonik").QueryResultRow>>;
