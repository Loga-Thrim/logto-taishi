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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemGuards = exports.systemKeys = exports.cloudflareGuard = exports.CloudflareKey = exports.hostnameProviderDataGuard = exports.demoSocialGuard = exports.DemoSocialKey = exports.demoSocialDataGuard = exports.DemoSocialProvider = exports.emailServiceProviderGuard = exports.EmailServiceProviderKey = exports.emailServiceConfigGuard = exports.sendgridEmailServiceConfigGuard = exports.EmailServiceProvider = exports.storageProviderGuard = exports.StorageProviderKey = exports.storageProviderDataGuard = exports.StorageProvider = exports.alterationStateGuard = exports.AlterationStateKey = void 0;
var zod_1 = require("zod");
// Alteration state
var AlterationStateKey;
(function (AlterationStateKey) {
    AlterationStateKey["AlterationState"] = "alterationState";
})(AlterationStateKey = exports.AlterationStateKey || (exports.AlterationStateKey = {}));
exports.alterationStateGuard = Object.freeze((_a = {},
    _a[AlterationStateKey.AlterationState] = zod_1.z.object({
        timestamp: zod_1.z.number(),
        updatedAt: zod_1.z.string().optional(),
    }),
    _a));
// Storage provider
var StorageProvider;
(function (StorageProvider) {
    StorageProvider["AzureStorage"] = "AzureStorage";
    StorageProvider["S3Storage"] = "S3Storage";
})(StorageProvider = exports.StorageProvider || (exports.StorageProvider = {}));
var basicConfig = {
    publicUrl: zod_1.z.string().optional(),
};
exports.storageProviderDataGuard = zod_1.z.discriminatedUnion('provider', [
    zod_1.z.object(__assign({ provider: zod_1.z.literal(StorageProvider.AzureStorage), connectionString: zod_1.z.string(), container: zod_1.z.string() }, basicConfig)),
    zod_1.z.object(__assign({ provider: zod_1.z.literal(StorageProvider.S3Storage), endpoint: zod_1.z.string().optional(), region: zod_1.z.string().optional(), bucket: zod_1.z.string(), accessKeyId: zod_1.z.string(), accessSecretKey: zod_1.z.string() }, basicConfig)),
]);
var StorageProviderKey;
(function (StorageProviderKey) {
    StorageProviderKey["StorageProvider"] = "storageProvider";
})(StorageProviderKey = exports.StorageProviderKey || (exports.StorageProviderKey = {}));
exports.storageProviderGuard = Object.freeze((_b = {},
    _b[StorageProviderKey.StorageProvider] = exports.storageProviderDataGuard,
    _b));
// Email service provider
var EmailServiceProvider;
(function (EmailServiceProvider) {
    EmailServiceProvider["SendGrid"] = "SendGrid";
})(EmailServiceProvider = exports.EmailServiceProvider || (exports.EmailServiceProvider = {}));
exports.sendgridEmailServiceConfigGuard = zod_1.z.object({
    provider: zod_1.z.literal(EmailServiceProvider.SendGrid),
    apiKey: zod_1.z.string(),
    templateId: zod_1.z.string(),
    fromName: zod_1.z.string(),
    fromEmail: zod_1.z.string(),
});
exports.emailServiceConfigGuard = zod_1.z.discriminatedUnion('provider', [
    exports.sendgridEmailServiceConfigGuard,
]);
var EmailServiceProviderKey;
(function (EmailServiceProviderKey) {
    EmailServiceProviderKey["EmailServiceProvider"] = "emailServiceProvider";
})(EmailServiceProviderKey = exports.EmailServiceProviderKey || (exports.EmailServiceProviderKey = {}));
exports.emailServiceProviderGuard = Object.freeze((_c = {},
    _c[EmailServiceProviderKey.EmailServiceProvider] = exports.emailServiceConfigGuard,
    _c));
// Demo social connectors
var DemoSocialProvider;
(function (DemoSocialProvider) {
    DemoSocialProvider["Google"] = "google";
    DemoSocialProvider["GitHub"] = "github";
    DemoSocialProvider["Discord"] = "discord";
})(DemoSocialProvider = exports.DemoSocialProvider || (exports.DemoSocialProvider = {}));
exports.demoSocialDataGuard = zod_1.z
    .object({
    name: zod_1.z.string(),
    logo: zod_1.z.string(),
    logoDark: zod_1.z.string(),
    provider: zod_1.z.nativeEnum(DemoSocialProvider),
    clientId: zod_1.z.string(),
})
    .array();
var DemoSocialKey;
(function (DemoSocialKey) {
    DemoSocialKey["DemoSocial"] = "demoSocial";
})(DemoSocialKey = exports.DemoSocialKey || (exports.DemoSocialKey = {}));
exports.demoSocialGuard = Object.freeze((_d = {},
    _d[DemoSocialKey.DemoSocial] = exports.demoSocialDataGuard,
    _d));
// Cloudflare Hostnames
exports.hostnameProviderDataGuard = zod_1.z.object({
    zoneId: zod_1.z.string(),
    apiToken: zod_1.z.string(), // Requires zone permission for "SSL and Certificates Edit"
});
var CloudflareKey;
(function (CloudflareKey) {
    CloudflareKey["HostnameProvider"] = "cloudflareHostnameProvider";
})(CloudflareKey = exports.CloudflareKey || (exports.CloudflareKey = {}));
exports.cloudflareGuard = Object.freeze((_e = {},
    _e[CloudflareKey.HostnameProvider] = exports.hostnameProviderDataGuard,
    _e));
exports.systemKeys = Object.freeze(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], Object.values(AlterationStateKey), true), Object.values(StorageProviderKey), true), Object.values(DemoSocialKey), true), Object.values(CloudflareKey), true), Object.values(EmailServiceProviderKey), true));
exports.systemGuards = Object.freeze(__assign(__assign(__assign(__assign(__assign({}, exports.alterationStateGuard), exports.storageProviderGuard), exports.demoSocialGuard), exports.cloudflareGuard), exports.emailServiceProviderGuard));
