import { LogContextPayload, GeneratedSchema } from './../foundations/index.js';
export type CreateLog = {
    tenantId?: string;
    id: string;
    key: string;
    payload?: LogContextPayload;
    createdAt?: number;
};
export type Log = {
    tenantId: string;
    id: string;
    key: string;
    payload: LogContextPayload;
    createdAt: number;
};
export declare const Logs: GeneratedSchema<CreateLog, Log>;
