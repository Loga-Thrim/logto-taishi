import { GeneratedSchema } from './../foundations/index.js';
export type CreateResource = {
    tenantId?: string;
    id: string;
    name: string;
    indicator: string;
    isDefault?: boolean;
    accessTokenTtl?: number;
};
export type Resource = {
    tenantId: string;
    id: string;
    name: string;
    indicator: string;
    isDefault: boolean;
    accessTokenTtl: number;
};
export declare const Resources: GeneratedSchema<CreateResource, Resource>;
