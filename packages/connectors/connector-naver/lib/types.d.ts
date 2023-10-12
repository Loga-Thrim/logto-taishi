import { z } from 'zod';
export declare const naverConfigGuard: z.ZodObject<{
    clientId: z.ZodString;
    clientSecret: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientId: string;
    clientSecret: string;
}, {
    clientId: string;
    clientSecret: string;
}>;
export type NaverConfig = z.infer<typeof naverConfigGuard>;
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
/**
 * More information about the response can be found here:
 * https://developers.naver.com/docs/login/profile/profile.md
 * https://developers.naver.com/docs/login/devguide/devguide.md
 */
export declare const userInfoResponseGuard: z.ZodObject<{
    resultcode: z.ZodString;
    message: z.ZodString;
    response: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodOptional<z.ZodString>;
        nickname: z.ZodOptional<z.ZodString>;
        profile_image: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        email?: string | undefined;
        nickname?: string | undefined;
        profile_image?: string | undefined;
        id: string;
    }, {
        email?: string | undefined;
        nickname?: string | undefined;
        profile_image?: string | undefined;
        id: string;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    resultcode: string;
    response: {
        email?: string | undefined;
        nickname?: string | undefined;
        profile_image?: string | undefined;
        id: string;
    };
}, {
    message: string;
    resultcode: string;
    response: {
        email?: string | undefined;
        nickname?: string | undefined;
        profile_image?: string | undefined;
        id: string;
    };
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
