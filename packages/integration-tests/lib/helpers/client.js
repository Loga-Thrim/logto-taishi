import { assert } from '@silverhand/essentials';
import MockClient from '#src/client/index.js';
export const initClient = async (config, redirectUri) => {
    const client = new MockClient(config);
    await client.initSession(redirectUri);
    assert(client.interactionCookie, new Error('Session not found'));
    return client;
};
export const processSession = async (client, redirectTo) => {
    await client.processSession(redirectTo);
    await expect(client.isAuthenticated()).resolves.toBe(true);
    const { sub } = await client.getIdTokenClaims();
    return sub;
};
export const logoutClient = async (client) => {
    await client.signOut();
    await expect(client.isAuthenticated()).resolves.toBe(false);
};
//# sourceMappingURL=client.js.map