import { type PasswordPolicy } from '@logto/core-kit';
import { type DeepPartial } from '@silverhand/essentials';
import type { Json } from '@withtyped/server';
import { z } from 'zod';
export { configurableConnectorMetadataGuard, type ConfigurableConnectorMetadata, } from '@logto/connector-kit';
export type { Json, JsonObject } from '@withtyped/server';
export declare const jsonGuard: z.ZodType<Json>;
export declare const jsonObjectGuard: z.ZodRecord<z.ZodString, z.ZodType<Json, z.ZodTypeDef, Json>>;
export declare const oidcModelInstancePayloadGuard: z.ZodObject<{
    userCode: z.ZodOptional<z.ZodString>;
    uid: z.ZodOptional<z.ZodString>;
    grantId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodUnknown, {
    [x: string]: unknown;
    userCode?: string | undefined;
    uid?: string | undefined;
    grantId?: string | undefined;
}, {
    [x: string]: unknown;
    userCode?: string | undefined;
    uid?: string | undefined;
    grantId?: string | undefined;
}>;
export type OidcModelInstancePayload = z.infer<typeof oidcModelInstancePayloadGuard>;
export declare const oidcClientMetadataGuard: z.ZodObject<{
    redirectUris: z.ZodArray<z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodEffects<z.ZodString, string, string>]>, "many">;
    postLogoutRedirectUris: z.ZodArray<z.ZodString, "many">;
    logoUri: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    logoUri?: string | undefined;
    redirectUris: string[];
    postLogoutRedirectUris: string[];
}, {
    logoUri?: string | undefined;
    redirectUris: string[];
    postLogoutRedirectUris: string[];
}>;
export type OidcClientMetadata = z.infer<typeof oidcClientMetadataGuard>;
export declare enum CustomClientMetadataKey {
    CorsAllowedOrigins = "corsAllowedOrigins",
    IdTokenTtl = "idTokenTtl",
    /** @deprecated Use {@link RefreshTokenTtlInDays} instead. */
    RefreshTokenTtl = "refreshTokenTtl",
    RefreshTokenTtlInDays = "refreshTokenTtlInDays",
    TenantId = "tenantId",
    /**
     * Enabling this configuration will allow Logto to always issue Refresh Tokens, regardless of whether `prompt=consent` is presented in the authentication request.
     *
     * It only works for web applications when the client allowed grant types includes `refresh_token`.
     *
     * This config is for the third-party integrations that do not strictly follow OpenID Connect standards due to some reasons (e.g. they only know OAuth, but requires a Refresh Token to be returned anyway).
     */
    AlwaysIssueRefreshToken = "alwaysIssueRefreshToken",
    /**
     * When enabled (default), Logto will issue a new Refresh Token for token requests when 70% of the original Time to Live (TTL) has passed.
     *
     * It can be turned off for only traditional web apps for enhanced security.
     */
    RotateRefreshToken = "rotateRefreshToken"
}
export declare const customClientMetadataGuard: z.ZodObject<{
    corsAllowedOrigins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    idTokenTtl: z.ZodOptional<z.ZodNumber>;
    refreshTokenTtl: z.ZodOptional<z.ZodNumber>;
    refreshTokenTtlInDays: z.ZodOptional<z.ZodNumber>;
    tenantId: z.ZodOptional<z.ZodString>;
    alwaysIssueRefreshToken: z.ZodOptional<z.ZodBoolean>;
    rotateRefreshToken: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    corsAllowedOrigins?: string[] | undefined;
    idTokenTtl?: number | undefined;
    refreshTokenTtl?: number | undefined;
    refreshTokenTtlInDays?: number | undefined;
    tenantId?: string | undefined;
    alwaysIssueRefreshToken?: boolean | undefined;
    rotateRefreshToken?: boolean | undefined;
}, {
    corsAllowedOrigins?: string[] | undefined;
    idTokenTtl?: number | undefined;
    refreshTokenTtl?: number | undefined;
    refreshTokenTtlInDays?: number | undefined;
    tenantId?: string | undefined;
    alwaysIssueRefreshToken?: boolean | undefined;
    rotateRefreshToken?: boolean | undefined;
}>;
/**
 * @see {@link CustomClientMetadataKey} for key descriptions.
 */
