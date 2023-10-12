import { JsonObject, GeneratedSchema } from './../foundations/index.js';
export type CreateLogtoConfig = {
    tenantId?: string;
    key: string;
    value?: JsonObject;
};
export type LogtoConfig = {
    tenantId: string;
    key: string;
    value: JsonObject;
};
export declare const LogtoConfigs: GeneratedSchema<CreateLogtoConfig, LogtoConfig>;
