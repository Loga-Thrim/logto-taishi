import { z } from 'zod';
export declare const discordConfigGuard: z.ZodObject<{
    clientId: z.ZodString;
    clientSecret: z.ZodString;
    scope: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    scope?: string | undefined;
    clientId: string;
    clientSecret: string;
}, {
    scope?: string | undefined;
    clientId: string;
    clientSecret: string;
}>;
export type DiscordConfig = z.infer<typeof discordConfigGuard>;
export declare const accessTokenResponseGuard: z.ZodObject<{
    access_token: z.ZodString;
    token_type: z.ZodString;
    expires_in: z.ZodNumber;
    scope: z.ZodString;
}, "strip", z.ZodTypeAny, {
    scope: string;
    access_token: string;
    token_type: string;
    expires_in: number;
}, {
    scope: string;
    access_token: string;
    token_type: string;
    expires_in: number;
}>;
export type AccessTokenResponse = z.infer<typeof accessTokenResponseGuard>;
export declare const userInfoResponseGuard: z.ZodObject<{
    id: z.ZodString;
    username: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | undefined, string | null | undefined>;
    avatar: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | undefined, string | null | undefined>;
    email: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | undefined, string | null | undefined>;
    verified: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodBoolean>>, boolean | undefined, boolean | null | undefined>;
}, "strip", z.ZodTypeAny, {
    username?: string | undefined;
    avatar?: string | undefined;
    email?: string | undefined;
    verified?: boolean | undefined;
    id: string;
}, {
    username?: string | null | undefined;
    avatar?: string | null | undefined;
    email?: string | null | undefined;
    verified?: boolean | null | undefined;
    id: string;
}>;
export type UserInfoResponse = z.infer<typeof userInfoResponseGuard>;
export declare const authorizationCallbackErrorGuard: z.ZodObject<{
    error: z.ZodString;
    error_description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    error: string;
    error_description: string;
}, {
    error: string;
    error_description: string;
}>;
export declare const authResponseGuard: z.ZodObject<{
    code: z.ZodString;
    redirectUri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    redirectUri: string;
}, {
    code: string;
    redirectUri: string;
}>;
