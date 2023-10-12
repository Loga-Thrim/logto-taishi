import type { ConnectorMetadata } from '@logto/connector-kit';
export declare const authorizationEndpoint = "https://nid.naver.com/oauth2.0/authorize";
export declare const accessTokenEndpoint = "https://nid.naver.com/oauth2.0/token";
export declare const userInfoEndpoint = "https://openapi.naver.com/v1/nid/me";
export declare const defaultMetadata: ConnectorMetadata;
export declare const defaultTimeout = 5000;
