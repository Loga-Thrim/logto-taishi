import { z } from 'zod';
export declare const emailServiceBasicConfigGuard: z.ZodObject<{
    endpoint: z.ZodOptional<z.ZodString>;
    tokenEndpoint: z.ZodOptional<z.ZodString>;
    resource: z.ZodOptional<z.ZodString>;
    appId: z.ZodOptional<z.ZodString>;
    appSecret: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    tokenEndpoint?: string | undefined;
    endpoint?: string | undefined;
    resource?: string | undefined;
    appId?: string | undefined;
    appSecret?: string | undefined;
}, {
    tokenEndpoint?: string | undefined;
    endpoint?: string | undefined;
    resource?: string | undefined;
    appId?: string | undefined;
    appSecret?: string | undefined;
}>;
export type EmailServiceBasicConfig = z.infer<typeof emailServiceBasicConfigGuard>;
export declare const logtoEmailConfigGuard: z.ZodObject<z.extendShape<{
    endpoint: z.ZodOptional<z.ZodString>;
    tokenEndpoint: z.ZodOptional<z.ZodString>;
    resource: z.ZodOptional<z.ZodString>;
    appId: z.ZodOptional<z.ZodString>;
    appSecret: z.ZodOptional<z.ZodString>;
}, {
    senderName: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    companyInformation: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    appLogo: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    tokenEndpoint?: string | undefined;
    endpoint?: string | undefined;
    resource?: string | undefined;
    appId?: string | undefined;
    appSecret?: string | undefined;
    senderName?: string | undefined;
    companyInformation?: string | undefined;
    appLogo?: string | undefined;
}, {
    tokenEndpoint?: string | undefined;
    endpoint?: string | undefined;
    resource?: string | undefined;
    appId?: string | undefined;
    appSecret?: string | undefined;
    senderName?: string | undefined;
    companyInformation?: string | undefined;
    appLogo?: string | undefined;
}>;
export type LogtoEmailConfig = z.infer<typeof logtoEmailConfigGuard>;
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
