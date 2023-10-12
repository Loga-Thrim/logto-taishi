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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentinelActivityPayloadGuard = exports.sentinelActivityActionGuard = exports.SentinelActivityAction = exports.sentinelActivityTargetTypeGuard = exports.SentinelActivityTargetType = exports.domainStatusGuard = exports.DomainStatus = exports.cloudflareDataGuard = exports.domainDnsRecordsGuard = exports.domainDnsRecordGuard = exports.hookConfigGuard = exports.hookEventsGuard = exports.hookEventGuard = exports.HookEvent = exports.partialPasswordPolicyGuard = exports.logContextPayloadGuard = exports.LogResult = exports.translationGuard = exports.mfaVerificationsGuard = exports.mfaVerificationGuard = exports.mfaVerificationBackupCode = exports.mfaVerificationWebAuthn = exports.mfaVerificationTotp = exports.baseMfaVerification = exports.identitiesGuard = exports.roleNamesGuard = exports.mfaGuard = exports.MfaPolicy = exports.mfaFactorsGuard = exports.MfaFactor = exports.customContentGuard = exports.connectorTargetsGuard = exports.signInGuard = exports.signUpGuard = exports.SignInIdentifier = exports.languageInfoGuard = exports.brandingGuard = exports.colorGuard = exports.customClientMetadataGuard = exports.CustomClientMetadataKey = exports.oidcClientMetadataGuard = exports.oidcModelInstancePayloadGuard = exports.jsonObjectGuard = exports.jsonGuard = exports.configurableConnectorMetadataGuard = void 0;
var core_kit_1 = require("@logto/core-kit");
var language_kit_1 = require("@logto/language-kit");
var zod_1 = require("zod");
var connector_kit_1 = require("@logto/connector-kit");
Object.defineProperty(exports, "configurableConnectorMetadataGuard", { enumerable: true, get: function () { return connector_kit_1.configurableConnectorMetadataGuard; } });
/* === Commonly Used === */
// Copied from https://github.com/colinhacks/zod#json-type
var literalSchema = zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean(), zod_1.z.null()]);
exports.jsonGuard = zod_1.z.lazy(function () {
    return zod_1.z.union([literalSchema, zod_1.z.array(exports.jsonGuard), zod_1.z.record(exports.jsonGuard)]);
});
exports.jsonObjectGuard = zod_1.z.record(exports.jsonGuard);
/* === OIDC Model Instances === */
exports.oidcModelInstancePayloadGuard = zod_1.z
    .object({
    userCode: zod_1.z.string().optional(),
    uid: zod_1.z.string().optional(),
    grantId: zod_1.z.string().optional(),
})
    /**
     * Try to use `.passthrough()` if type has been fixed.
     * https://github.com/colinhacks/zod/issues/452
     */
    .catchall(zod_1.z.unknown());
exports.oidcClientMetadataGuard = zod_1.z.object({
    redirectUris: zod_1.z
        .string()
        .refine(function (url) { return (0, core_kit_1.validateRedirectUrl)(url, 'web'); })
        .or(zod_1.z.string().refine(function (url) { return (0, core_kit_1.validateRedirectUrl)(url, 'mobile'); }))
        .array(),
    postLogoutRedirectUris: zod_1.z.string().url().array(),
    logoUri: zod_1.z.string().optional(),
});
var CustomClientMetadataKey;
(function (CustomClientMetadataKey) {
    CustomClientMetadataKey["CorsAllowedOrigins"] = "corsAllowedOrigins";
    CustomClientMetadataKey["IdTokenTtl"] = "idTokenTtl";
    /** @deprecated Use {@link RefreshTokenTtlInDays} instead. */
    CustomClientMetadataKey["RefreshTokenTtl"] = "refreshTokenTtl";
    CustomClientMetadataKey["RefreshTokenTtlInDays"] = "refreshTokenTtlInDays";
    CustomClientMetadataKey["TenantId"] = "tenantId";
    /**
     * Enabling this configuration will allow Logto to always issue Refresh Tokens, regardless of whether `prompt=consent` is presented in the authentication request.
     *
     * It only works for web applications when the client allowed grant types includes `refresh_token`.
     *
     * This config is for the third-party integrations that do not strictly follow OpenID Connect standards due to some reasons (e.g. they only know OAuth, but requires a Refresh Token to be returned anyway).
     */
    CustomClientMetadataKey["AlwaysIssueRefreshToken"] = "alwaysIssueRefreshToken";
    /**
     * When enabled (default), Logto will issue a new Refresh Token for token requests when 70% of the original Time to Live (TTL) has passed.
     *
     * It can be turned off for only traditional web apps for enhanced security.
     */
    CustomClientMetadataKey["RotateRefreshToken"] = "rotateRefreshToken";
})(CustomClientMetadataKey = exports.CustomClientMetadataKey || (exports.CustomClientMetadataKey = {}));
exports.customClientMetadataGuard = zod_1.z.object((_a = {},
    _a[CustomClientMetadataKey.CorsAllowedOrigins] = zod_1.z.string().min(1).array().optional(),
    _a[CustomClientMetadataKey.IdTokenTtl] = zod_1.z.number().optional(),
    _a[CustomClientMetadataKey.RefreshTokenTtl] = zod_1.z.number().optional(),
    _a[CustomClientMetadataKey.RefreshTokenTtlInDays] = zod_1.z.number().int().min(1).max(90).optional(),
    _a[CustomClientMetadataKey.TenantId] = zod_1.z.string().optional(),
    _a[CustomClientMetadataKey.AlwaysIssueRefreshToken] = zod_1.z.boolean().optional(),
    _a[CustomClientMetadataKey.RotateRefreshToken] = zod_1.z.boolean().optional(),
    _a));
