import { z } from 'zod';
/**
 * @doc https://smsaero.ru/integration/documentation/api/
 */
export type PublicParameters = {
    number: string;
    sign: string;
    text: string;
};
export declare const smsAeroConfigGuard: z.ZodObject<{
    email: z.ZodString;
    apiKey: z.ZodString;
    senderName: z.ZodString;
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
    email: string;
    apiKey: string;
    senderName: string;
    templates: {
        usageType: string;
        content: string;
    }[];
}, {
    email: string;
    apiKey: string;
    senderName: string;
    templates: {
        usageType: string;
        content: string;
    }[];
}>;
export type SmsAeroConfig = z.infer<typeof smsAeroConfigGuard>;
