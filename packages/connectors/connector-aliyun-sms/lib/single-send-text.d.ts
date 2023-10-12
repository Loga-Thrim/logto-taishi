import type { PublicParameters, SendSms } from './types.js';
/**
 * @doc https://help.aliyun.com/document_detail/101414.html
 */
export declare const sendSms: (parameters: PublicParameters & SendSms, accessKeySecret: string) => Promise<any>;
