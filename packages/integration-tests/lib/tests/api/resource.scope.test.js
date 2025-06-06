import { defaultManagementApi } from '@logto/schemas';
import { HTTPError } from 'got';
import { createResource } from '#src/api/index.js';
import { createScope, deleteScope, getScopes, updateScope } from '#src/api/scope.js';
import { generateScopeName } from '#src/utils.js';
describe('scopes', () => {
    it('should get management api resource scopes successfully', async () => {
        const scopes = await getScopes(defaultManagementApi.resource.id);
        expect(scopes[0]).toMatchObject(expect.objectContaining(defaultManagementApi.scopes[0]));
    });
    it('should create scope successfully', async () => {
        const resource = await createResource();
        const scopeName = generateScopeName();
        const createdScope = await createScope(resource.id, scopeName);
        expect(createdScope.name).toBe(scopeName);
        const scopes = await getScopes(resource.id);
        expect(scopes.some(({ name }) => name === scopeName)).toBeTruthy();
    });
    it('should fail when create scope with name conflict', async () => {
        const resource = await createResource();
        const createdScope = await createScope(resource.id);
        const response = await createScope(resource.id, createdScope.name).catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode === 422).toBe(true);
    });
    it('should return 404 when create scope with invalid resource id', async () => {
        const response = await createScope('invalid_resource_id', 'invalid_scope_name').catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode === 404).toBe(true);
    });
    it('should return 400 if scope name is empty', async () => {
        const resource = await createResource();
        const response = await createScope(resource.id, '').catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode === 400).toBe(true);
    });
    it('should return 400 if scope name has empty space', async () => {
        const resource = await createResource();
        const response = await createScope(resource.id, 'scope id').catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode === 400).toBe(true);
    });
    it('should update scope successfully', async () => {
        const resource = await createResource();
        const scope = await createScope(resource.id);
        expect(scope).toBeTruthy();
        const newScopeName = `new_${scope.name}`;
        const newScopeDescription = `new_${scope.description}`;
        const updatesScope = await updateScope(resource.id, scope.id, {
            name: newScopeName,
            description: newScopeDescription,
        });
        expect(updatesScope.id).toBe(scope.id);
        expect(updatesScope.name).toBe(newScopeName);
        expect(updatesScope.description).toBe(newScopeDescription);
    });
    it('should fail when update scope with name conflict', async () => {
        const resource = await createResource();
        const createdScope = await createScope(resource.id);
        const createdScope2 = await createScope(resource.id);
        const response = await updateScope(resource.id, createdScope2.id, {
            name: createdScope.name,
        }).catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode === 422).toBe(true);
    });
    it('should return 400 if update scope name that has empty space', async () => {
        const resource = await createResource();
        const scope = await createScope(resource.id);
        const response = await updateScope(resource.id, scope.id, {
            name: 'scope name',
        }).catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode === 400).toBe(true);
    });
    it('should return 404 when update scope with invalid resource id', async () => {
        const response = await updateScope('invalid_resource_id', 'invalid_scope_id', {
            name: 'scope',
        }).catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode === 404).toBe(true);
    });
    it('should return 404 when update scope with invalid scope id', async () => {
        const resource = await createResource();
        const response = await updateScope(resource.id, 'invalid_scope_id', {
            name: 'scope',
        }).catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode === 404).toBe(true);
    });
    it('should delete scope successfully', async () => {
        const resource = await createResource();
        const scope = await createScope(resource.id);
        expect(scope).toBeTruthy();
        await deleteScope(resource.id, scope.id);
        const scopes = await getScopes(resource.id);
        expect(scopes.some(({ name }) => name === scope.name)).toBeFalsy();
    });
});
//# sourceMappingURL=resource.scope.test.js.map