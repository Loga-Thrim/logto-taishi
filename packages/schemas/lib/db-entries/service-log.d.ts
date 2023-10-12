import { JsonObject, GeneratedSchema } from './../foundations/index.js';
export type CreateServiceLog = {
    id: string;
    tenantId?: string;
    type: string;
    payload?: JsonObject;
    createdAt?: number;
};
export type ServiceLog = {
    id: string;
    tenantId: string;
    type: string;
    payload: JsonObject;
    createdAt: number;
};
export declare const ServiceLogs: GeneratedSchema<CreateServiceLog, ServiceLog>;
