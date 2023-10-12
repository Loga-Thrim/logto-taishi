import { z } from 'zod';
export declare const profileMapGuard: z.ZodDefault<z.ZodOptional<z.ZodObject<{
    id: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    email: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    phone: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    name: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    avatar: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    email: string;
    phone: string;
    avatar: string;
}, {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    avatar?: string | undefined;
}>>>;
export type ProfileMap = z.infer<typeof profileMapGuard>;
export declare const userProfileGuard: z.ZodObject<{
    id: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
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
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    avatar?: string | undefined;
    id: string | number;
}>;
export type UserProfile = z.infer<typeof userProfileGuard>;
declare const tokenEndpointResponseTypeGuard: z.ZodDefault<z.ZodOptional<z.ZodEnum<["query-string", "json"]>>>;
export type TokenEndpointResponseType = z.input<typeof tokenEndpointResponseTypeGuard>;
export declare const oauthConfigGuard: z.ZodObject<{
    responseType: z.ZodDefault<z.ZodOptional<z.ZodLiteral<"code">>>;
    grantType: z.ZodDefault<z.ZodOptional<z.ZodLiteral<"authorization_code">>>;
    tokenEndpointResponseType: z.ZodDefault<z.ZodOptional<z.ZodEnum<["query-string", "json"]>>>;
    authorizationEndpoint: z.ZodString;
    tokenEndpoint: z.ZodString;
    userInfoEndpoint: z.ZodString;
    clientId: z.ZodString;
    clientSecret: z.ZodString;
    scope: z.ZodOptional<z.ZodString>;
    profileMap: z.ZodDefault<z.ZodOptional<z.ZodObject<{
        id: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        email: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        phone: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        name: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        avatar: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        email: string;
        phone: string;
        avatar: string;
    }, {
        id?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        avatar?: string | undefined;
    }>>>;
    customConfig: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    scope?: string | undefined;
    customConfig?: Record<string, string> | undefined;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userInfoEndpoint: string;
    clientId: string;
    clientSecret: string;
    tokenEndpointResponseType: "query-string" | "json";
    profileMap: {
        id: string;
        name: string;
        email: string;
        phone: string;
        avatar: string;
    };
    responseType: "code";
    grantType: "authorization_code";
}, {
    tokenEndpointResponseType?: "query-string" | "json" | undefined;
    scope?: string | undefined;
    profileMap?: {
        id?: string | undefined;
        name?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        avatar?: string | undefined;
    } | undefined;
    customConfig?: Record<string, string> | undefined;
    responseType?: "code" | undefined;
    grantType?: "authorization_code" | undefined;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userInfoEndpoint: string;
    clientId: string;
    clientSecret: string;
}>;
export type OauthConfig = z.infer<typeof oauthConfigGuard>;
export declare const authResponseGuard: z.ZodObject<{
    code: z.ZodString;
    state: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    state?: string | undefined;
    code: string;
}, {
    state?: string | undefined;
    code: string;
}>;
export type AuthResponse = z.infer<typeof authResponseGuard>;
export declare const accessTokenResponseGuard: z.ZodObject<{
    access_token: z.ZodString;
    token_type: z.ZodString;
    expires_in: z.ZodOptional<z.ZodNumber>;
    refresh_token: z.ZodOptional<z.ZodString>;
    scope: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    scope?: string | undefined;
    expires_in?: number | undefined;
    refresh_token?: string | undefined;
    access_token: string;
    token_type: string;
}, {
    scope?: string | undefined;
    expires_in?: number | undefined;
    refresh_token?: string | undefined;
    access_token: string;
    token_type: string;
}>;
export type AccessTokenResponse = z.infer<typeof accessTokenResponseGuard>;
export {};
