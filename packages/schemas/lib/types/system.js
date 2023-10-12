import { z } from 'zod';
// Alteration state
export var AlterationStateKey;
(function (AlterationStateKey) {
    AlterationStateKey["AlterationState"] = "alterationState";
})(AlterationStateKey || (AlterationStateKey = {}));
export const alterationStateGuard = Object.freeze({
    [AlterationStateKey.AlterationState]: z.object({
        timestamp: z.number(),
        updatedAt: z.string().optional(),
    }),
});
// Storage provider
export var StorageProvider;
(function (StorageProvider) {
    StorageProvider["AzureStorage"] = "AzureStorage";
    StorageProvider["S3Storage"] = "S3Storage";
})(StorageProvider || (StorageProvider = {}));
const basicConfig = {
    publicUrl: z.string().optional(),
};
export const storageProviderDataGuard = z.discriminatedUnion('provider', [
    z.object({
        provider: z.literal(StorageProvider.AzureStorage),
        connectionString: z.string(),
        container: z.string(),
        ...basicConfig,
    }),
    z.object({
        provider: z.literal(StorageProvider.S3Storage),
        endpoint: z.string().optional(),
        region: z.string().optional(),
        bucket: z.string(),
        accessKeyId: z.string(),
        accessSecretKey: z.string(),
        ...basicConfig,
    }),
]);
export var StorageProviderKey;
(function (StorageProviderKey) {
    StorageProviderKey["StorageProvider"] = "storageProvider";
})(StorageProviderKey || (StorageProviderKey = {}));
export const storageProviderGuard = Object.freeze({
    [StorageProviderKey.StorageProvider]: storageProviderDataGuard,
});
// Email service provider
export var EmailServiceProvider;
(function (EmailServiceProvider) {
    EmailServiceProvider["SendGrid"] = "SendGrid";
})(EmailServiceProvider || (EmailServiceProvider = {}));
export const sendgridEmailServiceConfigGuard = z.object({
    provider: z.literal(EmailServiceProvider.SendGrid),
    apiKey: z.string(),
    templateId: z.string(),
    fromName: z.string(),
    fromEmail: z.string(),
});
export const emailServiceConfigGuard = z.discriminatedUnion('provider', [
    sendgridEmailServiceConfigGuard,
]);
export var EmailServiceProviderKey;
(function (EmailServiceProviderKey) {
    EmailServiceProviderKey["EmailServiceProvider"] = "emailServiceProvider";
})(EmailServiceProviderKey || (EmailServiceProviderKey = {}));
export const emailServiceProviderGuard = Object.freeze({
    [EmailServiceProviderKey.EmailServiceProvider]: emailServiceConfigGuard,
});
// Demo social connectors
export var DemoSocialProvider;
(function (DemoSocialProvider) {
    DemoSocialProvider["Google"] = "google";
    DemoSocialProvider["GitHub"] = "github";
    DemoSocialProvider["Discord"] = "discord";
})(DemoSocialProvider || (DemoSocialProvider = {}));
export const demoSocialDataGuard = z
    .object({
    name: z.string(),
    logo: z.string(),
    logoDark: z.string(),
    provider: z.nativeEnum(DemoSocialProvider),
    clientId: z.string(),
})
    .array();
export var DemoSocialKey;
(function (DemoSocialKey) {
    DemoSocialKey["DemoSocial"] = "demoSocial";
})(DemoSocialKey || (DemoSocialKey = {}));
export const demoSocialGuard = Object.freeze({
    [DemoSocialKey.DemoSocial]: demoSocialDataGuard,
});
// Cloudflare Hostnames
export const hostnameProviderDataGuard = z.object({
    zoneId: z.string(),
    apiToken: z.string(), // Requires zone permission for "SSL and Certificates Edit"
});
export var CloudflareKey;
(function (CloudflareKey) {
    CloudflareKey["HostnameProvider"] = "cloudflareHostnameProvider";
})(CloudflareKey || (CloudflareKey = {}));
export const cloudflareGuard = Object.freeze({
    [CloudflareKey.HostnameProvider]: hostnameProviderDataGuard,
});
export const systemKeys = Object.freeze([
    ...Object.values(AlterationStateKey),
    ...Object.values(StorageProviderKey),
    ...Object.values(DemoSocialKey),
    ...Object.values(CloudflareKey),
    ...Object.values(EmailServiceProviderKey),
]);
export const systemGuards = Object.freeze({
    ...alterationStateGuard,
    ...storageProviderGuard,
    ...demoSocialGuard,
    ...cloudflareGuard,
    ...emailServiceProviderGuard,
});
