import { z } from 'zod';
/**
 * @doc https://docs.sendgrid.com/api-reference/mail-send/mail-send#body
 */
export declare enum ContextType {
    Text = "text/plain",
    Html = "text/html"
}
export type EmailData = {
    name?: string;
    email: string;
};
export type Personalization = {
    to: EmailData[];
    from?: EmailData;
    cc?: EmailData | EmailData[];
    bcc?: EmailData | EmailData[];
    subject?: string;
    headers?: Record<string, string>;
    substitutions?: Record<string, string>;
    dynamic_template_data?: Record<string, unknown>;
    custom_args?: Record<string, string>;
    sendAt?: number;
};
export type Content = {
    type: ContextType;
    value: string;
};
export type Attachment = {
    content: string;
    type: ContextType;
    filename: string;
    disposition: 'inline' | 'attachment';
    content_id: string;
};
export type Asm = {
    group_id: number;
    groups_to_display?: number[];
};
export type MailSettings = {
    bypass_list_management: {
        enable: boolean;
    };
    bypass_spam_management: {
        enable: boolean;
    };
    bypass_bounce_management: {
        enable: boolean;
    };
    bypass_unsubscribe_management: {
        enable: boolean;
    };
    footer: {
        enable: boolean;
        text: string;
        html: string;
    };
    sandbox_mode: {
        enable: boolean;
    };
};
export type TrackingSettings = {
    click_tracking: {
        enable: boolean;
        enable_test: boolean;
    };
    open_tracking: {
        enable: boolean;
        substitution_tag: string;
    };
    subscription_tracking: {
        enable: boolean;
        test: string;
        html: string;
        substitution_tag: string;
    };
    ganalytics: {
        enable: boolean;
        utm_source: string;
        utm_medium: string;
        utm_campaign: string;
        utm_term: string;
        utm_content: string;
    };
};
export type PublicParameters = {
    personalizations: Personalization[];
    from: EmailData;
    reply_to?: EmailData;
    reply_to_list?: EmailData[];
    subject: string;
    content: Content[];
    attachments?: Attachment[];
    template_id?: string;
    headers?: Record<string, string>;
    categories?: string[];
    custom_args?: string;
    send_at?: number;
    batch_id?: string;
    asm?: Asm;
    ip_pool_name?: string;
    mail_settings?: MailSettings;
    tracking_settings?: TrackingSettings;
};
export declare const sendGridMailConfigGuard: z.ZodObject<{
    apiKey: z.ZodString;
    fromEmail: z.ZodString;
    fromName: z.ZodOptional<z.ZodString>;
    templates: z.ZodEffects<z.ZodArray<z.ZodObject<{
        usageType: z.ZodString;
        type: z.ZodNativeEnum<typeof ContextType>;
        subject: z.ZodString;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        usageType: string;
        type: ContextType;
        subject: string;
        content: string;
    }, {
        usageType: string;
        type: ContextType;
        subject: string;
        content: string;
    }>, "many">, {
        usageType: string;
        type: ContextType;
        subject: string;
        content: string;
    }[], {
        usageType: string;
        type: ContextType;
        subject: string;
        content: string;
    }[]>;
}, "strip", z.ZodTypeAny, {
    fromName?: string | undefined;
    apiKey: string;
    fromEmail: string;
    templates: {
        usageType: string;
        type: ContextType;
        subject: string;
        content: string;
    }[];
}, {
    fromName?: string | undefined;
    apiKey: string;
    fromEmail: string;
    templates: {
        usageType: string;
        type: ContextType;
        subject: string;
        content: string;
    }[];
}>;
export type SendGridMailConfig = z.infer<typeof sendGridMailConfigGuard>;
export declare const sendEmailErrorResponseGuard: z.ZodObject<{
    errors: z.ZodArray<z.ZodObject<{
        message: z.ZodString;
        field: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        help: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    }, "strip", z.ZodTypeAny, {
        field?: string | null | undefined;
        help?: Record<string, unknown> | undefined;
        message: string;
    }, {
        field?: string | null | undefined;
        help?: Record<string, unknown> | undefined;
        message: string;
    }>, "many">;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    errors: {
        field?: string | null | undefined;
        help?: Record<string, unknown> | undefined;
        message: string;
    }[];
}, {
    id?: string | undefined;
    errors: {
        field?: string | null | undefined;
        help?: Record<string, unknown> | undefined;
        message: string;
    }[];
}>;
export type SendEmailErrorResponse = z.infer<typeof sendEmailErrorResponseGuard>;
