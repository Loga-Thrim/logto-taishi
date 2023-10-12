import { systemGuards, Systems, AlterationStateKey } from '@logto/schemas';
import { convertToIdentifiers } from '@logto/shared';
import { DatabaseError } from 'pg-protocol';
import { sql } from 'slonik';
const { fields, table } = convertToIdentifiers(Systems);
const doesTableExist = async (pool, table) => {
    const { rows } = await pool.query(sql `select to_regclass(${table}) as regclass`);
    return Boolean(rows[0]?.regclass);
};
export const doesSystemsTableExist = async (pool) => doesTableExist(pool, Systems.table);
const legacyLogtoConfigsTable = '_logto_configs';
const getAlterationStateTable = async (pool) => (await doesSystemsTableExist(pool))
    ? sql.identifier([Systems.table])
    : sql.identifier([legacyLogtoConfigsTable]); // Fall back to the old config table
export const getCurrentDatabaseAlterationTimestamp = async (pool) => {
    const table = await getAlterationStateTable(pool);
    try {
        const result = await pool.maybeOne(sql `select * from ${table} where ${fields.key}=${AlterationStateKey.AlterationState}`);
        const parsed = systemGuards[AlterationStateKey.AlterationState].safeParse(result?.value);
        return (parsed.success && parsed.data.timestamp) || 0;
    }
    catch (error) {
        // Relation does not exist, treat as 0
        // https://www.postgresql.org/docs/14/errcodes-appendix.html
        if (error instanceof DatabaseError && error.code === '42P01') {
            return 0;
        }
        throw error;
    }
};
export const updateDatabaseTimestamp = async (connection, timestamp) => {
    const table = await getAlterationStateTable(connection);
    const value = {
        timestamp,
        updatedAt: new Date().toISOString(),
    };
    await connection.query(sql `
      insert into ${table} (${fields.key}, ${fields.value}) 
        values (${AlterationStateKey.AlterationState}, ${sql.jsonb(value)})
        on conflict (${fields.key}) do update set ${fields.value}=excluded.${fields.value}
    `);
};
export const getRowByKey = async (pool, key) => pool.maybeOne(sql `
    select ${sql.join([fields.key, fields.value], sql `,`)} from ${table}
      where ${fields.key} = ${key}
  `);
export const updateValueByKey = async (pool, key, value) => pool.query(sql `
      insert into ${table} (${fields.key}, ${fields.value}) 
        values (${key}, ${sql.jsonb(value)})
        on conflict (${fields.key})
          do update set ${fields.value}=excluded.${fields.value}
    `);
