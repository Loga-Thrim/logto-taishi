import { z } from 'zod';
export declare const delimiter: RegExp;
export declare const scopePostProcessor: (scope: string) => string;
export declare const idTokenProfileStandardClaimsGuard: z.ZodObject<{
    sub: z.ZodString;
    name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    email_verified: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    phone: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    phone_verified: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    picture: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    profile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    nonce: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name?: string | null | undefined;
    email?: string | null | undefined;
    email_verified?: boolean | null | undefined;
    phone?: string | null | undefined;
    phone_verified?: boolean | null | undefined;
    picture?: string | null | undefined;
    profile?: string | null | undefined;
    nonce?: string | null | undefined;
    sub: string;
}, {
    name?: string | null | undefined;
    email?: string | null | undefined;
    email_verified?: boolean | null | undefined;
    phone?: string | null | undefined;
    phone_verified?: boolean | null | undefined;
    picture?: string | null | undefined;
    profile?: string | null | undefined;
    nonce?: string | null | undefined;
    sub: string;
}>;
export declare const userProfileGuard: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, unknown>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    avatar?: string | undefined;
    id: string;
}, {
    id?: unknown;
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    avatar?: string | undefined;
}>;
export type UserProfile = z.infer<typeof userProfileGuard>;
/**
 * We remove `nonce` in `authRequestOptionalConfigGuard` because it should be a randomly generated string,
 * should not be fixed in config and will be generated in Logto core according to `response_type` of authorization request.
 */
