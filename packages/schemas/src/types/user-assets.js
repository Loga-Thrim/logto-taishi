"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAssetsGuard = exports.userAssetsServiceStatusGuard = exports.allowUploadMimeTypes = exports.maxUploadFileSize = void 0;
var zod_1 = require("zod");
exports.maxUploadFileSize = 8 * 1024 * 1024; // 8MB
// Reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
exports.allowUploadMimeTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/vnd.microsoft.icon',
    'image/svg+xml',
    'image/tiff',
    'image/webp',
    'image/bmp',
];
var allowUploadMimeTypeGuard = zod_1.z.enum(exports.allowUploadMimeTypes);
exports.userAssetsServiceStatusGuard = zod_1.z.object({
    status: zod_1.z.union([zod_1.z.literal('ready'), zod_1.z.literal('not_configured')]),
    allowUploadMimeTypes: zod_1.z.array(allowUploadMimeTypeGuard).optional(),
    maxUploadFileSize: zod_1.z.number().optional(),
});
exports.userAssetsGuard = zod_1.z.object({
    url: zod_1.z.string(),
});
