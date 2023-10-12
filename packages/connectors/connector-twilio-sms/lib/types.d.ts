import type { Nullable } from '@silverhand/essentials';
import { z } from 'zod';
/**
 * @doc https://www.twilio.com/docs/sms/send-messages
 *
 * @doc https://www.twilio.com/docs/phone-numbers
 * @doc https://www.twilio.com/phone-numbers/global-catalog
 * @doc https://en.wikipedia.org/wiki/E.164
 */
export type PublicParameters = {
    To: string;
    MessagingServiceSid: string;
    Body: string;
};
export declare const twilioSmsConfigGuard: z.ZodObject<{
    accountSID: z.ZodString;
    authToken: z.ZodString;
    fromMessagingServiceSID: z.ZodString;
    templates: z.ZodEffects<z.ZodArray<z.ZodObject<{
        usageType: z.ZodString;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        usageType: string;
        content: string;
    }, {
        usageType: string;
        content: string;
    }>, "many">, {
        usageType: string;
        content: string;
    }[], {
        usageType: string;
        content: string;
    }[]>;
}, "strip", z.ZodTypeAny, {
    accountSID: string;
    authToken: string;
    fromMessagingServiceSID: string;
    templates: {
        usageType: string;
        content: string;
    }[];
}, {
    accountSID: string;
    authToken: string;
    fromMessagingServiceSID: string;
    templates: {
        usageType: string;
        content: string;
    }[];
}>;
export type TwilioSmsConfig = z.infer<typeof twilioSmsConfigGuard>;
export type SendSmsResponse = {
    account_sid: string;
    api_version: string;
    body: string;
    code: number;
    date_cereated: Nullable<string>;
    date_sent: Nullable<string>;
    date_updated: Nullable<string>;
    direction: string;
    error_code: Nullable<string>;
    error_message: Nullable<string>;
    from: Nullable<string>;
    message: Nullable<string>;
    messaging_service_sid: string;
    more_info: Nullable<string>;
    num_media: string;
    num_segments: string;
    price: Nullable<string>;
    price_unit: Nullable<string>;
    sid: string;
    status: number;
    subresource_uris: {
        media?: string;
        feedback?: string;
    };
    to: string;
    uri: string;
};
export declare const sendSmsErrorResponseGuard: z.ZodObject<{
    status: z.ZodNumber;
    message: z.ZodString;
    code: z.ZodOptional<z.ZodNumber>;
    more_info: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    code?: number | undefined;
    more_info?: string | undefined;
    message: string;
    status: number;
}, {
    code?: number | undefined;
    more_info?: string | undefined;
    message: string;
    status: number;
}>;
export type SendSmsErrorResponse = z.infer<typeof sendSmsErrorResponseGuard>;