export type CustomClientMetadata = z.infer<typeof customClientMetadataGuard>;
export declare const colorGuard: z.ZodObject<{
    primaryColor: z.ZodString;
    isDarkModeEnabled: z.ZodBoolean;
    darkPrimaryColor: z.ZodString;
}, "strip", z.ZodTypeAny, {
    primaryColor: string;
    isDarkModeEnabled: boolean;
    darkPrimaryColor: string;
}, {
    primaryColor: string;
    isDarkModeEnabled: boolean;
    darkPrimaryColor: string;
}>;
export type Color = z.infer<typeof colorGuard>;
export declare const brandingGuard: z.ZodObject<{
    logoUrl: z.ZodOptional<z.ZodString>;
    darkLogoUrl: z.ZodOptional<z.ZodString>;
    favicon: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    logoUrl?: string | undefined;
    darkLogoUrl?: string | undefined;
    favicon?: string | undefined;
}, {
    logoUrl?: string | undefined;
    darkLogoUrl?: string | undefined;
    favicon?: string | undefined;
}>;
export type Branding = z.infer<typeof brandingGuard>;
export declare const languageInfoGuard: z.ZodObject<{
    autoDetect: z.ZodBoolean;
    fallbackLanguage: z.ZodType<"af-ZA" | "am-ET" | "ar-AR" | "as-IN" | "az-AZ" | "be-BY" | "bg-BG" | "bn-IN" | "br-FR" | "bs-BA" | "ca-ES" | "cb-IQ" | "co-FR" | "cs-CZ" | "cx-PH" | "cy-GB" | "da-DK" | "de" | "de-DE" | "el-GR" | "en" | "en-GB" | "en-US" | "eo-EO" | "es" | "es-ES" | "es-419" | "et-EE" | "eu-ES" | "fa-IR" | "ff-NG" | "fi-FI" | "fo-FO" | "fr" | "fr-CA" | "fr-FR" | "fy-NL" | "ga-IE" | "gl-ES" | "gn-PY" | "gu-IN" | "ha-NG" | "he-IL" | "hi-IN" | "hr-HR" | "ht-HT" | "hu-HU" | "hy-AM" | "id-ID" | "ik-US" | "is-IS" | "it" | "it-IT" | "iu-CA" | "ja" | "ja-JP" | "ja-KS" | "jv-ID" | "ka-GE" | "kk-KZ" | "km-KH" | "kn-IN" | "ko" | "ko-KR" | "ku-TR" | "ky-KG" | "lo-LA" | "lt-LT" | "lv-LV" | "mg-MG" | "mk-MK" | "ml-IN" | "mn-MN" | "mr-IN" | "ms-MY" | "mt-MT" | "my-MM" | "nb-NO" | "ne-NP" | "nl-BE" | "nl-NL" | "nn-NO" | "or-IN" | "pa-IN" | "pl-PL" | "ps-AF" | "pt" | "pt-BR" | "pt-PT" | "ro-RO" | "ru" | "ru-RU" | "rw-RW" | "sc-IT" | "si-LK" | "sk-SK" | "sl-SI" | "sn-ZW" | "sq-AL" | "sr-RS" | "sv-SE" | "sw-KE" | "sy-SY" | "sz-PL" | "ta-IN" | "te-IN" | "tg-TJ" | "th-TH" | "tl-PH" | "tr" | "tr-TR" | "tt-RU" | "tz-MA" | "uk-UA" | "ur-PK" | "uz-UZ" | "vi-VN" | "zh" | "zh-CN" | "zh-HK" | "zh-MO" | "zh-TW" | "zz-TR", z.ZodTypeDef, "af-ZA" | "am-ET" | "ar-AR" | "as-IN" | "az-AZ" | "be-BY" | "bg-BG" | "bn-IN" | "br-FR" | "bs-BA" | "ca-ES" | "cb-IQ" | "co-FR" | "cs-CZ" | "cx-PH" | "cy-GB" | "da-DK" | "de" | "de-DE" | "el-GR" | "en" | "en-GB" | "en-US" | "eo-EO" | "es" | "es-ES" | "es-419" | "et-EE" | "eu-ES" | "fa-IR" | "ff-NG" | "fi-FI" | "fo-FO" | "fr" | "fr-CA" | "fr-FR" | "fy-NL" | "ga-IE" | "gl-ES" | "gn-PY" | "gu-IN" | "ha-NG" | "he-IL" | "hi-IN" | "hr-HR" | "ht-HT" | "hu-HU" | "hy-AM" | "id-ID" | "ik-US" | "is-IS" | "it" | "it-IT" | "iu-CA" | "ja" | "ja-JP" | "ja-KS" | "jv-ID" | "ka-GE" | "kk-KZ" | "km-KH" | "kn-IN" | "ko" | "ko-KR" | "ku-TR" | "ky-KG" | "lo-LA" | "lt-LT" | "lv-LV" | "mg-MG" | "mk-MK" | "ml-IN" | "mn-MN" | "mr-IN" | "ms-MY" | "mt-MT" | "my-MM" | "nb-NO" | "ne-NP" | "nl-BE" | "nl-NL" | "nn-NO" | "or-IN" | "pa-IN" | "pl-PL" | "ps-AF" | "pt" | "pt-BR" | "pt-PT" | "ro-RO" | "ru" | "ru-RU" | "rw-RW" | "sc-IT" | "si-LK" | "sk-SK" | "sl-SI" | "sn-ZW" | "sq-AL" | "sr-RS" | "sv-SE" | "sw-KE" | "sy-SY" | "sz-PL" | "ta-IN" | "te-IN" | "tg-TJ" | "th-TH" | "tl-PH" | "tr" | "tr-TR" | "tt-RU" | "tz-MA" | "uk-UA" | "ur-PK" | "uz-UZ" | "vi-VN" | "zh" | "zh-CN" | "zh-HK" | "zh-MO" | "zh-TW" | "zz-TR">;
}, "strip", z.ZodTypeAny, {
    autoDetect: boolean;
    fallbackLanguage: "af-ZA" | "am-ET" | "ar-AR" | "as-IN" | "az-AZ" | "be-BY" | "bg-BG" | "bn-IN" | "br-FR" | "bs-BA" | "ca-ES" | "cb-IQ" | "co-FR" | "cs-CZ" | "cx-PH" | "cy-GB" | "da-DK" | "de" | "de-DE" | "el-GR" | "en" | "en-GB" | "en-US" | "eo-EO" | "es" | "es-ES" | "es-419" | "et-EE" | "eu-ES" | "fa-IR" | "ff-NG" | "fi-FI" | "fo-FO" | "fr" | "fr-CA" | "fr-FR" | "fy-NL" | "ga-IE" | "gl-ES" | "gn-PY" | "gu-IN" | "ha-NG" | "he-IL" | "hi-IN" | "hr-HR" | "ht-HT" | "hu-HU" | "hy-AM" | "id-ID" | "ik-US" | "is-IS" | "it" | "it-IT" | "iu-CA" | "ja" | "ja-JP" | "ja-KS" | "jv-ID" | "ka-GE" | "kk-KZ" | "km-KH" | "kn-IN" | "ko" | "ko-KR" | "ku-TR" | "ky-KG" | "lo-LA" | "lt-LT" | "lv-LV" | "mg-MG" | "mk-MK" | "ml-IN" | "mn-MN" | "mr-IN" | "ms-MY" | "mt-MT" | "my-MM" | "nb-NO" | "ne-NP" | "nl-BE" | "nl-NL" | "nn-NO" | "or-IN" | "pa-IN" | "pl-PL" | "ps-AF" | "pt" | "pt-BR" | "pt-PT" | "ro-RO" | "ru" | "ru-RU" | "rw-RW" | "sc-IT" | "si-LK" | "sk-SK" | "sl-SI" | "sn-ZW" | "sq-AL" | "sr-RS" | "sv-SE" | "sw-KE" | "sy-SY" | "sz-PL" | "ta-IN" | "te-IN" | "tg-TJ" | "th-TH" | "tl-PH" | "tr" | "tr-TR" | "tt-RU" | "tz-MA" | "uk-UA" | "ur-PK" | "uz-UZ" | "vi-VN" | "zh" | "zh-CN" | "zh-HK" | "zh-MO" | "zh-TW" | "zz-TR";
}, {
    autoDetect: boolean;
    fallbackLanguage: "af-ZA" | "am-ET" | "ar-AR" | "as-IN" | "az-AZ" | "be-BY" | "bg-BG" | "bn-IN" | "br-FR" | "bs-BA" | "ca-ES" | "cb-IQ" | "co-FR" | "cs-CZ" | "cx-PH" | "cy-GB" | "da-DK" | "de" | "de-DE" | "el-GR" | "en" | "en-GB" | "en-US" | "eo-EO" | "es" | "es-ES" | "es-419" | "et-EE" | "eu-ES" | "fa-IR" | "ff-NG" | "fi-FI" | "fo-FO" | "fr" | "fr-CA" | "fr-FR" | "fy-NL" | "ga-IE" | "gl-ES" | "gn-PY" | "gu-IN" | "ha-NG" | "he-IL" | "hi-IN" | "hr-HR" | "ht-HT" | "hu-HU" | "hy-AM" | "id-ID" | "ik-US" | "is-IS" | "it" | "it-IT" | "iu-CA" | "ja" | "ja-JP" | "ja-KS" | "jv-ID" | "ka-GE" | "kk-KZ" | "km-KH" | "kn-IN" | "ko" | "ko-KR" | "ku-TR" | "ky-KG" | "lo-LA" | "lt-LT" | "lv-LV" | "mg-MG" | "mk-MK" | "ml-IN" | "mn-MN" | "mr-IN" | "ms-MY" | "mt-MT" | "my-MM" | "nb-NO" | "ne-NP" | "nl-BE" | "nl-NL" | "nn-NO" | "or-IN" | "pa-IN" | "pl-PL" | "ps-AF" | "pt" | "pt-BR" | "pt-PT" | "ro-RO" | "ru" | "ru-RU" | "rw-RW" | "sc-IT" | "si-LK" | "sk-SK" | "sl-SI" | "sn-ZW" | "sq-AL" | "sr-RS" | "sv-SE" | "sw-KE" | "sy-SY" | "sz-PL" | "ta-IN" | "te-IN" | "tg-TJ" | "th-TH" | "tl-PH" | "tr" | "tr-TR" | "tt-RU" | "tz-MA" | "uk-UA" | "ur-PK" | "uz-UZ" | "vi-VN" | "zh" | "zh-CN" | "zh-HK" | "zh-MO" | "zh-TW" | "zz-TR";
}>;
export type LanguageInfo = z.infer<typeof languageInfoGuard>;
export declare enum SignInIdentifier {
    Username = "username",
    Email = "email",
    Phone = "phone"
}
export declare const signUpGuard: z.ZodObject<{
    identifiers: z.ZodArray<z.ZodNativeEnum<typeof SignInIdentifier>, "many">;
    password: z.ZodBoolean;
    verify: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    identifiers: SignInIdentifier[];
    password: boolean;
    verify: boolean;
}, {
    identifiers: SignInIdentifier[];
    password: boolean;
    verify: boolean;
}>;
export type SignUp = z.infer<typeof signUpGuard>;
export declare const signInGuard: z.ZodObject<{
    methods: z.ZodArray<z.ZodObject<{
        identifier: z.ZodNativeEnum<typeof SignInIdentifier>;
        password: z.ZodBoolean;
        verificationCode: z.ZodBoolean;
        isPasswordPrimary: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        password: boolean;
        identifier: SignInIdentifier;
        verificationCode: boolean;
        isPasswordPrimary: boolean;
    }, {
        password: boolean;
        identifier: SignInIdentifier;
        verificationCode: boolean;
        isPasswordPrimary: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    methods: {
        password: boolean;
        identifier: SignInIdentifier;
        verificationCode: boolean;
        isPasswordPrimary: boolean;
    }[];
}, {
    methods: {
        password: boolean;
        identifier: SignInIdentifier;
        verificationCode: boolean;
        isPasswordPrimary: boolean;
    }[];
}>;
export type SignIn = z.infer<typeof signInGuard>;
export declare const connectorTargetsGuard: z.ZodArray<z.ZodString, "many">;
export type ConnectorTargets = z.infer<typeof connectorTargetsGuard>;
export declare const customContentGuard: z.ZodRecord<z.ZodString, z.ZodString>;
export type CustomContent = z.infer<typeof customContentGuard>;
export declare enum MfaFactor {
    TOTP = "Totp",
    WebAuthn = "WebAuthn",
    BackupCode = "BackupCode"
}
export declare const mfaFactorsGuard: z.ZodArray<z.ZodNativeEnum<typeof MfaFactor>, "many">;
export type MfaFactors = z.infer<typeof mfaFactorsGuard>;
export declare enum MfaPolicy {
    UserControlled = "UserControlled",
    Mandatory = "Mandatory"
}
export declare const mfaGuard: z.ZodObject<{
    factors: z.ZodArray<z.ZodNativeEnum<typeof MfaFactor>, "many">;
    policy: z.ZodNativeEnum<typeof MfaPolicy>;
}, "strip", z.ZodTypeAny, {
    factors: MfaFactor[];
    policy: MfaPolicy;
}, {
    factors: MfaFactor[];
    policy: MfaPolicy;
}>;
export type Mfa = z.infer<typeof mfaGuard>;
export declare const roleNamesGuard: z.ZodArray<z.ZodString, "many">;
declare const identityGuard: z.ZodObject<{
    userId: z.ZodString;
    details: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    details?: {} | undefined;
    userId: string;
}, {
    details?: {} | undefined;
    userId: string;
}>;
export declare const identitiesGuard: z.ZodRecord<z.ZodString, z.ZodObject<{
    userId: z.ZodString;
    details: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    details?: {} | undefined;
    userId: string;
}, {
    details?: {} | undefined;
    userId: string;
}>>;
export type Identity = z.infer<typeof identityGuard>;
export type Identities = z.infer<typeof identitiesGuard>;
export declare const baseMfaVerification: {
    id: z.ZodString;
    createdAt: z.ZodString;
};
export declare const mfaVerificationTotp: z.ZodObject<{
    key: z.ZodString;
    id: z.ZodString;
    createdAt: z.ZodString;
    type: z.ZodLiteral<MfaFactor.TOTP>;
}, "strip", z.ZodTypeAny, {
    type: MfaFactor.TOTP;
    key: string;
    id: string;
    createdAt: string;
}, {
    type: MfaFactor.TOTP;
    key: string;
    id: string;
    createdAt: string;
}>;
export type MfaVerificationTotp = z.infer<typeof mfaVerificationTotp>;
export declare const mfaVerificationWebAuthn: z.ZodObject<{
    credentialId: z.ZodString;
    publicKey: z.ZodString;
    counter: z.ZodNumber;
    agent: z.ZodString;
    id: z.ZodString;
    createdAt: z.ZodString;
    type: z.ZodLiteral<MfaFactor.WebAuthn>;
}, "strip", z.ZodTypeAny, {
    type: MfaFactor.WebAuthn;
    id: string;
    createdAt: string;
    credentialId: string;
    publicKey: string;
    counter: number;
    agent: string;
}, {
    type: MfaFactor.WebAuthn;
    id: string;
    createdAt: string;
    credentialId: string;
    publicKey: string;
    counter: number;
    agent: string;
}>;
export type MfaVerificationWebAuthn = z.infer<typeof mfaVerificationWebAuthn>;
export declare const mfaVerificationBackupCode: z.ZodObject<{
    code: z.ZodString;
    usedAt: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    createdAt: z.ZodString;
    type: z.ZodLiteral<MfaFactor.BackupCode>;
}, "strip", z.ZodTypeAny, {
    usedAt?: string | undefined;
    code: string;
    type: MfaFactor.BackupCode;
    id: string;
    createdAt: string;
}, {
    usedAt?: string | undefined;
    code: string;
    type: MfaFactor.BackupCode;
    id: string;
    createdAt: string;
}>;
export type MfaVerificationBackupCode = z.infer<typeof mfaVerificationBackupCode>;
export declare const mfaVerificationGuard: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    key: z.ZodString;
    id: z.ZodString;
    createdAt: z.ZodString;
    type: z.ZodLiteral<MfaFactor.TOTP>;
}, "strip", z.ZodTypeAny, {
    type: MfaFactor.TOTP;
    key: string;
    id: string;
    createdAt: string;
}, {
    type: MfaFactor.TOTP;
    key: string;
    id: string;
    createdAt: string;
}>, z.ZodObject<{
    credentialId: z.ZodString;
    publicKey: z.ZodString;
    counter: z.ZodNumber;
    agent: z.ZodString;
    id: z.ZodString;
    createdAt: z.ZodString;
    type: z.ZodLiteral<MfaFactor.WebAuthn>;
}, "strip", z.ZodTypeAny, {
    type: MfaFactor.WebAuthn;
    id: string;
    createdAt: string;
    credentialId: string;
    publicKey: string;
    counter: number;
    agent: string;
}, {
    type: MfaFactor.WebAuthn;
    id: string;
    createdAt: string;
    credentialId: string;
    publicKey: string;
    counter: number;
    agent: string;
}>, z.ZodObject<{
    code: z.ZodString;
    usedAt: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    createdAt: z.ZodString;
    type: z.ZodLiteral<MfaFactor.BackupCode>;
}, "strip", z.ZodTypeAny, {
    usedAt?: string | undefined;
    code: string;
    type: MfaFactor.BackupCode;
    id: string;
    createdAt: string;
}, {
    usedAt?: string | undefined;
    code: string;
    type: MfaFactor.BackupCode;
    id: string;
    createdAt: string;
}>]>;
export type MfaVerification = z.infer<typeof mfaVerificationGuard>;
export declare const mfaVerificationsGuard: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    key: z.ZodString;
    id: z.ZodString;
    createdAt: z.ZodString;
    type: z.ZodLiteral<MfaFactor.TOTP>;
}, "strip", z.ZodTypeAny, {
    type: MfaFactor.TOTP;
    key: string;
    id: string;
    createdAt: string;
}, {
    type: MfaFactor.TOTP;
    key: string;
    id: string;
    createdAt: string;
}>, z.ZodObject<{
    credentialId: z.ZodString;
    publicKey: z.ZodString;
    counter: z.ZodNumber;
    agent: z.ZodString;
    id: z.ZodString;
    createdAt: z.ZodString;
    type: z.ZodLiteral<MfaFactor.WebAuthn>;
}, "strip", z.ZodTypeAny, {
    type: MfaFactor.WebAuthn;
    id: string;
    createdAt: string;
    credentialId: string;
    publicKey: string;
    counter: number;
    agent: string;
}, {
    type: MfaFactor.WebAuthn;
    id: string;
    createdAt: string;
    credentialId: string;
    publicKey: string;
    counter: number;
    agent: string;
}>, z.ZodObject<{
    code: z.ZodString;
    usedAt: z.ZodOptional<z.ZodString>;
    id: z.ZodString;
    createdAt: z.ZodString;
    type: z.ZodLiteral<MfaFactor.BackupCode>;
}, "strip", z.ZodTypeAny, {
    usedAt?: string | undefined;
    code: string;
    type: MfaFactor.BackupCode;
    id: string;
    createdAt: string;
}, {
    usedAt?: string | undefined;
    code: string;
    type: MfaFactor.BackupCode;
    id: string;
    createdAt: string;
}>]>, "many">;
export type MfaVerifications = z.infer<typeof mfaVerificationsGuard>;
export type Translation = {
    [key: string]: string | Translation;
};
export declare const translationGuard: z.ZodType<Translation>;
export declare enum LogResult {
    Success = "Success",
    Error = "Error"
}
export declare const logContextPayloadGuard: z.ZodObject<{
    key: z.ZodString;
    result: z.ZodNativeEnum<typeof LogResult>;
    error: z.ZodOptional<z.ZodUnion<[z.ZodRecord<z.ZodString, z.ZodUnknown>, z.ZodString]>>;
    ip: z.ZodOptional<z.ZodString>;
    userAgent: z.ZodOptional<z.ZodString>;
    userId: z.ZodOptional<z.ZodString>;
    applicationId: z.ZodOptional<z.ZodString>;
    sessionId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodUnknown, {
    [x: string]: unknown;
    error?: string | Record<string, unknown> | undefined;
    userId?: string | undefined;
    ip?: string | undefined;
    userAgent?: string | undefined;
    applicationId?: string | undefined;
    sessionId?: string | undefined;
    key: string;
    result: LogResult;
}, {
    [x: string]: unknown;
    error?: string | Record<string, unknown> | undefined;
    userId?: string | undefined;
    ip?: string | undefined;
    userAgent?: string | undefined;
    applicationId?: string | undefined;
    sessionId?: string | undefined;
    key: string;
    result: LogResult;
}>;
export type PartialPasswordPolicy = DeepPartial<PasswordPolicy>;
export declare const partialPasswordPolicyGuard: z.ZodObject<{
    length: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        min: z.ZodDefault<z.ZodNumber>;
        max: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        min: number;
        max: number;
    }, {
        min?: number | undefined;
        max?: number | undefined;
    }>>>;
    characterTypes: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        min: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        min: number;
    }, {
        min?: number | undefined;
    }>>>;
    rejects: z.ZodOptional<z.ZodDefault<z.ZodObject<{
        pwned: z.ZodDefault<z.ZodBoolean>;
        repetitionAndSequence: z.ZodDefault<z.ZodBoolean>;
        userInfo: z.ZodDefault<z.ZodBoolean>;
        words: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        pwned: boolean;
        repetitionAndSequence: boolean;
        userInfo: boolean;
        words: string[];
    }, {
        pwned?: boolean | undefined;
        repetitionAndSequence?: boolean | undefined;
        userInfo?: boolean | undefined;
        words?: string[] | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    length?: {
        min: number;
        max: number;
    } | undefined;
    characterTypes?: {
        min: number;
    } | undefined;
    rejects?: {
        pwned: boolean;
        repetitionAndSequence: boolean;
        userInfo: boolean;
        words: string[];
    } | undefined;
}, {
    length?: {
        min?: number | undefined;
        max?: number | undefined;
    } | undefined;
    characterTypes?: {
        min?: number | undefined;
    } | undefined;
    rejects?: {
        pwned?: boolean | undefined;
        repetitionAndSequence?: boolean | undefined;
        userInfo?: boolean | undefined;
        words?: string[] | undefined;
    } | undefined;
}>;
/**
 * The basic log context type. It's more about a type hint instead of forcing the log shape.
 *
 * Note when setting up a log function, the type of log key in function arguments should be `LogKey`.
 * Here we use `string` to make it compatible with the Zod guard.
 **/
