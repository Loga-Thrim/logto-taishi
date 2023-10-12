import { DomainStatus, DomainDnsRecords, CloudflareData, GeneratedSchema } from './../foundations/index.js';
export type CreateDomain = {
    tenantId?: string;
    id: string;
    domain: string;
    status?: DomainStatus;
    errorMessage?: string | null;
    dnsRecords?: DomainDnsRecords;
    cloudflareData?: CloudflareData | null;
    updatedAt?: number;
    createdAt?: number;
};
export type Domain = {
    tenantId: string;
    id: string;
    domain: string;
    status: DomainStatus;
    errorMessage: string | null;
    dnsRecords: DomainDnsRecords;
    cloudflareData: CloudflareData | null;
    updatedAt: number;
    createdAt: number;
};
export declare const Domains: GeneratedSchema<CreateDomain, Domain>;
