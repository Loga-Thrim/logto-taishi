import { z } from 'zod';
export declare const mockSmsConfigGuard: z.ZodObject<{
    accountSID: z.ZodString;
    authToken: z.ZodString;
    fromMessagingServiceSID: z.ZodString;
    templates: z.ZodArray<z.ZodObject<{
        usageType: z.ZodString;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        usageType: string;
        content: string;
    }, {
        usageType: string;
        content: string;
    }>, "many">;
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
export type MockSmsConfig = z.infer<typeof mockSmsConfigGuard>;