export type LogContextPayload = z.infer<typeof logContextPayloadGuard>;
export declare enum HookEvent {
    PostRegister = "PostRegister",
    PostSignIn = "PostSignIn",
    PostResetPassword = "PostResetPassword"
}
export declare const hookEventGuard: z.ZodType<HookEvent>;
export declare const hookEventsGuard: z.ZodArray<z.ZodType<HookEvent, z.ZodTypeDef, HookEvent>, "many">;
export type HookEvents = z.infer<typeof hookEventsGuard>;
export declare const hookConfigGuard: z.ZodObject<{
    /** We don't need `type` since v1 only has web hook */
    /** Method fixed to `POST` */
    url: z.ZodString;
    /** Additional headers that attach to the request */
    headers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    /**
     * @deprecated
     * Retry times when hook response status >= 500.
     * Now the retry times is fixed to 3.
     * Keep for backward compatibility.
     */
    retries: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    headers?: Record<string, string> | undefined;
    retries?: number | undefined;
    url: string;
}, {
    headers?: Record<string, string> | undefined;
    retries?: number | undefined;
    url: string;
}>;
export type HookConfig = z.infer<typeof hookConfigGuard>;
export declare const domainDnsRecordGuard: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    value: string;
    name: string;
}, {
    type: string;
    value: string;
    name: string;
}>;
export type DomainDnsRecord = z.infer<typeof domainDnsRecordGuard>;
export declare const domainDnsRecordsGuard: z.ZodArray<z.ZodObject<{
    name: z.ZodString;
    type: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    value: string;
    name: string;
}, {
    type: string;
    value: string;
    name: string;
}>, "many">;
export type DomainDnsRecords = z.infer<typeof domainDnsRecordsGuard>;
export declare const cloudflareDataGuard: z.ZodObject<{
    id: z.ZodString;
    status: z.ZodString;
    ssl: z.ZodObject<{
        status: z.ZodString;
        validation_errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            message: z.ZodString;
        }, "strip", z.ZodUnknown, {
            [x: string]: unknown;
            message: string;
        }, {
            [x: string]: unknown;
            message: string;
        }>, "many">>;
    }, "strip", z.ZodUnknown, {
        [x: string]: unknown;
        validation_errors?: {
            [x: string]: unknown;
            message: string;
        }[] | undefined;
        status: string;
    }, {
        [x: string]: unknown;
        validation_errors?: {
            [x: string]: unknown;
            message: string;
        }[] | undefined;
        status: string;
    }>;
    verification_errors: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodUnknown, {
    [x: string]: unknown;
    verification_errors?: string[] | undefined;
    status: string;
    id: string;
    ssl: {
        [x: string]: unknown;
        validation_errors?: {
            [x: string]: unknown;
            message: string;
        }[] | undefined;
        status: string;
    };
}, {
    [x: string]: unknown;
    verification_errors?: string[] | undefined;
    status: string;
    id: string;
    ssl: {
        [x: string]: unknown;
        validation_errors?: {
            [x: string]: unknown;
            message: string;
        }[] | undefined;
        status: string;
    };
}>;
export type CloudflareData = z.infer<typeof cloudflareDataGuard>;
export declare enum DomainStatus {
    PendingVerification = "PendingVerification",
    PendingSsl = "PendingSsl",
    Active = "Active",
    Error = "Error"
}
export declare const domainStatusGuard: z.ZodNativeEnum<typeof DomainStatus>;
/** The action target type of a sentinel activity. */
export declare enum SentinelActivityTargetType {
    User = "User",
    App = "App"
}
export declare const sentinelActivityTargetTypeGuard: z.ZodNativeEnum<typeof SentinelActivityTargetType>;
/** The action type of a sentinel activity. */
export declare enum SentinelActivityAction {
    /**
     * The subject tries to pass a verification by inputting a password.
     *
     * For example, a user (subject) who inputted a password (action) to authenticate themselves
     * (target).
     */
    Password = "Password",
    /**
     * The subject tries to pass a verification by inputting a verification code.
     *
     * For example, a user (subject) who inputted a verification code (action) to authenticate
     * themselves (target).
     */
    VerificationCode = "VerificationCode"
}
export declare const sentinelActivityActionGuard: z.ZodNativeEnum<typeof SentinelActivityAction>;
export type SentinelActivityPayload = Record<string, unknown>;
export declare const sentinelActivityPayloadGuard: z.ZodRecord<z.ZodString, z.ZodUnknown>;
