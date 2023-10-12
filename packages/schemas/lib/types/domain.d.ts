import { type z } from 'zod';
export declare const domainSelectFields: readonly ["id", "domain", "status", "errorMessage", "dnsRecords"];
export declare const domainResponseGuard: z.ZodObject<Pick<{
    tenantId: z.ZodType<string, z.ZodTypeDef, string>;
    id: z.ZodType<string, z.ZodTypeDef, string>;
    domain: z.ZodType<string, z.ZodTypeDef, string>;
    status: z.ZodType<import("../index.js").DomainStatus, z.ZodTypeDef, import("../index.js").DomainStatus>;
    errorMessage: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    dnsRecords: z.ZodType<{
        type: string;
        value: string;
        name: string;
    }[], z.ZodTypeDef, {
        type: string;
        value: string;
        name: string;
    }[]>;
    cloudflareData: z.ZodType<{
        [x: string]: unknown;
        verification_errors?: string[] | undefined;
        status: string;
        id: string;
        ssl: {
            [x: string]: unknown;
            validation_errors?: {
                [x: string]: unknown;
                message: string;
            }[] | undefined;
            status: string;
        };
    } | null, z.ZodTypeDef, {
        [x: string]: unknown;
        verification_errors?: string[] | undefined;
        status: string;
        id: string;
        ssl: {
            [x: string]: unknown;
            validation_errors?: {
                [x: string]: unknown;
                message: string;
            }[] | undefined;
            status: string;
        };
    } | null>;
    updatedAt: z.ZodType<number, z.ZodTypeDef, number>;
    createdAt: z.ZodType<number, z.ZodTypeDef, number>;
}, "status" | "id" | "domain" | "errorMessage" | "dnsRecords">, "strip", z.ZodTypeAny, {
    status: import("../index.js").DomainStatus;
    id: string;
    domain: string;
    errorMessage: string | null;
    dnsRecords: {
        type: string;
        value: string;
        name: string;
    }[];
}, {
    status: import("../index.js").DomainStatus;
    id: string;
    domain: string;
    errorMessage: string | null;
    dnsRecords: {
        type: string;
        value: string;
        name: string;
    }[];
}>;
export type DomainResponse = z.infer<typeof domainResponseGuard>;
