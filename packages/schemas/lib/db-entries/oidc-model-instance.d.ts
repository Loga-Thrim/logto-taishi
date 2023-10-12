import { OidcModelInstancePayload, GeneratedSchema } from './../foundations/index.js';
export type CreateOidcModelInstance = {
    tenantId?: string;
    modelName: string;
    id: string;
    payload: OidcModelInstancePayload;
    expiresAt: number;
    consumedAt?: number | null;
};
export type OidcModelInstance = {
    tenantId: string;
    modelName: string;
    id: string;
    payload: OidcModelInstancePayload;
    expiresAt: number;
    consumedAt: number | null;
};
export declare const OidcModelInstances: GeneratedSchema<CreateOidcModelInstance, OidcModelInstance>;
