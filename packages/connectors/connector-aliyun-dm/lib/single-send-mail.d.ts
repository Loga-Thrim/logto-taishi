import type { PublicParameters, SingleSendMail } from './types.js';
/**
 * @doc https://help.aliyun.com/document_detail/29444.html
 */
export declare const singleSendMail: (parameters: PublicParameters & SingleSendMail, accessKeySecret: string) => Promise<any>;
