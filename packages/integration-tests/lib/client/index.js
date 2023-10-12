import LogtoClient from '@logto/node';
import { demoAppApplicationId } from '@logto/schemas';
import { assert } from '@silverhand/essentials';
import { got } from 'got';
import { consent, submitInteraction } from '#src/api/index.js';
import { demoAppRedirectUri, logtoUrl } from '#src/constants.js';
import { MemoryStorage } from './storage.js';
export const defaultConfig = {
    endpoint: logtoUrl,
    appId: demoAppApplicationId,
    persistAccessToken: false,
};
export default class MockClient {
    constructor(config) {
        this.rawCookies = [];
        this.consent = async () => {
            // Note: If sign in action completed successfully, we will get `_session.sig` in the cookie.
            assert(this.interactionCookie, new Error('Session not found'));
            assert(this.interactionCookie.includes('_session.sig'), new Error('Session not found'));
            const { redirectTo } = await consent(this.api, this.interactionCookie);
            // Note: should redirect to oidc auth endpoint
            assert(redirectTo.startsWith(`${this.config.endpoint}/oidc/auth`), new Error('Consent failed'));
            const authCodeResponse = await got.get(redirectTo, {
                headers: {
                    cookie: this.interactionCookie,
                },
                followRedirect: false,
            });
            // Note: Should redirect to the signInCallbackUri
            assert(authCodeResponse.statusCode === 303, new Error('Complete auth failed'));
            const signInCallbackUri = authCodeResponse.headers.location;
            assert(signInCallbackUri, new Error('Get sign in callback uri failed'));
            return signInCallbackUri;
        };
        this.storage = new MemoryStorage();
        this.config = { ...defaultConfig, ...config };
        this.api = got.extend({ prefixUrl: this.config.endpoint + '/api' });
        this.logto = new LogtoClient(this.config, {
            navigate: (url) => {
                this.navigateUrl = url;
            },
            storage: this.storage,
        });
    }
    // TODO: Rename to sessionCookies or something accurate
    get interactionCookie() {
        return this.rawCookies.join('; ');
    }
    get parsedCookies() {
        const map = new Map();
        for (const cookie of this.rawCookies) {
            for (const element of cookie.split(';')) {
                const [key, value] = element.trim().split('=');
                if (key) {
                    map.set(key, value);
                }
            }
        }
        return map;
    }
    async initSession(callbackUri = demoAppRedirectUri) {
        await this.logto.signIn(callbackUri);
        assert(this.navigateUrl, new Error('Unable to navigate to sign in uri'));
        assert(this.navigateUrl.startsWith(`${this.config.endpoint}/oidc/auth`), new Error('Unable to navigate to sign in uri'));
        // Mock SDK sign-in navigation
        const response = await got(this.navigateUrl, {
            followRedirect: false,
        });
        // Note: should redirect to sign-in page
        assert(response.statusCode === 303 && response.headers.location?.startsWith('/sign-in'), new Error('Visit sign in uri failed'));
        // Get session cookie
        this.rawCookies = response.headers['set-cookie'] ?? [];
        assert(this.interactionCookie, new Error('Get cookie from authorization endpoint failed'));
    }
    async processSession(redirectTo) {
        // Note: should redirect to OIDC auth endpoint
        assert(redirectTo.startsWith(`${this.config.endpoint}/oidc/auth`), new Error('SignIn or Register failed'));
        const authResponse = await got.get(redirectTo, {
            headers: {
                cookie: this.interactionCookie,
            },
            followRedirect: false,
        });
        // Note: Should redirect to logto consent page
        assert(authResponse.statusCode === 303 && authResponse.headers.location === '/sign-in/consent', new Error('Invoke auth before consent failed'));
        this.rawCookies = authResponse.headers['set-cookie'] ?? [];
        const signInCallbackUri = await this.consent();
        await this.logto.handleSignInCallback(signInCallbackUri);
    }
    async getAccessToken(resource) {
        return this.logto.getAccessToken(resource);
    }
    async getRefreshToken() {
        return this.logto.getRefreshToken();
    }
    async signOut(postSignOutRedirectUri) {
        if (!this.navigateUrl) {
            throw new Error('No navigate URL found for sign-out');
        }
        await this.logto.signOut(postSignOutRedirectUri);
        await got(this.navigateUrl);
    }
    async isAuthenticated() {
        return this.logto.isAuthenticated();
    }
    async getIdTokenClaims() {
        return this.logto.getIdTokenClaims();
    }
    assignCookie(cookie) {
        this.rawCookies = cookie.split(';').map((value) => value.trim());
    }
    async send(api, ...payload) {
        return api(this.interactionCookie, ...payload);
    }
    async successSend(api, ...payload) {
        return expect(api(this.interactionCookie, ...payload)).resolves.not.toThrow();
    }
    async submitInteraction() {
        return submitInteraction(this.api, this.interactionCookie);
    }
}
//# sourceMappingURL=index.js.map