import type { ZodType } from 'zod';
import { z } from 'zod';
export declare enum AlterationStateKey {
    AlterationState = "alterationState"
}
export type AlterationState = {
    timestamp: number;
    updatedAt?: string;
};
export type AlterationStateType = {
    [AlterationStateKey.AlterationState]: AlterationState;
};
export declare const alterationStateGuard: Readonly<{
    [key in AlterationStateKey]: ZodType<AlterationStateType[key]>;
}>;
export declare enum StorageProvider {
    AzureStorage = "AzureStorage",
    S3Storage = "S3Storage"
}
export declare const storageProviderDataGuard: z.ZodDiscriminatedUnion<"provider", [z.ZodObject<{
    publicUrl: z.ZodOptional<z.ZodString>;
    provider: z.ZodLiteral<StorageProvider.AzureStorage>;
    connectionString: z.ZodString;
    container: z.ZodString;
}, "strip", z.ZodTypeAny, {
    publicUrl?: string | undefined;
    provider: StorageProvider.AzureStorage;
    connectionString: string;
    container: string;
}, {
    publicUrl?: string | undefined;
    provider: StorageProvider.AzureStorage;
    connectionString: string;
    container: string;
}>, z.ZodObject<{
    publicUrl: z.ZodOptional<z.ZodString>;
    provider: z.ZodLiteral<StorageProvider.S3Storage>;
    endpoint: z.ZodOptional<z.ZodString>;
    region: z.ZodOptional<z.ZodString>;
    bucket: z.ZodString;
    accessKeyId: z.ZodString;
    accessSecretKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    publicUrl?: string | undefined;
    endpoint?: string | undefined;
    region?: string | undefined;
    provider: StorageProvider.S3Storage;
    bucket: string;
    accessKeyId: string;
    accessSecretKey: string;
}, {
    publicUrl?: string | undefined;
    endpoint?: string | undefined;
    region?: string | undefined;
    provider: StorageProvider.S3Storage;
    bucket: string;
    accessKeyId: string;
    accessSecretKey: string;
}>]>;
export type StorageProviderData = z.infer<typeof storageProviderDataGuard>;
export declare enum StorageProviderKey {
    StorageProvider = "storageProvider"
}
export type StorageProviderType = {
    [StorageProviderKey.StorageProvider]: StorageProviderData;
};
export declare const storageProviderGuard: Readonly<{
    [key in StorageProviderKey]: ZodType<StorageProviderType[key]>;
}>;
export declare enum EmailServiceProvider {
    SendGrid = "SendGrid"
}
export declare const sendgridEmailServiceConfigGuard: z.ZodObject<{
    provider: z.ZodLiteral<EmailServiceProvider>;
    apiKey: z.ZodString;
    templateId: z.ZodString;
    fromName: z.ZodString;
    fromEmail: z.ZodString;
}, "strip", z.ZodTypeAny, {
    provider: EmailServiceProvider;
    apiKey: string;
    templateId: string;
    fromName: string;
    fromEmail: string;
}, {
    provider: EmailServiceProvider;
    apiKey: string;
    templateId: string;
    fromName: string;
    fromEmail: string;
}>;
export type SendgridEmailServiceConfig = z.infer<typeof sendgridEmailServiceConfigGuard>;
export declare const emailServiceConfigGuard: z.ZodDiscriminatedUnion<"provider", [z.ZodObject<{
    provider: z.ZodLiteral<EmailServiceProvider>;
    apiKey: z.ZodString;
    templateId: z.ZodString;
    fromName: z.ZodString;
    fromEmail: z.ZodString;
}, "strip", z.ZodTypeAny, {
    provider: EmailServiceProvider;
    apiKey: string;
    templateId: string;
    fromName: string;
    fromEmail: string;
}, {
    provider: EmailServiceProvider;
    apiKey: string;
    templateId: string;
    fromName: string;
    fromEmail: string;
}>]>;
export type EmailServiceConfig = z.infer<typeof emailServiceConfigGuard>;
export declare enum EmailServiceProviderKey {
    EmailServiceProvider = "emailServiceProvider"
}
export type EmailServiceProviderType = {
    [EmailServiceProviderKey.EmailServiceProvider]: EmailServiceConfig;
};
export declare const emailServiceProviderGuard: Readonly<{
    [key in EmailServiceProviderKey]: ZodType<EmailServiceProviderType[key]>;
}>;
export declare enum DemoSocialProvider {
    Google = "google",
    GitHub = "github",
    Discord = "discord"
}
export declare const demoSocialDataGuard: z.ZodArray<z.ZodObject<{
    name: z.ZodString;
    logo: z.ZodString;
    logoDark: z.ZodString;
    provider: z.ZodNativeEnum<typeof DemoSocialProvider>;
    clientId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    logo: string;
    logoDark: string;
    provider: DemoSocialProvider;
    clientId: string;
}, {
    name: string;
    logo: string;
    logoDark: string;
    provider: DemoSocialProvider;
    clientId: string;
}>, "many">;
export type DemoSocialData = z.infer<typeof demoSocialDataGuard>;
export declare enum DemoSocialKey {
    DemoSocial = "demoSocial"
}
export type DemoSocialType = {
    [DemoSocialKey.DemoSocial]: DemoSocialData;
};
export declare const demoSocialGuard: Readonly<{
    [key in DemoSocialKey]: ZodType<DemoSocialType[key]>;
}>;
export declare const hostnameProviderDataGuard: z.ZodObject<{
    zoneId: z.ZodString;
    apiToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    zoneId: string;
    apiToken: string;
}, {
    zoneId: string;
    apiToken: string;
}>;
export type HostnameProviderData = z.infer<typeof hostnameProviderDataGuard>;
export declare enum CloudflareKey {
    HostnameProvider = "cloudflareHostnameProvider"
}
export type CloudflareType = {
    [CloudflareKey.HostnameProvider]: HostnameProviderData;
};
export declare const cloudflareGuard: Readonly<{
    [key in CloudflareKey]: ZodType<CloudflareType[key]>;
}>;
export type SystemKey = AlterationStateKey | StorageProviderKey | DemoSocialKey | CloudflareKey | EmailServiceProviderKey;
export type SystemType = AlterationStateType | StorageProviderType | DemoSocialType | CloudflareType | EmailServiceProviderType;
export type SystemGuard = typeof alterationStateGuard & typeof storageProviderGuard & typeof demoSocialGuard & typeof cloudflareGuard & typeof emailServiceProviderGuard;
export declare const systemKeys: readonly SystemKey[];
export declare const systemGuards: SystemGuard;
