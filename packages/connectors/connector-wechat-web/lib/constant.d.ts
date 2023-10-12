import type { ConnectorMetadata } from '@logto/connector-kit';
export declare const authorizationEndpoint = "https://open.weixin.qq.com/connect/qrconnect";
export declare const accessTokenEndpoint = "https://api.weixin.qq.com/sns/oauth2/access_token";
export declare const userInfoEndpoint = "https://api.weixin.qq.com/sns/userinfo";
export declare const scope = "snsapi_login";
export declare const invalidAuthCodeErrcode: number[];
export declare const invalidAccessTokenErrcode: number[];
export declare const defaultMetadata: ConnectorMetadata;
export declare const defaultTimeout = 5000;
