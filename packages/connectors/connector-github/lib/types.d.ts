import { z } from 'zod';
export declare const githubConfigGuard: z.ZodObject<{
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
export type GithubConfig = z.infer<typeof githubConfigGuard>;
export declare const accessTokenResponseGuard: z.ZodObject<{
    access_token: z.ZodString;
    scope: z.ZodString;
    token_type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    scope: string;
    access_token: string;
    token_type: string;
}, {
    scope: string;
    access_token: string;
    token_type: string;
}>;
export type AccessTokenResponse = z.infer<typeof accessTokenResponseGuard>;
export declare const userInfoResponseGuard: z.ZodObject<{
    id: z.ZodNumber;
    avatar_url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name?: string | null | undefined;
    avatar_url?: string | null | undefined;
    email?: string | null | undefined;
    id: number;
}, {
    name?: string | null | undefined;
    avatar_url?: string | null | undefined;
    email?: string | null | undefined;
    id: number;
}>;
export type UserInfoResponse = z.infer<typeof userInfoResponseGuard>;
export declare const authorizationCallbackErrorGuard: z.ZodObject<{
    error: z.ZodString;
    error_description: z.ZodString;
    error_uri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    error: string;
    error_description: string;
    error_uri: string;
}, {
    error: string;
    error_description: string;
    error_uri: string;
}>;
export declare const authResponseGuard: z.ZodObject<{
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
}, {
    code: string;
}>;
