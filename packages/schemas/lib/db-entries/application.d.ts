import { OidcClientMetadata, CustomClientMetadata, GeneratedSchema } from './../foundations/index.js';
import { ApplicationType } from './custom-types.js';
export type CreateApplication = {
    tenantId?: string;
    id: string;
    name: string;
    secret: string;
    description?: string | null;
    type: ApplicationType;
    oidcClientMetadata: OidcClientMetadata;
    customClientMetadata?: CustomClientMetadata;
    createdAt?: number;
};
export type Application = {
    tenantId: string;
    id: string;
    name: string;
    secret: string;
    description: string | null;
    type: ApplicationType;
    oidcClientMetadata: OidcClientMetadata;
    customClientMetadata: CustomClientMetadata;
    createdAt: number;
};
export declare const Applications: GeneratedSchema<CreateApplication, Application>;
