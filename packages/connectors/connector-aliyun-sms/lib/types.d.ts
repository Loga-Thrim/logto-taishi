import { z } from 'zod';
import { SmsTemplateType } from './constant.js';
export declare const sendSmsResponseGuard: z.ZodObject<{
    BizId: z.ZodOptional<z.ZodString>;
    Code: z.ZodString;
    Message: z.ZodString;
    RequestId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    BizId?: string | undefined;
    Code: string;
    Message: string;
    RequestId: string;
}, {
    BizId?: string | undefined;
    Code: string;
    Message: string;
    RequestId: string;
}>;
export type SendSmsResponse = z.infer<typeof sendSmsResponseGuard>;
/**
 * @doc https://help.aliyun.com/document_detail/101414.html
 */
export type SendSms = {
    OutId?: string;
    PhoneNumbers: string;
    SignName: string;
    SmsUpExtendCode?: string;
    TemplateCode: string;
    TemplateParam?: string;
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
export declare const templateGuard: z.ZodObject<{
    type: z.ZodDefault<z.ZodNativeEnum<typeof SmsTemplateType>>;
    usageType: z.ZodString;
    templateCode: z.ZodUnion<[z.ZodString, z.ZodObject<{
        china: z.ZodString;
        overseas: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        china: string;
        overseas: string;
    }, {
        china: string;
        overseas: string;
    }>]>;
}, "strip", z.ZodTypeAny, {
    type: SmsTemplateType;
    usageType: string;
    templateCode: string | {
        china: string;
        overseas: string;
    };
}, {
    type?: SmsTemplateType | undefined;
    usageType: string;
    templateCode: string | {
        china: string;
        overseas: string;
    };
}>;
export type Template = z.infer<typeof templateGuard>;
export declare const aliyunSmsConfigGuard: z.ZodObject<{
    accessKeyId: z.ZodString;
    accessKeySecret: z.ZodString;
    signName: z.ZodString;
    templates: z.ZodEffects<z.ZodArray<z.ZodObject<{
        type: z.ZodDefault<z.ZodNativeEnum<typeof SmsTemplateType>>;
        usageType: z.ZodString;
        templateCode: z.ZodUnion<[z.ZodString, z.ZodObject<{
            china: z.ZodString;
            overseas: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            china: string;
            overseas: string;
        }, {
            china: string;
            overseas: string;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        type: SmsTemplateType;
        usageType: string;
        templateCode: string | {
            china: string;
            overseas: string;
        };
    }, {
        type?: SmsTemplateType | undefined;
        usageType: string;
        templateCode: string | {
            china: string;
            overseas: string;
        };
    }>, "many">, {
        type: SmsTemplateType;
        usageType: string;
        templateCode: string | {
            china: string;
            overseas: string;
        };
    }[], {
        type?: SmsTemplateType | undefined;
        usageType: string;
        templateCode: string | {
            china: string;
            overseas: string;
        };
    }[]>;
}, "strip", z.ZodTypeAny, {
    accessKeyId: string;
    accessKeySecret: string;
    signName: string;
    templates: {
        type: SmsTemplateType;
        usageType: string;
        templateCode: string | {
            china: string;
            overseas: string;
        };
    }[];
}, {
    accessKeyId: string;
    accessKeySecret: string;
    signName: string;
    templates: {
        type?: SmsTemplateType | undefined;
        usageType: string;
        templateCode: string | {
            china: string;
            overseas: string;
        };
    }[];
}>;
export type AliyunSmsConfig = z.infer<typeof aliyunSmsConfigGuard>;
