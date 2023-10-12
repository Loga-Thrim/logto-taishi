import type { CreateConnector, GetAuthorizationUri, GetConnectorConfig, GetUserInfo, SocialConnector } from '@logto/connector-kit';
export declare function buildAuthorizationUri(clientId: string, redirectUri: string, state: string): string;
export declare function getAuthorizationUri(getConfig: GetConnectorConfig): GetAuthorizationUri;
export declare function authorizationCallbackHandler(data: unknown): Promise<{
    code: string;
    redirectUri: string;
}>;
export declare function getAccessToken(code: string, appId: string, appSecret: string, redirectUri: string): Promise<{
    accessToken: string;
}>;
export declare function getUserInfo(getConfig: GetConnectorConfig): GetUserInfo;
declare const createFeishuConnector: CreateConnector<SocialConnector>;
export default createFeishuConnector;
