import { z } from 'zod';
export declare enum ContextType {
    Text = "text/plain",
    Html = "text/html"
}
export declare const mockMailConfigGuard: z.ZodObject<{
    apiKey: z.ZodOptional<z.ZodString>;
    fromEmail: z.ZodOptional<z.ZodString>;
    fromName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    templates: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    apiKey?: string | undefined;
    fromEmail?: string | undefined;
    fromName?: string | undefined;
    templates?: {
        usageType: string;
        type: ContextType;
        subject: string;
        content: string;
    }[] | undefined;
}, {
    apiKey?: string | undefined;
    fromEmail?: string | undefined;
    fromName?: string | undefined;
    templates?: {
        usageType: string;
        type: ContextType;
        subject: string;
        content: string;
    }[] | undefined;
}>;
export type MockMailConfig = z.infer<typeof mockMailConfigGuard>;
