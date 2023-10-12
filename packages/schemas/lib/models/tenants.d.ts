import type { InferModelType } from '@withtyped/server/model';
import { z } from 'zod';
export declare enum TenantTag {
    Development = "development",
    Staging = "staging",
    Production = "production"
}
export declare const Tenants: import("@withtyped/server/model").default<"tenants", {
    id: string;
    dbUser: string | null;
    dbUserPassword: string | null;
    name: string;
    tag: TenantTag;
    createdAt: Date;
    isSuspended: boolean;
}, "createdAt" | "name" | "isSuspended" | "tag", "createdAt">;
export type TenantModel = InferModelType<typeof Tenants>;
export declare const tenantInfoGuard: z.ZodObject<z.extendShape<Pick<{
    id: z.ZodType<string, z.ZodTypeDef, string>;
    dbUser: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    dbUserPassword: z.ZodType<string | null, z.ZodTypeDef, string | null>;
    name: z.ZodType<string, z.ZodTypeDef, string>;
    tag: z.ZodType<TenantTag, z.ZodTypeDef, TenantTag>;
    createdAt: z.ZodType<Date, z.ZodTypeDef, Date>;
    isSuspended: z.ZodType<boolean, z.ZodTypeDef, boolean>;
}, "id" | "name" | "isSuspended" | "tag">, {
    indicator: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    indicator: string;
    isSuspended: boolean;
    tag: TenantTag;
}, {
    id: string;
    name: string;
    indicator: string;
    isSuspended: boolean;
    tag: TenantTag;
}>;
export type TenantInfo = z.infer<typeof tenantInfoGuard>;
