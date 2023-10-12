import { z } from 'zod';
export declare const alipayConfigGuard: z.ZodObject<{
    appId: z.ZodString;
    privateKey: z.ZodString;
    signType: z.ZodEnum<["RSA", "RSA2"]>;
    charset: z.ZodDefault<z.ZodEnum<["gbk", "utf8"]>>;
    scope: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    scope?: string | undefined;
    appId: string;
    privateKey: string;
    signType: "RSA" | "RSA2";
    charset: "gbk" | "utf8";
}, {
    charset?: "gbk" | "utf8" | undefined;
    scope?: string | undefined;
    appId: string;
    privateKey: string;
    signType: "RSA" | "RSA2";
}>;
export type AlipayConfig = z.infer<typeof alipayConfigGuard>;
export declare const errorResponseGuard: z.ZodObject<{
    code: z.ZodString;
    msg: z.ZodString;
    sub_code: z.ZodOptional<z.ZodString>;
    sub_msg: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    sub_code?: string | undefined;
    sub_msg?: string | undefined;
    code: string;
    msg: string;
}, {
    sub_code?: string | undefined;
    sub_msg?: string | undefined;
    code: string;
    msg: string;
}>;
export declare const alipaySystemOauthTokenResponseGuard: z.ZodObject<{
    user_id: z.ZodString;
    access_token: z.ZodString;
    expires_in: z.ZodNumber;
    refresh_token: z.ZodString;
    re_expires_in: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    user_id: string;
    access_token: string;
    expires_in: number;
    refresh_token: string;
    re_expires_in: number;
}, {
    user_id: string;
    access_token: string;
    expires_in: number;
    refresh_token: string;
    re_expires_in: number;
}>;
export declare const accessTokenResponseGuard: z.ZodObject<{
    sign: z.ZodString;
    error_response: z.ZodOptional<z.ZodObject<{
        code: z.ZodString;
        msg: z.ZodString;
        sub_code: z.ZodOptional<z.ZodString>;
        sub_msg: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        sub_code?: string | undefined;
        sub_msg?: string | undefined;
        code: string;
        msg: string;
    }, {
        sub_code?: string | undefined;
        sub_msg?: string | undefined;
        code: string;
        msg: string;
    }>>;
    alipay_system_oauth_token_response: z.ZodOptional<z.ZodObject<{
        user_id: z.ZodString;
        access_token: z.ZodString;
        expires_in: z.ZodNumber;
        refresh_token: z.ZodString;
        re_expires_in: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        user_id: string;
        access_token: string;
        expires_in: number;
        refresh_token: string;
        re_expires_in: number;
    }, {
        user_id: string;
        access_token: string;
        expires_in: number;
        refresh_token: string;
        re_expires_in: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    error_response?: {
        sub_code?: string | undefined;
        sub_msg?: string | undefined;
        code: string;
        msg: string;
    } | undefined;
    alipay_system_oauth_token_response?: {
        user_id: string;
        access_token: string;
        expires_in: number;
        refresh_token: string;
        re_expires_in: number;
    } | undefined;
    sign: string;
}, {
    error_response?: {
        sub_code?: string | undefined;
        sub_msg?: string | undefined;
        code: string;
        msg: string;
    } | undefined;
    alipay_system_oauth_token_response?: {
        user_id: string;
        access_token: string;
        expires_in: number;
        refresh_token: string;
        re_expires_in: number;
    } | undefined;
    sign: string;
}>;
export type AccessTokenResponse = z.infer<typeof accessTokenResponseGuard>;
export declare const alipayUserInfoShareResponseGuard: z.ZodObject<{
    user_id: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodString>;
    province: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    nick_name: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodString>;
    code: z.ZodString;
    msg: z.ZodString;
    sub_code: z.ZodOptional<z.ZodString>;
    sub_msg: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    sub_code?: string | undefined;
    sub_msg?: string | undefined;
    user_id?: string | undefined;
    avatar?: string | undefined;
    province?: string | undefined;
    city?: string | undefined;
    nick_name?: string | undefined;
    gender?: string | undefined;
    code: string;
    msg: string;
}, {
    sub_code?: string | undefined;
    sub_msg?: string | undefined;
    user_id?: string | undefined;
    avatar?: string | undefined;
    province?: string | undefined;
    city?: string | undefined;
    nick_name?: string | undefined;
    gender?: string | undefined;
    code: string;
    msg: string;
}>;
type AlipayUserInfoShareResponse = z.infer<typeof alipayUserInfoShareResponseGuard>;
export declare const userInfoResponseGuard: z.ZodObject<{
    sign: z.ZodString;
    alipay_user_info_share_response: z.ZodObject<{
        user_id: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodString>;
        province: z.ZodOptional<z.ZodString>;
        city: z.ZodOptional<z.ZodString>;
        nick_name: z.ZodOptional<z.ZodString>;
        gender: z.ZodOptional<z.ZodString>;
        code: z.ZodString;
        msg: z.ZodString;
        sub_code: z.ZodOptional<z.ZodString>;
        sub_msg: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        sub_code?: string | undefined;
        sub_msg?: string | undefined;
        user_id?: string | undefined;
        avatar?: string | undefined;
        province?: string | undefined;
        city?: string | undefined;
        nick_name?: string | undefined;
        gender?: string | undefined;
        code: string;
        msg: string;
    }, {
        sub_code?: string | undefined;
        sub_msg?: string | undefined;
        user_id?: string | undefined;
        avatar?: string | undefined;
        province?: string | undefined;
        city?: string | undefined;
        nick_name?: string | undefined;
        gender?: string | undefined;
        code: string;
        msg: string;
    }>;
}, "strip", z.ZodTypeAny, {
    sign: string;
    alipay_user_info_share_response: {
        sub_code?: string | undefined;
        sub_msg?: string | undefined;
        user_id?: string | undefined;
        avatar?: string | undefined;
        province?: string | undefined;
        city?: string | undefined;
        nick_name?: string | undefined;
        gender?: string | undefined;
        code: string;
        msg: string;
    };
}, {
    sign: string;
    alipay_user_info_share_response: {
        sub_code?: string | undefined;
        sub_msg?: string | undefined;
        user_id?: string | undefined;
        avatar?: string | undefined;
        province?: string | undefined;
        city?: string | undefined;
        nick_name?: string | undefined;
        gender?: string | undefined;
        code: string;
        msg: string;
    };
}>;
export type UserInfoResponse = z.infer<typeof userInfoResponseGuard>;
export type ErrorHandler = (response: AlipayUserInfoShareResponse) => void;
export {};
