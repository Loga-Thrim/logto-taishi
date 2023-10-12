import type { Falsy } from '@silverhand/essentials';
import type { SqlSqlToken, SqlToken, QueryResult, IdentifierSqlToken } from 'slonik';
import type { FieldIdentifiers, SchemaValue, SchemaValuePrimitive, Table } from './types.js';
export declare const conditionalSql: <T>(value: T, buildSql: (value: Exclude<T, Falsy>) => SqlSqlToken) => SqlSqlToken;
export declare const conditionalArraySql: <T>(value: T[], buildSql: (value: T[]) => SqlSqlToken) => SqlSqlToken;
export declare const autoSetFields: readonly ["tenantId", "createdAt", "updatedAt"];
export type OmitAutoSetFields<T> = Omit<T, (typeof autoSetFields)[number]>;
export type ExcludeAutoSetFields<T> = Exclude<T, (typeof autoSetFields)[number]>;
export declare const excludeAutoSetFields: <T extends string>(fields: readonly T[]) => readonly Exclude<T, "tenantId" | "createdAt" | "updatedAt">[];
/**
 * Note `undefined` is removed from the acceptable list,
 * since you should NOT call this function if ignoring the field is the desired behavior.
 * Calling this function with `null` means an explicit `null` setting in database is expected.
 * @param key The key of value. Will treat as `timestamp` if it ends with `_at` or 'At' AND value is a number;
 * @param value The value to convert.
 * @returns A primitive that can be saved into database.
 */
export declare const convertToPrimitiveOrSql: (key: string, value: SchemaValue) => NonNullable<SchemaValuePrimitive> | SqlToken | null;
export declare const convertToIdentifiers: <T extends Table>({ table, fields }: T, withPrefix?: boolean) => {
    table: IdentifierSqlToken;
    fields: FieldIdentifiers<keyof T["fields"]>;
};
export declare const convertToTimestamp: (time?: Date) => import("slonik").TaggedTemplateLiteralInvocation<import("slonik").QueryResultRow>;
export declare const manyRows: <T>(query: Promise<QueryResult<T>>) => Promise<readonly T[]>;
