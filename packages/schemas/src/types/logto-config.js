"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.logtoConfigGuards = exports.logtoConfigKeys = exports.logtoTenantConfigGuard = exports.LogtoTenantConfigKey = exports.cloudConnectionDataGuard = exports.adminConsoleDataGuard = exports.logtoOidcConfigGuard = exports.LogtoOidcConfigKey = void 0;
var zod_1 = require("zod");
/* --- Logto OIDC configs --- */
var LogtoOidcConfigKey;
(function (LogtoOidcConfigKey) {
    LogtoOidcConfigKey["PrivateKeys"] = "oidc.privateKeys";
    LogtoOidcConfigKey["CookieKeys"] = "oidc.cookieKeys";
})(LogtoOidcConfigKey = exports.LogtoOidcConfigKey || (exports.LogtoOidcConfigKey = {}));
exports.logtoOidcConfigGuard = Object.freeze((_a = {},
    _a[LogtoOidcConfigKey.PrivateKeys] = zod_1.z.string().array(),
    _a[LogtoOidcConfigKey.CookieKeys] = zod_1.z.string().array(),
    _a));
/* --- Logto tenant configs --- */
exports.adminConsoleDataGuard = zod_1.z.object({
    signInExperienceCustomized: zod_1.z.boolean(),
});
/* --- Logto tenant cloud connection config --- */
exports.cloudConnectionDataGuard = zod_1.z.object({
    appId: zod_1.z.string(),
    appSecret: zod_1.z.string(),
    resource: zod_1.z.string(),
});
var LogtoTenantConfigKey;
(function (LogtoTenantConfigKey) {
    LogtoTenantConfigKey["AdminConsole"] = "adminConsole";
    LogtoTenantConfigKey["CloudConnection"] = "cloudConnection";
    /** The URL to redirect when session not found in Sign-in Experience. */
    LogtoTenantConfigKey["SessionNotFoundRedirectUrl"] = "sessionNotFoundRedirectUrl";
})(LogtoTenantConfigKey = exports.LogtoTenantConfigKey || (exports.LogtoTenantConfigKey = {}));
exports.logtoTenantConfigGuard = Object.freeze((_b = {},
    _b[LogtoTenantConfigKey.AdminConsole] = exports.adminConsoleDataGuard,
    _b[LogtoTenantConfigKey.CloudConnection] = exports.cloudConnectionDataGuard,
    _b[LogtoTenantConfigKey.SessionNotFoundRedirectUrl] = zod_1.z.object({ url: zod_1.z.string() }),
    _b));
exports.logtoConfigKeys = Object.freeze(__spreadArray(__spreadArray([], Object.values(LogtoOidcConfigKey), true), Object.values(LogtoTenantConfigKey), true));
exports.logtoConfigGuards = Object.freeze(__assign(__assign({}, exports.logtoOidcConfigGuard), exports.logtoTenantConfigGuard));
