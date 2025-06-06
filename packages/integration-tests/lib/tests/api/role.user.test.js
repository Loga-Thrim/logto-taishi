import { RoleType } from '@logto/schemas';
import { HTTPError } from 'got';
import { createUser } from '#src/api/index.js';
import { assignUsersToRole, createRole, deleteUserFromRole, getRoles, getRoleUsers, } from '#src/api/role.js';
import { expectRejects } from '#src/helpers/index.js';
import { generateNewUserProfile } from '#src/helpers/user.js';
describe('roles users', () => {
    it('should get role users successfully and can get roles correctly (specifying exclude user)', async () => {
        const role = await createRole({});
        const user = await createUser(generateNewUserProfile({}));
        await assignUsersToRole([user.id], role.id);
        const users = await getRoleUsers(role.id);
        expect(users.length).toBe(1);
        expect(users[0]).toHaveProperty('id', user.id);
        const allRolesWithoutUsersRoles = await getRoles({ excludeUserId: user.id });
        expect(allRolesWithoutUsersRoles.find(({ id }) => id === role.id)).toBeUndefined();
    });
    it('should return 404 if role not found', async () => {
        const response = await getRoleUsers('not-found').catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode).toBe(404);
    });
    it('should assign users to role successfully', async () => {
        const role = await createRole({});
        const user1 = await createUser(generateNewUserProfile({}));
        const user2 = await createUser(generateNewUserProfile({}));
        await assignUsersToRole([user1.id, user2.id], role.id);
        const users = await getRoleUsers(role.id);
        expect(users.length).toBe(2);
    });
    it('should throw when assigning users to m2m role', async () => {
        const m2mRole = await createRole({ type: RoleType.MachineToMachine });
        const user = await createUser(generateNewUserProfile({}));
        await expectRejects(assignUsersToRole([user.id], m2mRole.id), {
            code: 'entity.db_constraint_violated',
            statusCode: 422,
        });
        const users = await getRoleUsers(m2mRole.id);
        expect(users.length).toBe(0);
    });
    it('should fail when try to assign empty users', async () => {
        const role = await createRole({});
        const response = await assignUsersToRole([], role.id).catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode).toBe(400);
    });
    it('should fail with invalid user input', async () => {
        const role = await createRole({});
        const response = await assignUsersToRole([''], role.id).catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode).toBe(400);
    });
    it('should fail if role not found', async () => {
        const user = await createUser(generateNewUserProfile({}));
        const response = await assignUsersToRole([user.id], 'not-found').catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode).toBe(404);
    });
    it('should fail if user not found', async () => {
        const role = await createRole({});
        const response = await assignUsersToRole(['not-found'], role.id).catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode).toBe(404);
    });
    it('should remove user from role successfully', async () => {
        const role = await createRole({});
        const user = await createUser(generateNewUserProfile({}));
        await assignUsersToRole([user.id], role.id);
        const users = await getRoleUsers(role.id);
        expect(users.length).toBe(1);
        await deleteUserFromRole(user.id, role.id);
        const newUsers = await getRoleUsers(role.id);
        expect(newUsers.length).toBe(0);
    });
    it('should fail if role not found when trying to remove user from role', async () => {
        const user = await createUser(generateNewUserProfile({}));
        const response = await deleteUserFromRole(user.id, 'not-found').catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode).toBe(404);
    });
    it('should fail if user not found when trying to remove user from role', async () => {
        const role = await createRole({});
        const response = await deleteUserFromRole('not-found', role.id).catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode).toBe(404);
    });
});
//# sourceMappingURL=role.user.test.js.map