/* === SignIn Experiences === */
exports.colorGuard = zod_1.z.object({
    primaryColor: zod_1.z.string().regex(core_kit_1.hexColorRegEx),
    isDarkModeEnabled: zod_1.z.boolean(),
    darkPrimaryColor: zod_1.z.string().regex(core_kit_1.hexColorRegEx),
});
exports.brandingGuard = zod_1.z.object({
    logoUrl: zod_1.z.string().url().optional(),
    darkLogoUrl: zod_1.z.string().url().optional(),
    favicon: zod_1.z.string().url().optional(),
});
exports.languageInfoGuard = zod_1.z.object({
    autoDetect: zod_1.z.boolean(),
    fallbackLanguage: language_kit_1.languageTagGuard,
});
var SignInIdentifier;
(function (SignInIdentifier) {
    SignInIdentifier["Username"] = "username";
    SignInIdentifier["Email"] = "email";
    SignInIdentifier["Phone"] = "phone";
})(SignInIdentifier = exports.SignInIdentifier || (exports.SignInIdentifier = {}));
exports.signUpGuard = zod_1.z.object({
    identifiers: zod_1.z.nativeEnum(SignInIdentifier).array(),
    password: zod_1.z.boolean(),
    verify: zod_1.z.boolean(),
});
exports.signInGuard = zod_1.z.object({
    methods: zod_1.z
        .object({
        identifier: zod_1.z.nativeEnum(SignInIdentifier),
        password: zod_1.z.boolean(),
        verificationCode: zod_1.z.boolean(),
        isPasswordPrimary: zod_1.z.boolean(),
    })
        .array(),
});
exports.connectorTargetsGuard = zod_1.z.string().array();
exports.customContentGuard = zod_1.z.record(zod_1.z.string());
var MfaFactor;
(function (MfaFactor) {
    MfaFactor["TOTP"] = "Totp";
    MfaFactor["WebAuthn"] = "WebAuthn";
    MfaFactor["BackupCode"] = "BackupCode";
})(MfaFactor = exports.MfaFactor || (exports.MfaFactor = {}));
exports.mfaFactorsGuard = zod_1.z.nativeEnum(MfaFactor).array();
var MfaPolicy;
(function (MfaPolicy) {
    MfaPolicy["UserControlled"] = "UserControlled";
    MfaPolicy["Mandatory"] = "Mandatory";
})(MfaPolicy = exports.MfaPolicy || (exports.MfaPolicy = {}));
exports.mfaGuard = zod_1.z.object({
    factors: exports.mfaFactorsGuard,
    policy: zod_1.z.nativeEnum(MfaPolicy),
});
/* === Users === */
exports.roleNamesGuard = zod_1.z.string().array();
var identityGuard = zod_1.z.object({
    userId: zod_1.z.string(),
    details: zod_1.z.object({}).optional(), // Connector's userinfo details, schemaless
});
exports.identitiesGuard = zod_1.z.record(identityGuard);
exports.baseMfaVerification = {
    id: zod_1.z.string(),
    createdAt: zod_1.z.string(),
};
exports.mfaVerificationTotp = zod_1.z.object(__assign(__assign({ type: zod_1.z.literal(MfaFactor.TOTP) }, exports.baseMfaVerification), { key: zod_1.z.string() }));
exports.mfaVerificationWebAuthn = zod_1.z.object(__assign(__assign({ type: zod_1.z.literal(MfaFactor.WebAuthn) }, exports.baseMfaVerification), { credentialId: zod_1.z.string(), publicKey: zod_1.z.string(), counter: zod_1.z.number(), agent: zod_1.z.string() }));
exports.mfaVerificationBackupCode = zod_1.z.object(__assign(__assign({ type: zod_1.z.literal(MfaFactor.BackupCode) }, exports.baseMfaVerification), { code: zod_1.z.string(), usedAt: zod_1.z.string().optional() }));
exports.mfaVerificationGuard = zod_1.z.discriminatedUnion('type', [
    exports.mfaVerificationTotp,
    exports.mfaVerificationWebAuthn,
    exports.mfaVerificationBackupCode,
]);
exports.mfaVerificationsGuard = exports.mfaVerificationGuard.array();
exports.translationGuard = zod_1.z.lazy(function () {
    return zod_1.z.record(zod_1.z.string().or(exports.translationGuard));
});
/* === Logs === */
var LogResult;
(function (LogResult) {
    LogResult["Success"] = "Success";
    LogResult["Error"] = "Error";
})(LogResult = exports.LogResult || (exports.LogResult = {}));
exports.logContextPayloadGuard = zod_1.z
    .object({
    key: zod_1.z.string(),
    result: zod_1.z.nativeEnum(LogResult),
    error: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).or(zod_1.z.string()).optional(),
    ip: zod_1.z.string().optional(),
    userAgent: zod_1.z.string().optional(),
    userId: zod_1.z.string().optional(),
    applicationId: zod_1.z.string().optional(),
    sessionId: zod_1.z.string().optional(),
})
    .catchall(zod_1.z.unknown());
