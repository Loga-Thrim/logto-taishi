import type { SchemaLike } from '@logto/schemas';
export declare const defaultDatabaseUrl = "postgresql://localhost:5432/logto";
export declare const getDatabaseUrlFromConfig: () => Promise<string>;
export declare const createPoolFromConfig: () => Promise<import("slonik").DatabasePool>;
/**
 * Create a database pool with the URL in CLI config; if no URL found, prompt to input.
 * If the given database does not exists, it will try to create a new database by connecting to the maintenance database `postgres`.
 *
 * @returns A new database pool with the database URL in config.
 */
export declare const createPoolAndDatabaseIfNeeded: () => Promise<import("slonik").DatabasePool>;
export declare const insertInto: <T extends SchemaLike>(object: T, table: string) => import("slonik").TaggedTemplateLiteralInvocation<import("slonik").QueryResultRow>;
