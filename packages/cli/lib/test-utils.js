// Copied from core
/**
 *  Slonik Query Mock Utils
 **/
export const expectSqlAssert = (sql, expectSql) => {
    expect(sql
        .split('\n')
        .map((row) => row.trim())
        .filter(Boolean)).toEqual(expectSql
        .split('\n')
        .map((row) => row.trim())
        .filter(Boolean));
};
