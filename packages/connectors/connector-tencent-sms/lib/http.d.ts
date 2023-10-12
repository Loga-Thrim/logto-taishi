import type { TencentErrorResponse } from './schema.js';
export declare function isSmsErrorResponse(response: unknown): response is TencentErrorResponse;
export declare function sendSmsRequest(templateId: string, templateParameters: string[], phoneNumber: string, config: {
    secretId: string;
    secretKey: string;
    region: string;
    sdkAppId: string;
    signName: string;
}): Promise<any>;