exports.partialPasswordPolicyGuard = core_kit_1.passwordPolicyGuard.deepPartial();
/* === Hooks === */
var HookEvent;
(function (HookEvent) {
    HookEvent["PostRegister"] = "PostRegister";
    HookEvent["PostSignIn"] = "PostSignIn";
    HookEvent["PostResetPassword"] = "PostResetPassword";
})(HookEvent = exports.HookEvent || (exports.HookEvent = {}));
exports.hookEventGuard = zod_1.z.nativeEnum(HookEvent);
exports.hookEventsGuard = exports.hookEventGuard.array();
exports.hookConfigGuard = zod_1.z.object({
    /** We don't need `type` since v1 only has web hook */
    // type: 'web';
    /** Method fixed to `POST` */
    url: zod_1.z.string(),
    /** Additional headers that attach to the request */
    headers: zod_1.z.record(zod_1.z.string()).optional(),
    /**
     * @deprecated
     * Retry times when hook response status >= 500.
     * Now the retry times is fixed to 3.
     * Keep for backward compatibility.
     */
    retries: zod_1.z.number().gte(0).lte(3).optional(),
});
/* === Custom domains and Cloudflare === */
exports.domainDnsRecordGuard = zod_1.z.object({
    name: zod_1.z.string(),
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
exports.domainDnsRecordsGuard = exports.domainDnsRecordGuard.array();
// https://developers.cloudflare.com/api/operations/custom-hostname-for-a-zone-list-custom-hostnames#Responses
// Predefine the "useful" fields
exports.cloudflareDataGuard = zod_1.z
    .object({
    id: zod_1.z.string(),
    status: zod_1.z.string(),
    ssl: zod_1.z
        .object({
        status: zod_1.z.string(),
        validation_errors: zod_1.z
            .object({
            message: zod_1.z.string(),
        })
            .catchall(zod_1.z.unknown())
            .array()
            .optional(),
    })
        .catchall(zod_1.z.unknown()),
    verification_errors: zod_1.z.string().array().optional(),
})
    .catchall(zod_1.z.unknown());
var DomainStatus;
(function (DomainStatus) {
    DomainStatus["PendingVerification"] = "PendingVerification";
    DomainStatus["PendingSsl"] = "PendingSsl";
    DomainStatus["Active"] = "Active";
    DomainStatus["Error"] = "Error";
})(DomainStatus = exports.DomainStatus || (exports.DomainStatus = {}));
exports.domainStatusGuard = zod_1.z.nativeEnum(DomainStatus);
/* === Sentinel activities === */
/** The action target type of a sentinel activity. */
var SentinelActivityTargetType;
(function (SentinelActivityTargetType) {
    SentinelActivityTargetType["User"] = "User";
    SentinelActivityTargetType["App"] = "App";
})(SentinelActivityTargetType = exports.SentinelActivityTargetType || (exports.SentinelActivityTargetType = {}));
exports.sentinelActivityTargetTypeGuard = zod_1.z.nativeEnum(SentinelActivityTargetType);
/** The action type of a sentinel activity. */
var SentinelActivityAction;
(function (SentinelActivityAction) {
    /**
     * The subject tries to pass a verification by inputting a password.
     *
     * For example, a user (subject) who inputted a password (action) to authenticate themselves
     * (target).
     */
    SentinelActivityAction["Password"] = "Password";
    /**
     * The subject tries to pass a verification by inputting a verification code.
     *
     * For example, a user (subject) who inputted a verification code (action) to authenticate
     * themselves (target).
     */
    SentinelActivityAction["VerificationCode"] = "VerificationCode";
})(SentinelActivityAction = exports.SentinelActivityAction || (exports.SentinelActivityAction = {}));
exports.sentinelActivityActionGuard = zod_1.z.nativeEnum(SentinelActivityAction);
exports.sentinelActivityPayloadGuard = zod_1.z.record(zod_1.z.unknown());
