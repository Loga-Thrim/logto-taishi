import { GeneratedSchema } from './../foundations/index.js';
export type CreateRolesScope = {
    tenantId?: string;
    id: string;
    roleId: string;
    scopeId: string;
};
export type RolesScope = {
    tenantId: string;
    id: string;
    roleId: string;
    scopeId: string;
};
export declare const RolesScopes: GeneratedSchema<CreateRolesScope, RolesScope>;
