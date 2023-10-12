import { z } from 'zod';
declare const templateGuard: z.ZodObject<{
    usageType: z.ZodString;
    subject: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    usageType: string;
    subject: string;
    content: string;
}, {
    usageType: string;
    subject: string;
    content: string;
}>;
export type Template = z.infer<typeof templateGuard>;
export declare const awsSesConfigGuard: z.ZodObject<{
    accessKeyId: z.ZodString;
    accessKeySecret: z.ZodString;
    region: z.ZodString;
    emailAddress: z.ZodOptional<z.ZodString>;
    emailAddressIdentityArn: z.ZodOptional<z.ZodString>;
    templates: z.ZodEffects<z.ZodArray<z.ZodObject<{
        usageType: z.ZodString;
        subject: z.ZodString;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        usageType: string;
        subject: string;
        content: string;
    }, {
        usageType: string;
        subject: string;
        content: string;
    }>, "many">, {
        usageType: string;
        subject: string;
        content: string;
    }[], {
        usageType: string;
        subject: string;
        content: string;
    }[]>;
    feedbackForwardingEmailAddress: z.ZodOptional<z.ZodString>;
    feedbackForwardingEmailAddressIdentityArn: z.ZodOptional<z.ZodString>;
    configurationSetName: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    emailAddress?: string | undefined;
    emailAddressIdentityArn?: string | undefined;
    feedbackForwardingEmailAddress?: string | undefined;
    feedbackForwardingEmailAddressIdentityArn?: string | undefined;
    configurationSetName?: string | undefined;
    accessKeyId: string;
    accessKeySecret: string;
    region: string;
    templates: {
        usageType: string;
        subject: string;
        content: string;
    }[];
}, {
    emailAddress?: string | undefined;
    emailAddressIdentityArn?: string | undefined;
    feedbackForwardingEmailAddress?: string | undefined;
    feedbackForwardingEmailAddressIdentityArn?: string | undefined;
    configurationSetName?: string | undefined;
    accessKeyId: string;
    accessKeySecret: string;
    region: string;
    templates: {
        usageType: string;
        subject: string;
        content: string;
    }[];
}>;
export type AwsSesConfig = z.infer<typeof awsSesConfigGuard>;
export type Payload = {
    code: string | number;
};
export {};
