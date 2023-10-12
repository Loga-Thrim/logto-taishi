import { LogtoConfigs } from '@logto/schemas';
import { convertToIdentifiers } from '@logto/shared';
import { sql } from 'slonik';
const { table, fields } = convertToIdentifiers(LogtoConfigs);
export const doesConfigsTableExist = async (pool) => {
    const { rows } = await pool.query(sql `select to_regclass(${LogtoConfigs.table}) as regclass`);
    return Boolean(rows[0]?.regclass);
};
export const getRowsByKeys = async (pool, tenantId, keys) => pool.query(sql `
    select ${sql.join([fields.key, fields.value], sql `,`)} from ${table}
      where ${fields.tenantId} = ${tenantId}
      and ${fields.key} in (${sql.join(keys, sql `,`)})
  `);
export const updateValueByKey = async (pool, tenantId, key, value) => pool.query(sql `
      insert into ${table} (${fields.tenantId}, ${fields.key}, ${fields.value}) 
        values (${tenantId}, ${key}, ${sql.jsonb(value)})
        on conflict (${fields.tenantId}, ${fields.key})
          do update set ${fields.value}=excluded.${fields.value}
    `);
