import { z } from 'zod';
export declare const maxUploadFileSize: number;
export declare const allowUploadMimeTypes: readonly ["image/jpeg", "image/png", "image/gif", "image/vnd.microsoft.icon", "image/svg+xml", "image/tiff", "image/webp", "image/bmp"];
declare const allowUploadMimeTypeGuard: z.ZodEnum<["image/jpeg", "image/png", "image/gif", "image/vnd.microsoft.icon", "image/svg+xml", "image/tiff", "image/webp", "image/bmp"]>;
export type AllowedUploadMimeType = z.infer<typeof allowUploadMimeTypeGuard>;
export declare const userAssetsServiceStatusGuard: z.ZodObject<{
    status: z.ZodUnion<[z.ZodLiteral<"ready">, z.ZodLiteral<"not_configured">]>;
    allowUploadMimeTypes: z.ZodOptional<z.ZodArray<z.ZodEnum<["image/jpeg", "image/png", "image/gif", "image/vnd.microsoft.icon", "image/svg+xml", "image/tiff", "image/webp", "image/bmp"]>, "many">>;
    maxUploadFileSize: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    allowUploadMimeTypes?: ("image/jpeg" | "image/png" | "image/gif" | "image/vnd.microsoft.icon" | "image/svg+xml" | "image/tiff" | "image/webp" | "image/bmp")[] | undefined;
    maxUploadFileSize?: number | undefined;
    status: "ready" | "not_configured";
}, {
    allowUploadMimeTypes?: ("image/jpeg" | "image/png" | "image/gif" | "image/vnd.microsoft.icon" | "image/svg+xml" | "image/tiff" | "image/webp" | "image/bmp")[] | undefined;
    maxUploadFileSize?: number | undefined;
    status: "ready" | "not_configured";
}>;
export type UserAssetsServiceStatus = z.infer<typeof userAssetsServiceStatusGuard>;
export declare const userAssetsGuard: z.ZodObject<{
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
}, {
    url: string;
}>;
export type UserAssets = z.infer<typeof userAssetsGuard>;
export {};
