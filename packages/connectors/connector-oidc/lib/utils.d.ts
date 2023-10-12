import type { AccessTokenResponse, OidcConfig } from './types.js';
export declare const accessTokenRequester: (tokenEndpoint: string, queryParameters: Record<string, string>, timeout?: number) => Promise<AccessTokenResponse>;
export declare const isIdTokenInResponseType: (responseType: string) => boolean;
export declare const getIdToken: (config: OidcConfig, data: unknown, redirectUri: string) => Promise<{
    scope?: string | undefined;
    code?: string | undefined;
    access_token?: string | undefined;
    token_type?: string | undefined;
    expires_in?: number | undefined;
    refresh_token?: string | undefined;
    id_token: string;
}>;
