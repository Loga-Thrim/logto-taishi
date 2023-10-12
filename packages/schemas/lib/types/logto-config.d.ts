import type { ZodType } from 'zod';
import { z } from 'zod';
export declare enum LogtoOidcConfigKey {
    PrivateKeys = "oidc.privateKeys",
    CookieKeys = "oidc.cookieKeys"
}
export type LogtoOidcConfigType = {
    [LogtoOidcConfigKey.PrivateKeys]: string[];
    [LogtoOidcConfigKey.CookieKeys]: string[];
};
export declare const logtoOidcConfigGuard: Readonly<{
    [key in LogtoOidcConfigKey]: ZodType<LogtoOidcConfigType[key]>;
}>;
export declare const adminConsoleDataGuard: z.ZodObject<{
    signInExperienceCustomized: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    signInExperienceCustomized: boolean;
}, {
    signInExperienceCustomized: boolean;
}>;
export type AdminConsoleData = z.infer<typeof adminConsoleDataGuard>;
export declare const cloudConnectionDataGuard: z.ZodObject<{
    appId: z.ZodString;
    appSecret: z.ZodString;
    resource: z.ZodString;
}, "strip", z.ZodTypeAny, {
    resource: string;
    appId: string;
    appSecret: string;
}, {
    resource: string;
    appId: string;
    appSecret: string;
}>;
export type CloudConnectionData = z.infer<typeof cloudConnectionDataGuard>;
export declare enum LogtoTenantConfigKey {
    AdminConsole = "adminConsole",
    CloudConnection = "cloudConnection",
    /** The URL to redirect when session not found in Sign-in Experience. */
    SessionNotFoundRedirectUrl = "sessionNotFoundRedirectUrl"
}
export type LogtoTenantConfigType = {
    [LogtoTenantConfigKey.AdminConsole]: AdminConsoleData;
    [LogtoTenantConfigKey.CloudConnection]: CloudConnectionData;
    [LogtoTenantConfigKey.SessionNotFoundRedirectUrl]: {
        url: string;
    };
};
export declare const logtoTenantConfigGuard: Readonly<{
    [key in LogtoTenantConfigKey]: ZodType<LogtoTenantConfigType[key]>;
}>;
export type LogtoConfigKey = LogtoOidcConfigKey | LogtoTenantConfigKey;
export type LogtoConfigType = LogtoOidcConfigType | LogtoTenantConfigType;
export type LogtoConfigGuard = typeof logtoOidcConfigGuard & typeof logtoTenantConfigGuard;
export declare const logtoConfigKeys: readonly LogtoConfigKey[];
export declare const logtoConfigGuards: LogtoConfigGuard;
