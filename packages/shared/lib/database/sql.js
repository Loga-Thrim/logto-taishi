import { notFalsy } from '@silverhand/essentials';
import { sql } from 'slonik';
export const conditionalSql = (value, buildSql) => notFalsy(value) ? buildSql(value) : sql ``;
export const conditionalArraySql = (value, buildSql) => (value.length > 0 ? buildSql(value) : sql ``);
export const autoSetFields = Object.freeze(['tenantId', 'createdAt', 'updatedAt']);
export const excludeAutoSetFields = (fields) => Object.freeze(fields.filter((field) => 
// Read only string arrays
// eslint-disable-next-line no-restricted-syntax
!autoSetFields.includes(field)));
/**
 * Note `undefined` is removed from the acceptable list,
 * since you should NOT call this function if ignoring the field is the desired behavior.
 * Calling this function with `null` means an explicit `null` setting in database is expected.
 * @param key The key of value. Will treat as `timestamp` if it ends with `_at` or 'At' AND value is a number;
 * @param value The value to convert.
 * @returns A primitive that can be saved into database.
 */
export const convertToPrimitiveOrSql = (key, value) => {
    if (value === null) {
        return null;
    }
    if (typeof value === 'object') {
        return JSON.stringify(value);
    }
    if ((['_at', 'At'].some((value) => key.endsWith(value)) || key === 'date') &&
        typeof value === 'number') {
        return sql `to_timestamp(${value}::double precision / 1000)`;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'string') {
        if (value === '') {
            return null;
        }
        return value;
    }
    throw new Error(`Cannot convert ${key} to primitive`);
};
export const convertToIdentifiers = ({ table, fields }, withPrefix = false) => {
    const fieldsIdentifiers = Object.entries(fields).map(([key, value]) => [key, sql.identifier(withPrefix ? [table, value] : [value])]);
    return {
        table: sql.identifier([table]),
        // Key value inferred from the original fields directly
        // eslint-disable-next-line no-restricted-syntax
        fields: Object.fromEntries(fieldsIdentifiers),
    };
};
export const convertToTimestamp = (time = new Date()) => sql `to_timestamp(${time.valueOf() / 1000})`;
export const manyRows = async (query) => {
    const { rows } = await query;
    return rows;
};
