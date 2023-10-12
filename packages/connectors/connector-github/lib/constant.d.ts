import type { ConnectorMetadata } from '@logto/connector-kit';
export declare const authorizationEndpoint = "https://github.com/login/oauth/authorize";
export declare const scope = "read:user";
export declare const accessTokenEndpoint = "https://github.com/login/oauth/access_token";
export declare const userInfoEndpoint = "https://api.github.com/user";
export declare const defaultMetadata: ConnectorMetadata;
export declare const defaultTimeout = 5000;
