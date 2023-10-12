import { type z } from 'zod';
export declare const scopeResponseGuard: z.ZodObject<z.extendShape<{
    tenantId: z.ZodType<string, z.ZodTypeDef, string>;
    id: z.ZodType<string, z.ZodTypeDef, string>;
    resourceId: z.ZodType<string, z.ZodTypeDef, string>;
    name: z.ZodType<string, z.ZodTypeDef, string>;
    description: z.ZodType<string, z.ZodTypeDef, string>;
    createdAt: z.ZodType<number, z.ZodTypeDef, number>;
}, {
    resource: import("../index.js").Guard<import("../db-entries/resource.js").Resource>;
}>, "strip", z.ZodTypeAny, {
    tenantId: string;
    id: string;
    createdAt: number;
    name: string;
    description: string;
    resource: {
        tenantId: string;
        id: string;
        name: string;
        indicator: string;
        isDefault: boolean;
        accessTokenTtl: number;
    };
    resourceId: string;
}, {
    tenantId: string;
    id: string;
    createdAt: number;
    name: string;
    description: string;
    resource: {
        tenantId: string;
        id: string;
        name: string;
        indicator: string;
        isDefault: boolean;
        accessTokenTtl: number;
    };
    resourceId: string;
}>;
export type ScopeResponse = z.infer<typeof scopeResponseGuard>;
