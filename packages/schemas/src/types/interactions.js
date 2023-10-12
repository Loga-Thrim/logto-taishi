"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyMfaResultGuard = exports.bindMfaGuard = exports.bindTotpGuard = exports.pendingMfaGuard = exports.pendingTotpGuard = exports.verifyMfaPayloadGuard = exports.totpVerificationPayloadGuard = exports.bindMfaPayloadGuard = exports.bindTotpPayloadGuard = exports.MissingProfile = exports.profileGuard = exports.identifierPayloadGuard = exports.eventGuard = exports.InteractionEvent = exports.socialPhonePayloadGuard = exports.socialEmailPayloadGuard = exports.socialConnectorPayloadGuard = exports.phonePasswordPayloadGuard = exports.emailPasswordPayloadGuard = exports.usernamePasswordPayloadGuard = void 0;
var core_kit_1 = require("@logto/core-kit");
var zod_1 = require("zod");
var index_js_1 = require("../foundations/index.js");
var verification_code_js_1 = require("./verification-code.js");
/**
 * Detailed interaction identifier payload guard
 */
exports.usernamePasswordPayloadGuard = zod_1.z.object({
    username: zod_1.z.string().min(1),
    password: zod_1.z.string().min(1),
});
exports.emailPasswordPayloadGuard = zod_1.z.object({
    email: zod_1.z.string().min(1),
    password: zod_1.z.string().min(1),
});
exports.phonePasswordPayloadGuard = zod_1.z.object({
    phone: zod_1.z.string().min(1),
    password: zod_1.z.string().min(1),
});
exports.socialConnectorPayloadGuard = zod_1.z.object({
    connectorId: zod_1.z.string(),
    connectorData: index_js_1.jsonObjectGuard,
});
exports.socialEmailPayloadGuard = zod_1.z.object({
    connectorId: zod_1.z.string(),
    email: zod_1.z.string(),
});
exports.socialPhonePayloadGuard = zod_1.z.object({
    connectorId: zod_1.z.string(),
    phone: zod_1.z.string(),
});
// Interaction flow event types
var InteractionEvent;
(function (InteractionEvent) {
    InteractionEvent["SignIn"] = "SignIn";
    InteractionEvent["Register"] = "Register";
    InteractionEvent["ForgotPassword"] = "ForgotPassword";
})(InteractionEvent = exports.InteractionEvent || (exports.InteractionEvent = {}));
exports.eventGuard = zod_1.z.nativeEnum(InteractionEvent);
exports.identifierPayloadGuard = zod_1.z.union([
    exports.usernamePasswordPayloadGuard,
    exports.emailPasswordPayloadGuard,
    exports.phonePasswordPayloadGuard,
    verification_code_js_1.emailVerificationCodePayloadGuard,
    verification_code_js_1.phoneVerificationCodePayloadGuard,
    exports.socialConnectorPayloadGuard,
    exports.socialEmailPayloadGuard,
    exports.socialPhonePayloadGuard,
]);
exports.profileGuard = zod_1.z.object({
    username: zod_1.z.string().regex(core_kit_1.usernameRegEx).optional(),
    email: zod_1.z.string().regex(core_kit_1.emailRegEx).optional(),
    phone: zod_1.z.string().regex(core_kit_1.phoneRegEx).optional(),
    connectorId: zod_1.z.string().optional(),
    password: zod_1.z.string().optional(),
});
var MissingProfile;
(function (MissingProfile) {
    MissingProfile["username"] = "username";
    MissingProfile["email"] = "email";
    MissingProfile["phone"] = "phone";
    MissingProfile["password"] = "password";
    MissingProfile["emailOrPhone"] = "emailOrPhone";
})(MissingProfile = exports.MissingProfile || (exports.MissingProfile = {}));
exports.bindTotpPayloadGuard = zod_1.z.object({
    // Unlike identifier payload which has indicator like "email",
    // mfa payload must have an additional type field to indicate type
    type: zod_1.z.literal(index_js_1.MfaFactor.TOTP),
    code: zod_1.z.string(),
});
exports.bindMfaPayloadGuard = exports.bindTotpPayloadGuard;
exports.totpVerificationPayloadGuard = exports.bindTotpPayloadGuard;
exports.verifyMfaPayloadGuard = exports.totpVerificationPayloadGuard;
exports.pendingTotpGuard = zod_1.z.object({
    type: zod_1.z.literal(index_js_1.MfaFactor.TOTP),
    secret: zod_1.z.string(),
});
// Some information like TOTP secret should be generated in the backend
// and stored in the interaction temporarily.
exports.pendingMfaGuard = exports.pendingTotpGuard;
exports.bindTotpGuard = exports.pendingTotpGuard;
// The type for binding new mfa verification to a user, not always equals to the pending type.
exports.bindMfaGuard = exports.bindTotpGuard;
exports.verifyMfaResultGuard = zod_1.z.object({
    type: zod_1.z.nativeEnum(index_js_1.MfaFactor),
    id: zod_1.z.string(),
});
