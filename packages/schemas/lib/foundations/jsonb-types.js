import { hexColorRegEx, passwordPolicyGuard, validateRedirectUrl, } from '@logto/core-kit';
import { languageTagGuard } from '@logto/language-kit';
import { z } from 'zod';
export { configurableConnectorMetadataGuard, } from '@logto/connector-kit';
/* === Commonly Used === */
// Copied from https://github.com/colinhacks/zod#json-type
const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
export const jsonGuard = z.lazy(() => z.union([literalSchema, z.array(jsonGuard), z.record(jsonGuard)]));
export const jsonObjectGuard = z.record(jsonGuard);
/* === OIDC Model Instances === */
export const oidcModelInstancePayloadGuard = z
    .object({
    userCode: z.string().optional(),
    uid: z.string().optional(),
    grantId: z.string().optional(),
})
    /**
     * Try to use `.passthrough()` if type has been fixed.
     * https://github.com/colinhacks/zod/issues/452
     */
    .catchall(z.unknown());
export const oidcClientMetadataGuard = z.object({
    redirectUris: z
        .string()
        .refine((url) => validateRedirectUrl(url, 'web'))
        .or(z.string().refine((url) => validateRedirectUrl(url, 'mobile')))
        .array(),
    postLogoutRedirectUris: z.string().url().array(),
    logoUri: z.string().optional(),
});
export var CustomClientMetadataKey;
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
})(CustomClientMetadataKey || (CustomClientMetadataKey = {}));
export const customClientMetadataGuard = z.object({
    [CustomClientMetadataKey.CorsAllowedOrigins]: z.string().min(1).array().optional(),
    [CustomClientMetadataKey.IdTokenTtl]: z.number().optional(),
    [CustomClientMetadataKey.RefreshTokenTtl]: z.number().optional(),
    [CustomClientMetadataKey.RefreshTokenTtlInDays]: z.number().int().min(1).max(90).optional(),
    [CustomClientMetadataKey.TenantId]: z.string().optional(),
    [CustomClientMetadataKey.AlwaysIssueRefreshToken]: z.boolean().optional(),
    [CustomClientMetadataKey.RotateRefreshToken]: z.boolean().optional(),
});
/* === SignIn Experiences === */
export const colorGuard = z.object({
    primaryColor: z.string().regex(hexColorRegEx),
    isDarkModeEnabled: z.boolean(),
    darkPrimaryColor: z.string().regex(hexColorRegEx),
});
export const brandingGuard = z.object({
    logoUrl: z.string().url().optional(),
    darkLogoUrl: z.string().url().optional(),
    favicon: z.string().url().optional(),
});
export const languageInfoGuard = z.object({
    autoDetect: z.boolean(),
    fallbackLanguage: languageTagGuard,
});
export var SignInIdentifier;
(function (SignInIdentifier) {
    SignInIdentifier["Username"] = "username";
    SignInIdentifier["Email"] = "email";
    SignInIdentifier["Phone"] = "phone";
})(SignInIdentifier || (SignInIdentifier = {}));
export const signUpGuard = z.object({
    identifiers: z.nativeEnum(SignInIdentifier).array(),
    password: z.boolean(),
    verify: z.boolean(),
});
export const signInGuard = z.object({
    methods: z
        .object({
        identifier: z.nativeEnum(SignInIdentifier),
        password: z.boolean(),
        verificationCode: z.boolean(),
        isPasswordPrimary: z.boolean(),
    })
        .array(),
});
export const connectorTargetsGuard = z.string().array();
export const customContentGuard = z.record(z.string());
export var MfaFactor;
(function (MfaFactor) {
    MfaFactor["TOTP"] = "Totp";
    MfaFactor["WebAuthn"] = "WebAuthn";
    MfaFactor["BackupCode"] = "BackupCode";
})(MfaFactor || (MfaFactor = {}));
export const mfaFactorsGuard = z.nativeEnum(MfaFactor).array();
export var MfaPolicy;
(function (MfaPolicy) {
    MfaPolicy["UserControlled"] = "UserControlled";
    MfaPolicy["Mandatory"] = "Mandatory";
})(MfaPolicy || (MfaPolicy = {}));
export const mfaGuard = z.object({
    factors: mfaFactorsGuard,
    policy: z.nativeEnum(MfaPolicy),
});
/* === Users === */
export const roleNamesGuard = z.string().array();
const identityGuard = z.object({
    userId: z.string(),
    details: z.object({}).optional(), // Connector's userinfo details, schemaless
});
export const identitiesGuard = z.record(identityGuard);
export const baseMfaVerification = {
    id: z.string(),
    createdAt: z.string(),
};
export const mfaVerificationTotp = z.object({
    type: z.literal(MfaFactor.TOTP),
    ...baseMfaVerification,
    key: z.string(),
});
export const mfaVerificationWebAuthn = z.object({
    type: z.literal(MfaFactor.WebAuthn),
    ...baseMfaVerification,
    credentialId: z.string(),
    publicKey: z.string(),
    counter: z.number(),
    agent: z.string(),
});
export const mfaVerificationBackupCode = z.object({
    type: z.literal(MfaFactor.BackupCode),
    ...baseMfaVerification,
    code: z.string(),
    usedAt: z.string().optional(),
});
export const mfaVerificationGuard = z.discriminatedUnion('type', [
    mfaVerificationTotp,
    mfaVerificationWebAuthn,
    mfaVerificationBackupCode,
]);
export const mfaVerificationsGuard = mfaVerificationGuard.array();
export const translationGuard = z.lazy(() => z.record(z.string().or(translationGuard)));
/* === Logs === */
export var LogResult;
(function (LogResult) {
    LogResult["Success"] = "Success";
    LogResult["Error"] = "Error";
})(LogResult || (LogResult = {}));
export const logContextPayloadGuard = z
    .object({
    key: z.string(),
    result: z.nativeEnum(LogResult),
    error: z.record(z.string(), z.unknown()).or(z.string()).optional(),
    ip: z.string().optional(),
    userAgent: z.string().optional(),
    userId: z.string().optional(),
    applicationId: z.string().optional(),
    sessionId: z.string().optional(),
})
    .catchall(z.unknown());
