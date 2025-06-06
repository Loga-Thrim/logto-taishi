import { authedAdminApi, deleteUser } from '#src/api/index.js';
import { createUserByAdmin, expectRejects } from '#src/helpers/index.js';
const getUsers = async (init) => {
    const { headers, body } = await authedAdminApi.get('users', {
        searchParams: new URLSearchParams(init),
    });
    return { headers, json: JSON.parse(body) };
};
describe('admin console user search params', () => {
    // eslint-disable-next-line @silverhand/fp/no-let
    let users = [];
    beforeAll(async () => {
        const prefix = `search_`;
        const rawNames = [
            'tom scott',
            'tom scott 2',
            'tom scott 3',
            'tom scott 4',
            'tom scott 5',
            'jerry swift',
            'jerry swift 1',
            'jerry swift jr',
            'jerry swift jr 2',
            'jerry swift jr jr',
        ];
        const emailSuffix = ['@gmail.com', '@foo.bar', '@geek.best'];
        const phonePrefix = ['101', '102', '202'];
        // eslint-disable-next-line @silverhand/fp/no-mutation
        users = await Promise.all(rawNames.map(async (raw, index) => {
            const username = raw.split(' ').join('_');
            const name = raw
                .split(' ')
                .filter((segment) => Number.isNaN(Number(segment)))
                .map((segment) => segment[0].toUpperCase() + segment.slice(1))
                .join(' ');
            const primaryEmail = username + emailSuffix[index % emailSuffix.length];
            const primaryPhone = phonePrefix[index % phonePrefix.length] + index.toString().padStart(5, '0');
            return createUserByAdmin(prefix + username, undefined, primaryEmail, primaryPhone, name);
        }));
    });
    afterAll(async () => {
        await Promise.all(users.map(async ({ id }) => deleteUser(id)));
    });
    it('should return all users if nothing specified', async () => {
        const { headers } = await getUsers([]);
        expect(Number(headers['total-number'])).toBeGreaterThanOrEqual(10);
    });
    describe('falling back to `like` mode and matches all available fields if only `search` is specified', () => {
        it('should search username', async () => {
            const { headers, json } = await getUsers([['search', '%search_tom%']]);
            expect(headers['total-number']).toEqual('5');
            expect(json.length === 5 && json.every((user) => user.name === 'Tom Scott')).toBeTruthy();
        });
        it('should search primaryPhone', async () => {
            const { headers, json } = await getUsers([['search', '%0000%']]);
            expect(headers['total-number']).toEqual('10');
            expect(json.length === 10 && json.every((user) => user.username?.startsWith('search_'))).toBeTruthy();
        });
    });
    it('should be able to perform case sensitive exact search', async () => {
        const { headers, json } = await getUsers([
            ['search.name', 'jerry swift'],
            ['mode.name', 'exact'],
            ['isCaseSensitive', 'true'],
        ]);
        expect(headers['total-number']).toEqual('0');
        expect(json.length === 0).toBeTruthy();
    });
    it('should be able to perform exact search', async () => {
        const { headers, json } = await getUsers([
            ['search.name', 'jerry swift'],
            ['mode.name', 'exact'],
        ]);
        expect(headers['total-number']).toEqual('2');
        expect(json.length === 2 && json.every((user) => user.name === 'Jerry Swift')).toBeTruthy();
    });
    it('should be able to perform hybrid search', async () => {
        const { headers, json } = await getUsers([
            ['search.name', '^Jerry((?!Jr).)*Jr{1}((?!Jr).)*$'],
            ['mode.name', 'posix'],
            ['search.username', 'search_%'],
            ['search.primaryPhone', '%0{3,}%'],
            ['mode.primaryPhone', 'similar_to'],
            ['joint', 'and'],
            ['isCaseSensitive', 'true'],
        ]);
        expect(headers['total-number']).toEqual('2');
        expect(json.length === 2 && json.every((user) => user.name === 'Jerry Swift Jr')).toBeTruthy();
    });
    it('should be able to perform hybrid search 2', async () => {
        const { headers, json } = await getUsers([
            ['search.name', '^T.?m Scot+$'],
            ['mode.name', 'posix'],
            ['search.username', 'search_tom%'],
            ['mode.username', 'similar_to'],
            ['isCaseSensitive', 'true'],
        ]);
        expect(headers['total-number']).toEqual('5');
        expect(json.length === 5 && json.every((user) => user.username?.startsWith('search_'))).toBeTruthy();
    });
    it('should accept multiple value for exact match', async () => {
        const { headers, json } = await getUsers([
            ['search.primaryEmail', 'jerry_swiFt_jr@foo.bar'],
            ['search.primaryEmail', 'jerry_swift_Jr_2@geek.best'],
            ['search.primaryEmail', 'jerry_swift_jr_jR@gmail.com'],
            ['mode.primaryEmail', 'exact'],
        ]);
        expect(headers['total-number']).toEqual('3');
        expect(json.length === 3 && json.every((user) => user.name?.startsWith('Jerry Swift Jr'))).toBeTruthy();
    });
    it('should accept multiple value for exact match 2', async () => {
        const { headers, json } = await getUsers([
            ['search.id', users[0].id],
            ['search.id', users[1].id],
            ['search.id', users[2].id],
            ['search.id', users[2].id],
            ['search.id', 'not_possible'],
            ['mode.id', 'exact'],
            ['isCaseSensitive', 'true'],
        ]);
        expect(headers['total-number']).toEqual('3');
        expect(json.length === 3 && json.every((user) => user.username?.startsWith('search_'))).toBeTruthy();
    });
    it('should throw if multiple values found for non-exact mode', async () => {
        await expectRejects(getUsers([
            ['search.primaryEmail', 'jerry_swift_jr@foo.bar'],
            ['search.primaryEmail', 'jerry_swift_jr_2@geek.best'],
            ['search.primaryEmail', 'jerry_swift_jr_jr@gmail.com'],
        ]), { code: 'request.invalid_input', statusCode: 400, messageIncludes: '`exact`' });
    });
    it('should throw if empty value found', async () => {
        await expectRejects(getUsers([
            ['search.primaryEmail', ''],
            ['search', 'tom'],
        ]), {
            code: 'request.invalid_input',
            statusCode: 400,
            messageIncludes: 'cannot be empty',
        });
    });
    it('should throw if search is case-insensitive and uses `similar_to` mode', async () => {
        await expectRejects(getUsers([
            ['search.primaryEmail', '%gmail%'],
            ['mode.primaryEmail', 'similar_to'],
        ]), {
            code: 'request.invalid_input',
            statusCode: 400,
            messageIncludes: 'case-insensitive',
        });
    });
    it('should throw if invalid const found', async () => {
        await Promise.all([
            expectRejects(getUsers([
                ['search.primaryEmail', '%gmail%'],
                ['mode.primaryEmail', 'similar to'],
            ]), {
                code: 'request.invalid_input',
                statusCode: 400,
                messageIncludes: 'is not valid',
            }),
            expectRejects(getUsers([['search.email', '%gmail%']]), {
                code: 'request.invalid_input',
                statusCode: 400,
                messageIncludes: 'is not valid',
            }),
            expectRejects(getUsers([
                ['search.primaryEmail', '%gmail%'],
                ['joint', 'and1'],
            ]), {
                code: 'request.invalid_input',
                statusCode: 400,
                messageIncludes: 'is not valid',
            }),
        ]);
    });
});
//# sourceMappingURL=admin-user.search.test.js.map