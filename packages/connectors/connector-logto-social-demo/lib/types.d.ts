import { z } from 'zod';
export declare enum SocialProvider {
    Google = "google",
    GitHub = "github",
    Discord = "discord"
}
export declare const socialDemoConfigGuard: z.ZodObject<{
    provider: z.ZodNativeEnum<typeof SocialProvider>;
    clientId: z.ZodString;
    redirectUri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    provider: SocialProvider;
    clientId: string;
    redirectUri: string;
}, {
    provider: SocialProvider;
    clientId: string;
    redirectUri: string;
}>;
export type SocialDemoConfig = z.infer<typeof socialDemoConfigGuard>;
