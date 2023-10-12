import { type RequestListener } from 'node:http';
export declare const createUserByAdmin: (username?: string, password?: string, primaryEmail?: string, primaryPhone?: string, name?: string) => Promise<import("@logto/schemas").User>;
type VerificationCodeRecord = {
    phone?: string;
    address?: string;
    code: string;
    type: string;
};
export declare const readVerificationCode: () => Promise<VerificationCodeRecord>;
export declare const removeVerificationCode: () => Promise<void>;
type ExpectedErrorInfo = {
    code: string;
    statusCode: number;
    messageIncludes?: string;
};
export declare const expectRejects: (promise: Promise<unknown>, expected: ExpectedErrorInfo) => Promise<void>;
export declare const expectRequestError: (error: unknown, expected: ExpectedErrorInfo) => void;
export declare const createMockServer: (port: number, requestListener?: RequestListener) => {
    listen: () => Promise<unknown>;
    close: () => Promise<unknown>;
};
export {};
