import { z } from 'zod';
/* --- Logto OIDC configs --- */
export var LogtoOidcConfigKey;
(function (LogtoOidcConfigKey) {
    LogtoOidcConfigKey["PrivateKeys"] = "oidc.privateKeys";
    LogtoOidcConfigKey["CookieKeys"] = "oidc.cookieKeys";
})(LogtoOidcConfigKey || (LogtoOidcConfigKey = {}));
export const logtoOidcConfigGuard = Object.freeze({
    [LogtoOidcConfigKey.PrivateKeys]: z.string().array(),
    [LogtoOidcConfigKey.CookieKeys]: z.string().array(),
});
/* --- Logto tenant configs --- */
export const adminConsoleDataGuard = z.object({
    signInExperienceCustomized: z.boolean(),
});
/* --- Logto tenant cloud connection config --- */
export const cloudConnectionDataGuard = z.object({
    appId: z.string(),
    appSecret: z.string(),
    resource: z.string(),
});
export var LogtoTenantConfigKey;
(function (LogtoTenantConfigKey) {
    LogtoTenantConfigKey["AdminConsole"] = "adminConsole";
    LogtoTenantConfigKey["CloudConnection"] = "cloudConnection";
    /** The URL to redirect when session not found in Sign-in Experience. */
    LogtoTenantConfigKey["SessionNotFoundRedirectUrl"] = "sessionNotFoundRedirectUrl";
})(LogtoTenantConfigKey || (LogtoTenantConfigKey = {}));
export const logtoTenantConfigGuard = Object.freeze({
    [LogtoTenantConfigKey.AdminConsole]: adminConsoleDataGuard,
    [LogtoTenantConfigKey.CloudConnection]: cloudConnectionDataGuard,
    [LogtoTenantConfigKey.SessionNotFoundRedirectUrl]: z.object({ url: z.string() }),
});
export const logtoConfigKeys = Object.freeze([
    ...Object.values(LogtoOidcConfigKey),
    ...Object.values(LogtoTenantConfigKey),
]);
export const logtoConfigGuards = Object.freeze({
    ...logtoOidcConfigGuard,
    ...logtoTenantConfigGuard,
});
