import type { DatabaseTransactionConnection } from 'slonik';
export declare const createTables: (connection: DatabaseTransactionConnection) => Promise<void>;
export declare const seedTables: (connection: DatabaseTransactionConnection, latestTimestamp: number, isCloud: boolean) => Promise<void>;
export declare const seedCloud: (connection: DatabaseTransactionConnection) => Promise<void>;
