import { sql } from 'slonik';
export const getDatabaseName = async (pool, normalized = false) => {
    const { currentDatabase } = await pool.one(sql `
    select current_database();
  `);
    return normalized ? currentDatabase.replaceAll('-', '_') : currentDatabase;
};
