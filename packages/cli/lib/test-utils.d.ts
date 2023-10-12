import type { QueryResult, QueryResultRow } from 'slonik';
import type { PrimitiveValueExpression } from 'slonik/dist/src/types.js';
export type QueryType = (sql: string, values: readonly PrimitiveValueExpression[]) => Promise<QueryResult<QueryResultRow>>;
/**
 *  Slonik Query Mock Utils
 **/
export declare const expectSqlAssert: (sql: string, expectSql: string) => void;