export const partialPasswordPolicyGuard = passwordPolicyGuard.deepPartial();
/* === Hooks === */
export var HookEvent;
(function (HookEvent) {
    HookEvent["PostRegister"] = "PostRegister";
    HookEvent["PostSignIn"] = "PostSignIn";
    HookEvent["PostResetPassword"] = "PostResetPassword";
})(HookEvent || (HookEvent = {}));
export const hookEventGuard = z.nativeEnum(HookEvent);
export const hookEventsGuard = hookEventGuard.array();
export const hookConfigGuard = z.object({
    /** We don't need `type` since v1 only has web hook */
    // type: 'web';
    /** Method fixed to `POST` */
    url: z.string(),
    /** Additional headers that attach to the request */
    headers: z.record(z.string()).optional(),
    /**
     * @deprecated
     * Retry times when hook response status >= 500.
     * Now the retry times is fixed to 3.
     * Keep for backward compatibility.
     */
    retries: z.number().gte(0).lte(3).optional(),
});
/* === Custom domains and Cloudflare === */
export const domainDnsRecordGuard = z.object({
    name: z.string(),
    type: z.string(),
    value: z.string(),
});
export const domainDnsRecordsGuard = domainDnsRecordGuard.array();
// https://developers.cloudflare.com/api/operations/custom-hostname-for-a-zone-list-custom-hostnames#Responses
// Predefine the "useful" fields
export const cloudflareDataGuard = z
    .object({
    id: z.string(),
    status: z.string(),
    ssl: z
        .object({
        status: z.string(),
        validation_errors: z
            .object({
            message: z.string(),
        })
            .catchall(z.unknown())
            .array()
            .optional(),
    })
        .catchall(z.unknown()),
    verification_errors: z.string().array().optional(),
})
    .catchall(z.unknown());
export var DomainStatus;
(function (DomainStatus) {
    DomainStatus["PendingVerification"] = "PendingVerification";
    DomainStatus["PendingSsl"] = "PendingSsl";
    DomainStatus["Active"] = "Active";
    DomainStatus["Error"] = "Error";
})(DomainStatus || (DomainStatus = {}));
export const domainStatusGuard = z.nativeEnum(DomainStatus);
/* === Sentinel activities === */
/** The action target type of a sentinel activity. */
export var SentinelActivityTargetType;
(function (SentinelActivityTargetType) {
    SentinelActivityTargetType["User"] = "User";
    SentinelActivityTargetType["App"] = "App";
})(SentinelActivityTargetType || (SentinelActivityTargetType = {}));
export const sentinelActivityTargetTypeGuard = z.nativeEnum(SentinelActivityTargetType);
/** The action type of a sentinel activity. */
export var SentinelActivityAction;
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
})(SentinelActivityAction || (SentinelActivityAction = {}));
export const sentinelActivityActionGuard = z.nativeEnum(SentinelActivityAction);
export const sentinelActivityPayloadGuard = z.record(z.unknown());
