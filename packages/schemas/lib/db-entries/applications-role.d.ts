import { GeneratedSchema } from './../foundations/index.js';
export type CreateApplicationsRole = {
    tenantId?: string;
    id: string;
    applicationId: string;
    roleId: string;
};
export type ApplicationsRole = {
    tenantId: string;
    id: string;
    applicationId: string;
    roleId: string;
};
export declare const ApplicationsRoles: GeneratedSchema<CreateApplicationsRole, ApplicationsRole>;
