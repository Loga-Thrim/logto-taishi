import { z } from 'zod';
export declare const sendEmailResponseGuard: z.ZodObject<{
    EnvId: z.ZodString;
    RequestId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    EnvId: string;
    RequestId: string;
}, {
    EnvId: string;
    RequestId: string;
}>;
export type SendEmailResponse = z.infer<typeof sendEmailResponseGuard>;
export declare const aliyunDmConfigGuard: z.ZodObject<{
    accessKeyId: z.ZodString;
    accessKeySecret: z.ZodString;
    accountName: z.ZodString;
    fromAlias: z.ZodOptional<z.ZodString>;
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
}, "strip", z.ZodTypeAny, {
    fromAlias?: string | undefined;
    accessKeyId: string;
    accessKeySecret: string;
    accountName: string;
    templates: {
        usageType: string;
        subject: string;
        content: string;
    }[];
}, {
    fromAlias?: string | undefined;
    accessKeyId: string;
    accessKeySecret: string;
    accountName: string;
    templates: {
        usageType: string;
        subject: string;
        content: string;
    }[];
}>;
export type AliyunDmConfig = z.infer<typeof aliyunDmConfigGuard>;
/**
 * @doc https://help.aliyun.com/document_detail/29444.html
 */
export type SingleSendMail = {
    AccountName: string;
    AddressType: '0' | '1';
    ClickTrace?: '0' | '1';
    FromAlias?: string;
    HtmlBody?: string;
    ReplyToAddress: 'true' | 'false';
    Subject: string;
    TagName?: string;
    TextBody?: string;
    ToAddress: string;
};
export type PublicParameters = {
    AccessKeyId: string;
    Format?: string;
    RegionId?: string;
    Signature?: string;
    SignatureMethod?: string;
    SignatureNonce?: string;
    SignatureVersion?: string;
    Timestamp?: string;
    Version?: string;
};
/**
 * @doc https://next.api.aliyun.com/troubleshoot
 */
export declare const sendMailErrorResponseGuard: z.ZodObject<{
    Code: z.ZodString;
    Message: z.ZodString;
    RequestId: z.ZodOptional<z.ZodString>;
    HostId: z.ZodOptional<z.ZodString>;
    Recommend: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    RequestId?: string | undefined;
    HostId?: string | undefined;
    Recommend?: string | undefined;
    Code: string;
    Message: string;
}, {
    RequestId?: string | undefined;
    HostId?: string | undefined;
    Recommend?: string | undefined;
    Code: string;
    Message: string;
}>;
export type SendMailErrorResponse = z.infer<typeof sendMailErrorResponseGuard>;
