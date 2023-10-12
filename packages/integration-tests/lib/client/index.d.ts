import type { LogtoConfig } from '@logto/node';
import type { Nullable, Optional } from '@silverhand/essentials';
export declare const defaultConfig: {
    endpoint: string;
    appId: string;
    persistAccessToken: boolean;
};
export default class MockClient {
    rawCookies: string[];
    protected readonly config: LogtoConfig;
    private navigateUrl?;
    private readonly storage;
    private readonly logto;
    private readonly api;
    constructor(config?: Partial<LogtoConfig>);
    get interactionCookie(): string;
    get parsedCookies(): Map<string, Optional<string>>;
    initSession(callbackUri?: string): Promise<void>;
    processSession(redirectTo: string): Promise<void>;
    getAccessToken(resource?: string): Promise<string>;
    getRefreshToken(): Promise<Nullable<string>>;
    signOut(postSignOutRedirectUri?: string): Promise<void>;
    isAuthenticated(): Promise<boolean>;
    getIdTokenClaims(): Promise<import("@logto/node").IdTokenClaims>;
    assignCookie(cookie: string): void;
    send<Args extends unknown[], T>(api: (cookie: string, ...args: Args) => Promise<T>, ...payload: Args): Promise<T>;
    successSend<Args extends unknown[], T>(api: (cookie: string, ...args: Args) => Promise<T>, ...payload: Args): Promise<void>;
    submitInteraction(): Promise<import("#src/api/index.js").RedirectResponse>;
    private readonly consent;
}
