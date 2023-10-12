import type { ConnectorMetadata } from '@logto/connector-kit';
export declare const authorizationEndpoint = "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm";
export declare const alipayEndpoint = "https://openapi.alipay.com/gateway.do";
export declare const scope = "auth_user";
export declare const methodForAccessToken = "alipay.system.oauth.token";
export declare const methodForUserInfo = "alipay.user.info.share";
export declare const alipaySigningAlgorithmMapping: {
    readonly RSA: "RSA-SHA1";
    readonly RSA2: "RSA-SHA256";
};
export declare const alipaySigningAlgorithms: readonly ["RSA", "RSA2"];
export declare const charsetEnum: readonly ["gbk", "utf8"];
export declare const fallbackCharset = "utf8";
export declare const invalidAccessTokenCode: string[];
export declare const invalidAccessTokenSubCode: string[];
export declare const defaultMetadata: ConnectorMetadata;
export declare const defaultTimeout = 5000;
export declare const timestampFormat = "YYYY-MM-DD HH:mm:ss";
