import { z } from 'zod';
export declare const logtoSmsConfigGuard: z.ZodObject<{
    endpoint: z.ZodString;
    tokenEndpoint: z.ZodString;
    resource: z.ZodString;
    appId: z.ZodString;
    appSecret: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tokenEndpoint: string;
    endpoint: string;
    resource: string;
    appId: string;
    appSecret: string;
}, {
    tokenEndpoint: string;
    endpoint: string;
    resource: string;
    appId: string;
    appSecret: string;
}>;
export type LogtoSmsConfig = z.infer<typeof logtoSmsConfigGuard>;
export declare const accessTokenResponseGuard: z.ZodObject<{
    access_token: z.ZodString;
    expires_in: z.ZodNumber;
    token_type: z.ZodString;
    scope: z.ZodString;
}, "strip", z.ZodTypeAny, {
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
}, {
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
}>;
export type AccessTokenResponse = z.infer<typeof accessTokenResponseGuard>;
