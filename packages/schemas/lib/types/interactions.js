import { emailRegEx, phoneRegEx, usernameRegEx } from '@logto/core-kit';
import { z } from 'zod';
import { MfaFactor, jsonObjectGuard } from '../foundations/index.js';
import { emailVerificationCodePayloadGuard, phoneVerificationCodePayloadGuard, } from './verification-code.js';
/**
 * Detailed interaction identifier payload guard
 */
export const usernamePasswordPayloadGuard = z.object({
    username: z.string().min(1),
    password: z.string().min(1),
});
export const emailPasswordPayloadGuard = z.object({
    email: z.string().min(1),
    password: z.string().min(1),
});
export const phonePasswordPayloadGuard = z.object({
    phone: z.string().min(1),
    password: z.string().min(1),
});
export const socialConnectorPayloadGuard = z.object({
    connectorId: z.string(),
    connectorData: jsonObjectGuard,
});
export const socialEmailPayloadGuard = z.object({
    connectorId: z.string(),
    email: z.string(),
});
export const socialPhonePayloadGuard = z.object({
    connectorId: z.string(),
    phone: z.string(),
});
// Interaction flow event types
export var InteractionEvent;
(function (InteractionEvent) {
    InteractionEvent["SignIn"] = "SignIn";
    InteractionEvent["Register"] = "Register";
    InteractionEvent["ForgotPassword"] = "ForgotPassword";
})(InteractionEvent || (InteractionEvent = {}));
export const eventGuard = z.nativeEnum(InteractionEvent);
export const identifierPayloadGuard = z.union([
    usernamePasswordPayloadGuard,
    emailPasswordPayloadGuard,
    phonePasswordPayloadGuard,
    emailVerificationCodePayloadGuard,
    phoneVerificationCodePayloadGuard,
    socialConnectorPayloadGuard,
    socialEmailPayloadGuard,
    socialPhonePayloadGuard,
]);
export const profileGuard = z.object({
    username: z.string().regex(usernameRegEx).optional(),
    email: z.string().regex(emailRegEx).optional(),
    phone: z.string().regex(phoneRegEx).optional(),
    connectorId: z.string().optional(),
    password: z.string().optional(),
});
export var MissingProfile;
(function (MissingProfile) {
    MissingProfile["username"] = "username";
    MissingProfile["email"] = "email";
    MissingProfile["phone"] = "phone";
    MissingProfile["password"] = "password";
    MissingProfile["emailOrPhone"] = "emailOrPhone";
})(MissingProfile || (MissingProfile = {}));
export const bindTotpPayloadGuard = z.object({
    // Unlike identifier payload which has indicator like "email",
    // mfa payload must have an additional type field to indicate type
    type: z.literal(MfaFactor.TOTP),
    code: z.string(),
});
export const bindMfaPayloadGuard = bindTotpPayloadGuard;
export const totpVerificationPayloadGuard = bindTotpPayloadGuard;
export const verifyMfaPayloadGuard = totpVerificationPayloadGuard;
export const pendingTotpGuard = z.object({
    type: z.literal(MfaFactor.TOTP),
    secret: z.string(),
});
// Some information like TOTP secret should be generated in the backend
// and stored in the interaction temporarily.
export const pendingMfaGuard = pendingTotpGuard;
export const bindTotpGuard = pendingTotpGuard;
// The type for binding new mfa verification to a user, not always equals to the pending type.
export const bindMfaGuard = bindTotpGuard;
export const verifyMfaResultGuard = z.object({
    type: z.nativeEnum(MfaFactor),
    id: z.string(),
});
