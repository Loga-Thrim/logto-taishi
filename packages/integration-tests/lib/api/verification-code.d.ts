import type { VerifyVerificationCodePayload } from '@logto/schemas';
export declare const requestVerificationCode: (payload: unknown) => Promise<import("got").Response<string>>;
export declare const verifyVerificationCode: (payload: VerifyVerificationCodePayload) => Promise<import("got").Response<string>>;
