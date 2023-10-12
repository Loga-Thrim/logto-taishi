import type { System, SystemKey } from '@logto/schemas';
import { systemGuards } from '@logto/schemas';
import type { CommonQueryMethods, DatabaseTransactionConnection } from 'slonik';
import type { z } from 'zod';
export declare const doesSystemsTableExist: (pool: CommonQueryMethods) => Promise<boolean>;
export declare const getCurrentDatabaseAlterationTimestamp: (pool: CommonQueryMethods) => Promise<number>;
export declare const updateDatabaseTimestamp: (connection: DatabaseTransactionConnection, timestamp: number) => Promise<void>;
export declare const getRowByKey: (pool: CommonQueryMethods, key: SystemKey) => Promise<System | null>;
export declare const updateValueByKey: <T extends SystemKey>(pool: CommonQueryMethods, key: T, value: z.TypeOf<import("@logto/schemas").SystemGuard[T]>) => Promise<import("slonik").QueryResult<import("slonik").QueryResultRow>>;
