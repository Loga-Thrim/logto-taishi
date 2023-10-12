import type { OauthConfig, TokenEndpointResponseType, AccessTokenResponse, ProfileMap } from './types.js';
export declare const accessTokenRequester: (tokenEndpoint: string, queryParameters: Record<string, string>, tokenEndpointResponseType: TokenEndpointResponseType, timeout?: number) => Promise<AccessTokenResponse>;
export declare const userProfileMapping: (originUserProfile: object, keyMapping: ProfileMap) => {
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    avatar?: string | undefined;
    id: string;
};
export declare const getAccessToken: (config: OauthConfig, data: unknown, redirectUri: string) => Promise<{
    scope?: string | undefined;
    expires_in?: number | undefined;
    refresh_token?: string | undefined;
    access_token: string;
    token_type: string;
}>;
