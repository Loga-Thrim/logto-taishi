import { z } from 'zod';
export declare enum ContextType {
    Text = "text/plain",
    Html = "text/html"
}
export declare const mockMailConfigGuard: z.ZodObject<{
    apiKey: z.ZodString;
    fromEmail: z.ZodString;
    fromName: z.ZodOptional<z.ZodString>;
    templates: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
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
export type MockMailConfig = z.infer<typeof mockMailConfigGuard>;
