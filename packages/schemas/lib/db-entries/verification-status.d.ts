import { GeneratedSchema } from './../foundations/index.js';
export type CreateVerificationStatus = {
    tenantId?: string;
    id: string;
    userId: string;
    createdAt?: number;
};
export type VerificationStatus = {
    tenantId: string;
    id: string;
    userId: string;
    createdAt: number;
};
export declare const VerificationStatuses: GeneratedSchema<CreateVerificationStatus, VerificationStatus>;
