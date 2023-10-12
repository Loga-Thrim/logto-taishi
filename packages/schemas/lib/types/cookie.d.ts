import { z } from 'zod';
export declare const logtoUiCookieGuard: z.ZodObject<{
    appId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    appId?: string | undefined;
}, {
    appId?: string | undefined;
}>;
export type LogtoUiCookie = z.infer<typeof logtoUiCookieGuard>;
