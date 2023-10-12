import { z } from 'zod';
export declare const wechatNativeConfigGuard: z.ZodObject<{
    appId: z.ZodString;
    appSecret: z.ZodString;
    universalLinks: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    universalLinks?: string | undefined;
    appId: string;
    appSecret: string;
}, {
    universalLinks?: string | undefined;
    appId: string;
    appSecret: string;
}>;
export type WechatNativeConfig = z.infer<typeof wechatNativeConfigGuard>;
export declare const accessTokenResponseGuard: z.ZodObject<{
    access_token: z.ZodOptional<z.ZodString>;
    openid: z.ZodOptional<z.ZodString>;
    expires_in: z.ZodOptional<z.ZodNumber>;
    refresh_token: z.ZodOptional<z.ZodString>;
    scope: z.ZodOptional<z.ZodString>;
    errcode: z.ZodOptional<z.ZodNumber>;
    errmsg: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    access_token?: string | undefined;
    openid?: string | undefined;
    expires_in?: number | undefined;
    refresh_token?: string | undefined;
    scope?: string | undefined;
    errcode?: number | undefined;
    errmsg?: string | undefined;
}, {
    access_token?: string | undefined;
    openid?: string | undefined;
    expires_in?: number | undefined;
    refresh_token?: string | undefined;
    scope?: string | undefined;
    errcode?: number | undefined;
    errmsg?: string | undefined;
}>;
export type AccessTokenResponse = z.infer<typeof accessTokenResponseGuard>;
export type GetAccessTokenErrorHandler = (accessToken: Partial<AccessTokenResponse>) => void;
export declare const userInfoResponseGuard: z.ZodObject<{
    unionid: z.ZodOptional<z.ZodString>;
    headimgurl: z.ZodOptional<z.ZodString>;
    nickname: z.ZodOptional<z.ZodString>;
    errcode: z.ZodOptional<z.ZodNumber>;
    errmsg: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    errcode?: number | undefined;
    errmsg?: string | undefined;
    unionid?: string | undefined;
    headimgurl?: string | undefined;
    nickname?: string | undefined;
}, {
    errcode?: number | undefined;
    errmsg?: string | undefined;
    unionid?: string | undefined;
    headimgurl?: string | undefined;
    nickname?: string | undefined;
}>;
export type UserInfoResponse = z.infer<typeof userInfoResponseGuard>;
export type UserInfoResponseMessageParser = (userInfo: Partial<UserInfoResponse>) => void;
export declare const authResponseGuard: z.ZodObject<{
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
}, {
    code: string;
}>;
