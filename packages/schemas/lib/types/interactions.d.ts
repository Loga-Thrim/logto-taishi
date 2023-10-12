import { z } from 'zod';
import { MfaFactor } from '../foundations/index.js';
import type { EmailVerificationCodePayload, PhoneVerificationCodePayload } from './verification-code.js';
/**
 * Detailed interaction identifier payload guard
 */
export declare const usernamePasswordPayloadGuard: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export type UsernamePasswordPayload = z.infer<typeof usernamePasswordPayloadGuard>;
export declare const emailPasswordPayloadGuard: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type EmailPasswordPayload = z.infer<typeof emailPasswordPayloadGuard>;
export declare const phonePasswordPayloadGuard: z.ZodObject<{
    phone: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    phone: string;
    password: string;
}, {
    phone: string;
    password: string;
}>;
export type PhonePasswordPayload = z.infer<typeof phonePasswordPayloadGuard>;
export declare const socialConnectorPayloadGuard: z.ZodObject<{
    connectorId: z.ZodString;
    connectorData: z.ZodRecord<z.ZodString, z.ZodType<import("../foundations/index.js").Json, z.ZodTypeDef, import("../foundations/index.js").Json>>;
}, "strip", z.ZodTypeAny, {
    connectorId: string;
    connectorData: Record<string, import("../foundations/index.js").Json>;
}, {
    connectorId: string;
    connectorData: Record<string, import("../foundations/index.js").Json>;
}>;
export type SocialConnectorPayload = z.infer<typeof socialConnectorPayloadGuard>;
export declare const socialEmailPayloadGuard: z.ZodObject<{
    connectorId: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    connectorId: string;
}, {
    email: string;
    connectorId: string;
}>;
export type SocialEmailPayload = z.infer<typeof socialEmailPayloadGuard>;
export declare const socialPhonePayloadGuard: z.ZodObject<{
    connectorId: z.ZodString;
    phone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    phone: string;
    connectorId: string;
}, {
    phone: string;
    connectorId: string;
}>;
export type SocialPhonePayload = z.infer<typeof socialPhonePayloadGuard>;
export declare enum InteractionEvent {
    SignIn = "SignIn",
    Register = "Register",
    ForgotPassword = "ForgotPassword"
}
export declare const eventGuard: z.ZodNativeEnum<typeof InteractionEvent>;
export declare const identifierPayloadGuard: z.ZodUnion<[z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>, z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>, z.ZodObject<{
    phone: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    phone: string;
    password: string;
}, {
    phone: string;
    password: string;
}>, z.ZodObject<{
    email: z.ZodString;
    verificationCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    verificationCode: string;
}, {
    email: string;
    verificationCode: string;
}>, z.ZodObject<{
    phone: z.ZodString;
    verificationCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    phone: string;
    verificationCode: string;
}, {
    phone: string;
    verificationCode: string;
}>, z.ZodObject<{
    connectorId: z.ZodString;
    connectorData: z.ZodRecord<z.ZodString, z.ZodType<import("../foundations/index.js").Json, z.ZodTypeDef, import("../foundations/index.js").Json>>;
}, "strip", z.ZodTypeAny, {
    connectorId: string;
    connectorData: Record<string, import("../foundations/index.js").Json>;
}, {
    connectorId: string;
    connectorData: Record<string, import("../foundations/index.js").Json>;
}>, z.ZodObject<{
    connectorId: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    connectorId: string;
}, {
    email: string;
    connectorId: string;
}>, z.ZodObject<{
    connectorId: z.ZodString;
    phone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    phone: string;
    connectorId: string;
}, {
    phone: string;
    connectorId: string;
}>]>;
export type IdentifierPayload = UsernamePasswordPayload | EmailPasswordPayload | PhonePasswordPayload | EmailVerificationCodePayload | PhoneVerificationCodePayload | SocialConnectorPayload | SocialPhonePayload | SocialEmailPayload;
export declare const profileGuard: z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    connectorId: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    password?: string | undefined;
    connectorId?: string | undefined;
}, {
    username?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    password?: string | undefined;
    connectorId?: string | undefined;
}>;
export type Profile = z.infer<typeof profileGuard>;
export declare enum MissingProfile {
    username = "username",
    email = "email",
    phone = "phone",
    password = "password",
    emailOrPhone = "emailOrPhone"
}
export declare const bindTotpPayloadGuard: z.ZodObject<{
    type: z.ZodLiteral<MfaFactor.TOTP>;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    type: MfaFactor.TOTP;
}, {
    code: string;
    type: MfaFactor.TOTP;
}>;
export type BindTotpPayload = z.infer<typeof bindTotpPayloadGuard>;
export declare const bindMfaPayloadGuard: z.ZodObject<{
    type: z.ZodLiteral<MfaFactor.TOTP>;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    type: MfaFactor.TOTP;
}, {
    code: string;
    type: MfaFactor.TOTP;
}>;
export type BindMfaPayload = z.infer<typeof bindMfaPayloadGuard>;
export declare const totpVerificationPayloadGuard: z.ZodObject<{
    type: z.ZodLiteral<MfaFactor.TOTP>;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    type: MfaFactor.TOTP;
}, {
    code: string;
    type: MfaFactor.TOTP;
}>;
export type TotpVerificationPayload = z.infer<typeof totpVerificationPayloadGuard>;
export declare const verifyMfaPayloadGuard: z.ZodObject<{
    type: z.ZodLiteral<MfaFactor.TOTP>;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    type: MfaFactor.TOTP;
}, {
    code: string;
    type: MfaFactor.TOTP;
}>;
export type VerifyMfaPayload = z.infer<typeof verifyMfaPayloadGuard>;
export declare const pendingTotpGuard: z.ZodObject<{
    type: z.ZodLiteral<MfaFactor.TOTP>;
    secret: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: MfaFactor.TOTP;
    secret: string;
}, {
    type: MfaFactor.TOTP;
    secret: string;
}>;
export type PendingTotp = z.infer<typeof pendingTotpGuard>;
export declare const pendingMfaGuard: z.ZodObject<{
    type: z.ZodLiteral<MfaFactor.TOTP>;
    secret: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: MfaFactor.TOTP;
    secret: string;
}, {
    type: MfaFactor.TOTP;
    secret: string;
}>;
export type PendingMfa = z.infer<typeof pendingMfaGuard>;
export declare const bindTotpGuard: z.ZodObject<{
    type: z.ZodLiteral<MfaFactor.TOTP>;
    secret: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: MfaFactor.TOTP;
    secret: string;
}, {
    type: MfaFactor.TOTP;
    secret: string;
}>;
export type BindTotp = z.infer<typeof bindTotpGuard>;
export declare const bindMfaGuard: z.ZodObject<{
    type: z.ZodLiteral<MfaFactor.TOTP>;
    secret: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: MfaFactor.TOTP;
    secret: string;
}, {
    type: MfaFactor.TOTP;
    secret: string;
}>;
export type BindMfa = z.infer<typeof bindMfaGuard>;
export declare const verifyMfaResultGuard: z.ZodObject<{
    type: z.ZodNativeEnum<typeof MfaFactor>;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: MfaFactor;
    id: string;
}, {
    type: MfaFactor;
    id: string;
}>;
export type VerifyMfaResult = z.infer<typeof verifyMfaResultGuard>;
