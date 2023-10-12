import { z } from 'zod';
export declare const kakaoConfigGuard: z.ZodObject<{
    clientId: z.ZodString;
    clientSecret: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    clientSecret?: string | undefined;
    clientId: string;
}, {
    clientSecret?: string | undefined;
    clientId: string;
}>;
export type KakaoConfig = z.infer<typeof kakaoConfigGuard>;
export declare const accessTokenResponseGuard: z.ZodObject<{
    access_token: z.ZodString;
    scope: z.ZodOptional<z.ZodString>;
    token_type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    scope?: string | undefined;
    access_token: string;
    token_type: string;
}, {
    scope?: string | undefined;
    access_token: string;
    token_type: string;
}>;
export type AccessTokenResponse = z.infer<typeof accessTokenResponseGuard>;
export declare const userInfoResponseGuard: z.ZodObject<{
    id: z.ZodNumber;
    kakao_account: z.ZodOptional<z.ZodObject<{
        is_email_valid: z.ZodOptional<z.ZodBoolean>;
        email: z.ZodOptional<z.ZodString>;
        profile: z.ZodOptional<z.ZodObject<{
            nickname: z.ZodOptional<z.ZodString>;
            profile_image_url: z.ZodOptional<z.ZodString>;
            is_default_image: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            nickname?: string | undefined;
            profile_image_url?: string | undefined;
            is_default_image?: boolean | undefined;
        }, {
            nickname?: string | undefined;
            profile_image_url?: string | undefined;
            is_default_image?: boolean | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        is_email_valid?: boolean | undefined;
        email?: string | undefined;
        profile?: {
            nickname?: string | undefined;
            profile_image_url?: string | undefined;
            is_default_image?: boolean | undefined;
        } | undefined;
    }, {
        is_email_valid?: boolean | undefined;
        email?: string | undefined;
        profile?: {
            nickname?: string | undefined;
            profile_image_url?: string | undefined;
            is_default_image?: boolean | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    kakao_account?: {
        is_email_valid?: boolean | undefined;
        email?: string | undefined;
        profile?: {
            nickname?: string | undefined;
            profile_image_url?: string | undefined;
            is_default_image?: boolean | undefined;
        } | undefined;
    } | undefined;
    id: number;
}, {
    kakao_account?: {
        is_email_valid?: boolean | undefined;
        email?: string | undefined;
        profile?: {
            nickname?: string | undefined;
            profile_image_url?: string | undefined;
            is_default_image?: boolean | undefined;
        } | undefined;
    } | undefined;
    id: number;
}>;
export type UserInfoResponse = z.infer<typeof userInfoResponseGuard>;
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
