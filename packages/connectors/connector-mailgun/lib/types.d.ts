import { z } from 'zod';
import { VerificationCodeType } from '@logto/connector-kit';
export declare const supportTemplateGuard: z.ZodEnum<[VerificationCodeType.SignIn, VerificationCodeType.Register, VerificationCodeType.ForgotPassword, VerificationCodeType.Generic]>;
type SupportTemplate = z.infer<typeof supportTemplateGuard>;
type CommonEmailConfig = {
    /** Subject of the message. */
    subject?: string;
    /** The email address for recipients to reply to. */
    replyTo?: string;
};
/** The data to send a regular message (email). */
type RawEmailConfig = CommonEmailConfig & {
    /** HTML version of the message. */
    html: string;
    /** Text version of the message. */
    text?: string;
};
/** The data to send a template message (email). */
type TemplateEmailConfig = CommonEmailConfig & {
    /** The template name. */
    template: string;
    /** The template variables. */
    variables?: Record<string, unknown>;
};
/** Config object fot a specific template type. */
export type DeliveryConfig = RawEmailConfig | TemplateEmailConfig;
export type MailgunConfig = {
    /** Mailgun endpoint. For EU region, use `https://api.eu.mailgun.net`. */
    endpoint?: string;
    /** Mailgun domain. */
    domain: string;
    /** Mailgun API key. */
    apiKey: string;
    /** The sender of the email, in the form `Sender Name <me@samples.mailgun.org>`. */
    from: string;
    /**
     * The template config object for each template type, while the key is the template type
     * and the value is the config object.
     */
    deliveries: Partial<Record<SupportTemplate, DeliveryConfig>>;
};
export declare const mailgunConfigGuard: z.ZodObject<{
    endpoint: z.ZodOptional<z.ZodString>;
    domain: z.ZodString;
    apiKey: z.ZodString;
    from: z.ZodString;
    deliveries: z.ZodRecord<z.ZodEnum<[VerificationCodeType.SignIn, VerificationCodeType.Register, VerificationCodeType.ForgotPassword, VerificationCodeType.Generic]>, z.ZodUnion<[z.ZodObject<{
        html: z.ZodString;
        text: z.ZodOptional<z.ZodString>;
        subject: z.ZodOptional<z.ZodString>;
        replyTo: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        text?: string | undefined;
        subject?: string | undefined;
        replyTo?: string | undefined;
        html: string;
    }, {
        text?: string | undefined;
        subject?: string | undefined;
        replyTo?: string | undefined;
        html: string;
    }>, z.ZodObject<{
        template: z.ZodString;
        variables: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        subject: z.ZodOptional<z.ZodString>;
        replyTo: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        subject?: string | undefined;
        replyTo?: string | undefined;
        variables?: Record<string, unknown> | undefined;
        template: string;
    }, {
        subject?: string | undefined;
        replyTo?: string | undefined;
        variables?: Record<string, unknown> | undefined;
        template: string;
    }>]>>;
}, "strip", z.ZodTypeAny, {
    endpoint?: string | undefined;
    domain: string;
    apiKey: string;
    from: string;
    deliveries: Partial<Record<VerificationCodeType.SignIn | VerificationCodeType.Register | VerificationCodeType.ForgotPassword | VerificationCodeType.Generic, {
        text?: string | undefined;
        subject?: string | undefined;
        replyTo?: string | undefined;
        html: string;
    } | {
        subject?: string | undefined;
        replyTo?: string | undefined;
        variables?: Record<string, unknown> | undefined;
        template: string;
    }>>;
}, {
    endpoint?: string | undefined;
    domain: string;
    apiKey: string;
    from: string;
    deliveries: Partial<Record<VerificationCodeType.SignIn | VerificationCodeType.Register | VerificationCodeType.ForgotPassword | VerificationCodeType.Generic, {
        text?: string | undefined;
        subject?: string | undefined;
        replyTo?: string | undefined;
        html: string;
    } | {
        subject?: string | undefined;
        replyTo?: string | undefined;
        variables?: Record<string, unknown> | undefined;
        template: string;
    }>>;
}>;
export {};
