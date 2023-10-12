import { z } from 'zod';
export declare const SingleSmsConfig: z.ZodObject<{
    usageType: z.ZodString;
    templateCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    usageType: string;
    templateCode: string;
}, {
    usageType: string;
    templateCode: string;
}>;
export declare const SmsConfigGuard: z.ZodObject<{
    accessKeyId: z.ZodString;
    accessKeySecret: z.ZodString;
    signName: z.ZodString;
    sdkAppId: z.ZodString;
    region: z.ZodString;
    templates: z.ZodEffects<z.ZodArray<z.ZodObject<{
        usageType: z.ZodString;
        templateCode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        usageType: string;
        templateCode: string;
    }, {
        usageType: string;
        templateCode: string;
    }>, "many">, {
        usageType: string;
        templateCode: string;
    }[], {
        usageType: string;
        templateCode: string;
    }[]>;
}, "strip", z.ZodTypeAny, {
    accessKeyId: string;
    accessKeySecret: string;
    signName: string;
    sdkAppId: string;
    region: string;
    templates: {
        usageType: string;
        templateCode: string;
    }[];
}, {
    accessKeyId: string;
    accessKeySecret: string;
    signName: string;
    sdkAppId: string;
    region: string;
    templates: {
        usageType: string;
        templateCode: string;
    }[];
}>;
export type TencentSmsConfig = z.infer<typeof SmsConfigGuard>;
export declare const tencentErrorResponse: z.ZodObject<{
    Response: z.ZodObject<{
        Error: z.ZodObject<{
            Code: z.ZodString;
            Message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            Code: string;
            Message: string;
        }, {
            Code: string;
            Message: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        Error: {
            Code: string;
            Message: string;
        };
    }, {
        Error: {
            Code: string;
            Message: string;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    Response: {
        Error: {
            Code: string;
            Message: string;
        };
    };
}, {
    Response: {
        Error: {
            Code: string;
            Message: string;
        };
    };
}>;
export declare type TencentErrorResponse = z.infer<typeof tencentErrorResponse>;
export declare const SendStatusSetItem: z.ZodObject<{
    SerialNo: z.ZodString;
    PhoneNumber: z.ZodString;
    Fee: z.ZodNumber;
    SessionContext: z.ZodString;
    Code: z.ZodString;
    Message: z.ZodString;
    IsoCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    Code: string;
    Message: string;
    SerialNo: string;
    PhoneNumber: string;
    Fee: number;
    SessionContext: string;
    IsoCode: string;
}, {
    Code: string;
    Message: string;
    SerialNo: string;
    PhoneNumber: string;
    Fee: number;
    SessionContext: string;
    IsoCode: string;
}>;
export declare const tencentSuccessResponse: z.ZodObject<{
    Response: z.ZodObject<{
        SendStatusSet: z.ZodArray<z.ZodObject<{
            SerialNo: z.ZodString;
            PhoneNumber: z.ZodString;
            Fee: z.ZodNumber;
            SessionContext: z.ZodString;
            Code: z.ZodString;
            Message: z.ZodString;
            IsoCode: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            Code: string;
            Message: string;
            SerialNo: string;
            PhoneNumber: string;
            Fee: number;
            SessionContext: string;
            IsoCode: string;
        }, {
            Code: string;
            Message: string;
            SerialNo: string;
            PhoneNumber: string;
            Fee: number;
            SessionContext: string;
            IsoCode: string;
        }>, "many">;
        RequestId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        SendStatusSet: {
            Code: string;
            Message: string;
            SerialNo: string;
            PhoneNumber: string;
            Fee: number;
            SessionContext: string;
            IsoCode: string;
        }[];
        RequestId: string;
    }, {
        SendStatusSet: {
            Code: string;
            Message: string;
            SerialNo: string;
            PhoneNumber: string;
            Fee: number;
            SessionContext: string;
            IsoCode: string;
        }[];
        RequestId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    Response: {
        SendStatusSet: {
            Code: string;
            Message: string;
            SerialNo: string;
            PhoneNumber: string;
            Fee: number;
            SessionContext: string;
            IsoCode: string;
        }[];
        RequestId: string;
    };
}, {
    Response: {
        SendStatusSet: {
            Code: string;
            Message: string;
            SerialNo: string;
            PhoneNumber: string;
            Fee: number;
            SessionContext: string;
            IsoCode: string;
        }[];
        RequestId: string;
    };
}>;
export declare type TencentSuccessResponse = z.infer<typeof tencentSuccessResponse>;
