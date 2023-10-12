import type { ConnectorMetadata } from '@logto/connector-kit';
export declare const endpoint = "https://dysmsapi.aliyuncs.com/";
export declare const staticConfigs: {
    Format: string;
    RegionId: string;
    SignatureMethod: string;
    SignatureVersion: string;
    Version: string;
};
/**
 * Details of SmsTemplateType can be found at:
 * https://next.api.aliyun.com/document/Dysmsapi/2017-05-25/QuerySmsTemplateList.
 *
 * In our use case, it is to send verification code SMS for passwordless sign-in/up as well as
 * reset password. The default value of type code is set to 2.
 */
export declare enum SmsTemplateType {
    Notification = 0,
    Promotion = 1,
    VerificationCode = 2,
    InternationalMessage = 6,
    PureNumber = 7
}
export declare const defaultMetadata: ConnectorMetadata;
