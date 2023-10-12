import type { ConnectorMetadata } from '@logto/connector-kit';
export declare const authorizationEndpoint = "https://kauth.kakao.com/oauth/authorize";
export declare const accessTokenEndpoint = "https://kauth.kakao.com/oauth/token";
export declare const userInfoEndpoint = "https://kapi.kakao.com/v2/user/me";
export declare const defaultMetadata: ConnectorMetadata;
export declare const defaultTimeout = 5000;
