import { z } from 'zod';
export declare const appleConfigGuard: z.ZodObject<{
    clientId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    clientId: string;
}, {
    clientId: string;
}>;
export type AppleConfig = z.infer<typeof appleConfigGuard>;
export declare const dataGuard: z.ZodObject<{
    id_token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id_token: string;
}, {
    id_token: string;
}>;
