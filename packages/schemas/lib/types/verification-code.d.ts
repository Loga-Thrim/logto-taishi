import { z } from 'zod';
export declare const requestVerificationCodePayloadGuard: z.ZodUnion<[z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>, z.ZodObject<{
    phone: z.ZodString;
}, "strip", z.ZodTypeAny, {
    phone: string;
}, {
    phone: string;
}>]>;
export type RequestVerificationCodePayload = z.infer<typeof requestVerificationCodePayloadGuard>;
export declare const emailVerificationCodePayloadGuard: z.ZodObject<{
    email: z.ZodString;
    verificationCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    verificationCode: string;
}, {
    email: string;
    verificationCode: string;
}>;
export type EmailVerificationCodePayload = z.infer<typeof emailVerificationCodePayloadGuard>;
export declare const phoneVerificationCodePayloadGuard: z.ZodObject<{
    phone: z.ZodString;
    verificationCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    phone: string;
    verificationCode: string;
}, {
    phone: string;
    verificationCode: string;
}>;
export type PhoneVerificationCodePayload = z.infer<typeof phoneVerificationCodePayloadGuard>;
export declare const verifyVerificationCodePayloadGuard: z.ZodUnion<[z.ZodObject<{
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
}>]>;
export type VerifyVerificationCodePayload = EmailVerificationCodePayload | PhoneVerificationCodePayload;
