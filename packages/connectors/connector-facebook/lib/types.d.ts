import { z } from 'zod';
export declare const facebookConfigGuard: z.ZodObject<{
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
export type FacebookConfig = z.infer<typeof facebookConfigGuard>;
export declare const accessTokenResponseGuard: z.ZodObject<{
    access_token: z.ZodString;
    token_type: z.ZodString;
    expires_in: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    access_token: string;
    token_type: string;
    expires_in: number;
}, {
    access_token: string;
    token_type: string;
    expires_in: number;
}>;
export type AccessTokenResponse = z.infer<typeof accessTokenResponseGuard>;
export declare const userInfoResponseGuard: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    picture: z.ZodOptional<z.ZodObject<{
        data: z.ZodObject<{
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
        }, {
            url: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        data: {
            url: string;
        };
    }, {
        data: {
            url: string;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    email?: string | undefined;
    picture?: {
        data: {
            url: string;
        };
    } | undefined;
    id: string;
}, {
    name?: string | undefined;
    email?: string | undefined;
    picture?: {
        data: {
            url: string;
        };
    } | undefined;
    id: string;
}>;
export type UserInfoResponse = z.infer<typeof userInfoResponseGuard>;
export declare const authorizationCallbackErrorGuard: z.ZodObject<{
    error: z.ZodString;
    error_code: z.ZodOptional<z.ZodNumber>;
    error_description: z.ZodString;
    error_reason: z.ZodString;
}, "strip", z.ZodTypeAny, {
    error_code?: number | undefined;
    error: string;
    error_description: string;
    error_reason: string;
}, {
    error_code?: number | undefined;
    error: string;
    error_description: string;
    error_reason: string;
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