export declare const authRequestOptionalConfigGuard: z.ZodObject<{
    responseMode: z.ZodOptional<z.ZodString>;
    display: z.ZodOptional<z.ZodString>;
    prompt: z.ZodOptional<z.ZodString>;
    maxAge: z.ZodOptional<z.ZodString>;
    uiLocales: z.ZodOptional<z.ZodString>;
    idTokenHint: z.ZodOptional<z.ZodString>;
    loginHint: z.ZodOptional<z.ZodString>;
    acrValues: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    responseMode?: string | undefined;
    display?: string | undefined;
    prompt?: string | undefined;
    maxAge?: string | undefined;
    uiLocales?: string | undefined;
    idTokenHint?: string | undefined;
    loginHint?: string | undefined;
    acrValues?: string | undefined;
}, {
    responseMode?: string | undefined;
    display?: string | undefined;
    prompt?: string | undefined;
    maxAge?: string | undefined;
    uiLocales?: string | undefined;
    idTokenHint?: string | undefined;
    loginHint?: string | undefined;
    acrValues?: string | undefined;
}>;
export declare const idTokenVerificationConfigGuard: z.ZodObject<z.extendShape<{
    jwksUri: z.ZodString;
}, {
    issuer: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    audience: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    algorithms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    clockTolerance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    crit: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
    currentDate: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
    maxTokenAge: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
    subject: z.ZodOptional<z.ZodString>;
    typ: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    issuer?: string | string[] | undefined;
    audience?: string | string[] | undefined;
    algorithms?: string[] | undefined;
    clockTolerance?: string | number | undefined;
    crit?: Record<string, boolean> | undefined;
    currentDate?: Date | undefined;
    maxTokenAge?: string | number | undefined;
    subject?: string | undefined;
    typ?: string | undefined;
    jwksUri: string;
}, {
    issuer?: string | string[] | undefined;
    audience?: string | string[] | undefined;
    algorithms?: string[] | undefined;
    clockTolerance?: string | number | undefined;
    crit?: Record<string, boolean> | undefined;
    currentDate?: Date | undefined;
    maxTokenAge?: string | number | undefined;
    subject?: string | undefined;
    typ?: string | undefined;
    jwksUri: string;
}>;
export type IdTokenVerificationConfig = z.infer<typeof idTokenVerificationConfigGuard>;
export declare const oidcConfigGuard: z.ZodObject<{
    clientId: z.ZodString;
    clientSecret: z.ZodString;
    authorizationEndpoint: z.ZodString;
    tokenEndpoint: z.ZodString;
    responseType: z.ZodDefault<z.ZodOptional<z.ZodLiteral<"code">>>;
    grantType: z.ZodDefault<z.ZodOptional<z.ZodLiteral<"authorization_code">>>;
    scope: z.ZodEffects<z.ZodString, string, string>;
    idTokenVerificationConfig: z.ZodObject<z.extendShape<{
        jwksUri: z.ZodString;
    }, {
        issuer: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        audience: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
        algorithms: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        clockTolerance: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        crit: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodBoolean>>;
        currentDate: z.ZodOptional<z.ZodDefault<z.ZodDate>>;
        maxTokenAge: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>;
        subject: z.ZodOptional<z.ZodString>;
        typ: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        issuer?: string | string[] | undefined;
        audience?: string | string[] | undefined;
        algorithms?: string[] | undefined;
        clockTolerance?: string | number | undefined;
        crit?: Record<string, boolean> | undefined;
        currentDate?: Date | undefined;
        maxTokenAge?: string | number | undefined;
        subject?: string | undefined;
        typ?: string | undefined;
        jwksUri: string;
    }, {
        issuer?: string | string[] | undefined;
        audience?: string | string[] | undefined;
        algorithms?: string[] | undefined;
        clockTolerance?: string | number | undefined;
        crit?: Record<string, boolean> | undefined;
        currentDate?: Date | undefined;
        maxTokenAge?: string | number | undefined;
        subject?: string | undefined;
        typ?: string | undefined;
        jwksUri: string;
    }>;
    authRequestOptionalConfig: z.ZodOptional<z.ZodObject<{
        responseMode: z.ZodOptional<z.ZodString>;
        display: z.ZodOptional<z.ZodString>;
        prompt: z.ZodOptional<z.ZodString>;
        maxAge: z.ZodOptional<z.ZodString>;
        uiLocales: z.ZodOptional<z.ZodString>;
        idTokenHint: z.ZodOptional<z.ZodString>;
        loginHint: z.ZodOptional<z.ZodString>;
        acrValues: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        responseMode?: string | undefined;
        display?: string | undefined;
        prompt?: string | undefined;
        maxAge?: string | undefined;
        uiLocales?: string | undefined;
        idTokenHint?: string | undefined;
        loginHint?: string | undefined;
        acrValues?: string | undefined;
    }, {
        responseMode?: string | undefined;
        display?: string | undefined;
        prompt?: string | undefined;
        maxAge?: string | undefined;
        uiLocales?: string | undefined;
        idTokenHint?: string | undefined;
        loginHint?: string | undefined;
        acrValues?: string | undefined;
    }>>;
    customConfig: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    authRequestOptionalConfig?: {
        responseMode?: string | undefined;
        display?: string | undefined;
        prompt?: string | undefined;
        maxAge?: string | undefined;
        uiLocales?: string | undefined;
        idTokenHint?: string | undefined;
        loginHint?: string | undefined;
        acrValues?: string | undefined;
    } | undefined;
    customConfig?: Record<string, string> | undefined;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    clientId: string;
    clientSecret: string;
    scope: string;
    idTokenVerificationConfig: {
        issuer?: string | string[] | undefined;
        audience?: string | string[] | undefined;
        algorithms?: string[] | undefined;
        clockTolerance?: string | number | undefined;
        crit?: Record<string, boolean> | undefined;
        currentDate?: Date | undefined;
        maxTokenAge?: string | number | undefined;
        subject?: string | undefined;
        typ?: string | undefined;
        jwksUri: string;
    };
    responseType: "code";
    grantType: "authorization_code";
}, {
    authRequestOptionalConfig?: {
        responseMode?: string | undefined;
        display?: string | undefined;
        prompt?: string | undefined;
        maxAge?: string | undefined;
        uiLocales?: string | undefined;
        idTokenHint?: string | undefined;
        loginHint?: string | undefined;
        acrValues?: string | undefined;
    } | undefined;
    customConfig?: Record<string, string> | undefined;
    responseType?: "code" | undefined;
    grantType?: "authorization_code" | undefined;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    clientId: string;
    clientSecret: string;
    scope: string;
    idTokenVerificationConfig: {
        issuer?: string | string[] | undefined;
        audience?: string | string[] | undefined;
        algorithms?: string[] | undefined;
        clockTolerance?: string | number | undefined;
        crit?: Record<string, boolean> | undefined;
        currentDate?: Date | undefined;
        maxTokenAge?: string | number | undefined;
        subject?: string | undefined;
        typ?: string | undefined;
        jwksUri: string;
    };
}>;
export type OidcConfig = z.infer<typeof oidcConfigGuard>;
export declare const authResponseGuard: z.ZodObject<{
    code: z.ZodString;
    state: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodString, {
    [x: string]: string;
    state?: string | undefined;
    code: string;
}, {
    [x: string]: string;
    state?: string | undefined;
    code: string;
}>;
export type AuthResponse = z.infer<typeof authResponseGuard>;
export declare const accessTokenResponseGuard: z.ZodObject<{
    id_token: z.ZodString;
    access_token: z.ZodOptional<z.ZodString>;
    token_type: z.ZodOptional<z.ZodString>;
    expires_in: z.ZodOptional<z.ZodNumber>;
    refresh_token: z.ZodOptional<z.ZodString>;
    scope: z.ZodOptional<z.ZodString>;
    code: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    scope?: string | undefined;
    code?: string | undefined;
    access_token?: string | undefined;
    token_type?: string | undefined;
    expires_in?: number | undefined;
    refresh_token?: string | undefined;
    id_token: string;
}, {
    scope?: string | undefined;
    code?: string | undefined;
    access_token?: string | undefined;
    token_type?: string | undefined;
    expires_in?: number | undefined;
    refresh_token?: string | undefined;
    id_token: string;
}>;
export type AccessTokenResponse = z.infer<typeof accessTokenResponseGuard>;
