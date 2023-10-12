import { z } from 'zod';
export declare const azureADConfigGuard: z.ZodObject<{
    clientId: z.ZodString;
    clientSecret: z.ZodString;
    cloudInstance: z.ZodString;
    tenantId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientId: string;
    clientSecret: string;
    cloudInstance: string;
    tenantId: string;
}, {
    clientId: string;
    clientSecret: string;
    cloudInstance: string;
    tenantId: string;
}>;
export type AzureADConfig = z.infer<typeof azureADConfigGuard>;
export declare const accessTokenResponseGuard: z.ZodObject<{
    accessToken: z.ZodString;
    scopes: z.ZodArray<z.ZodString, "many">;
    tokenType: z.ZodString;
}, "strip", z.ZodTypeAny, {
    accessToken: string;
    scopes: string[];
    tokenType: string;
}, {
    accessToken: string;
    scopes: string[];
    tokenType: string;
}>;
export type AccessTokenResponse = z.infer<typeof accessTokenResponseGuard>;
export declare const userInfoResponseGuard: z.ZodObject<{
    id: z.ZodString;
    displayName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    givenName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    surname: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    userPrincipalName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    jobTitle: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    mail: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    mobilePhone: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    officeLocation: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    preferredLanguage: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    businessPhones: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
}, "strip", z.ZodTypeAny, {
    displayName?: string | null | undefined;
    givenName?: string | null | undefined;
    surname?: string | null | undefined;
    userPrincipalName?: string | null | undefined;
    jobTitle?: string | null | undefined;
    mail?: string | null | undefined;
    mobilePhone?: string | null | undefined;
    officeLocation?: string | null | undefined;
    preferredLanguage?: string | null | undefined;
    businessPhones?: string[] | null | undefined;
    id: string;
}, {
    displayName?: string | null | undefined;
    givenName?: string | null | undefined;
    surname?: string | null | undefined;
    userPrincipalName?: string | null | undefined;
    jobTitle?: string | null | undefined;
    mail?: string | null | undefined;
    mobilePhone?: string | null | undefined;
    officeLocation?: string | null | undefined;
    preferredLanguage?: string | null | undefined;
    businessPhones?: string[] | null | undefined;
    id: string;
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
