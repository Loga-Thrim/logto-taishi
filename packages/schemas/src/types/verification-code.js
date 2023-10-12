"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyVerificationCodePayloadGuard = exports.phoneVerificationCodePayloadGuard = exports.emailVerificationCodePayloadGuard = exports.requestVerificationCodePayloadGuard = void 0;
var core_kit_1 = require("@logto/core-kit");
var zod_1 = require("zod");
var emailIdentifierGuard = zod_1.z.string().regex(core_kit_1.emailRegEx);
var phoneIdentifierGuard = zod_1.z.string().regex(core_kit_1.phoneRegEx);
var codeGuard = zod_1.z.string().min(1);
// Used when requesting Logto to send a verification code to email or phone
exports.requestVerificationCodePayloadGuard = zod_1.z.union([
    zod_1.z.object({ email: emailIdentifierGuard }),
    zod_1.z.object({ phone: phoneIdentifierGuard }),
]);
exports.emailVerificationCodePayloadGuard = zod_1.z.object({
    email: emailIdentifierGuard,
    verificationCode: codeGuard,
});
exports.phoneVerificationCodePayloadGuard = zod_1.z.object({
    phone: phoneIdentifierGuard,
    verificationCode: codeGuard,
});
// Used when requesting Logto to verify the validity of a verification code
exports.verifyVerificationCodePayloadGuard = zod_1.z.union([
    exports.emailVerificationCodePayloadGuard,
    exports.phoneVerificationCodePayloadGuard,
]);
