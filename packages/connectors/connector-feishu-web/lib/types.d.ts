import { z } from 'zod';
export declare const feishuConfigGuard: z.ZodObject<{
    appId: z.ZodString;
    appSecret: z.ZodString;
}, "strip", z.ZodTypeAny, {
    appId: string;
    appSecret: string;
}, {
    appId: string;
    appSecret: string;
}>;
export type FeishuConfig = z.infer<typeof feishuConfigGuard>;
export declare const feishuAuthCodeGuard: z.ZodObject<{
    code: z.ZodString;
    redirectUri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    redirectUri: string;
}, {
    code: string;
    redirectUri: string;
}>;
export declare const feishuErrorResponse: z.ZodObject<{
    error: z.ZodString;
    error_description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    error_description?: string | undefined;
    error: string;
}, {
    error_description?: string | undefined;
    error: string;
}>;
export declare const feishuAccessTokenResponse: z.ZodObject<{
    access_token: z.ZodString;
    token_type: z.ZodString;
    expires_in: z.ZodNumber;
    refresh_token: z.ZodOptional<z.ZodString>;
    refresh_expires_in: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    refresh_token?: string | undefined;
    refresh_expires_in?: number | undefined;
    access_token: string;
    token_type: string;
    expires_in: number;
}, {
    refresh_token?: string | undefined;
    refresh_expires_in?: number | undefined;
    access_token: string;
    token_type: string;
    expires_in: number;
}>;
export declare const feishuUserInfoResponse: z.ZodObject<{
    sub: z.ZodString;
    name: z.ZodString;
    picture: z.ZodString;
    open_id: z.ZodString;
    union_id: z.ZodString;
    en_name: z.ZodString;
    tenant_key: z.ZodString;
    avatar_url: z.ZodString;
    avatar_thumb: z.ZodString;
    avatar_middle: z.ZodString;
    avatar_big: z.ZodString;
    email: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    user_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    employee_no: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    mobile: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    email?: string | null | undefined;
    user_id?: string | null | undefined;
    employee_no?: string | null | undefined;
    mobile?: string | null | undefined;
    name: string;
    sub: string;
    picture: string;
    open_id: string;
    union_id: string;
    en_name: string;
    tenant_key: string;
    avatar_url: string;
    avatar_thumb: string;
    avatar_middle: string;
    avatar_big: string;
}, {
    email?: string | null | undefined;
    user_id?: string | null | undefined;
    employee_no?: string | null | undefined;
    mobile?: string | null | undefined;
    name: string;
    sub: string;
    picture: string;
    open_id: string;
    union_id: string;
    en_name: string;
    tenant_key: string;
    avatar_url: string;
    avatar_thumb: string;
    avatar_middle: string;
    avatar_big: string;
}>;
