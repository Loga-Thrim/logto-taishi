import { GeneratedSchema } from './../foundations/index.js';
export type CreateScope = {
    tenantId?: string;
    id: string;
    resourceId: string;
    name: string;
    description: string;
    createdAt?: number;
};
export type Scope = {
    tenantId: string;
    id: string;
    resourceId: string;
    name: string;
    description: string;
    createdAt: number;
};
export declare const Scopes: GeneratedSchema<CreateScope, Scope>;
