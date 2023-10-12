import { z } from 'zod';
import { type Application, type User } from '../db-entries/index.js';
import { type HookEvent } from '../foundations/index.js';
import type { userInfoSelectFields } from './user.js';
export type HookEventPayload = {
    hookId: string;
    event: HookEvent;
    createdAt: string;
    sessionId?: string;
    userAgent?: string;
    userId?: string;
    user?: Pick<User, (typeof userInfoSelectFields)[number]>;
    application?: Pick<Application, 'id' | 'type' | 'name' | 'description'>;
} & Record<string, unknown>;
declare const hookExecutionStatsGuard: z.ZodObject<{
    successCount: z.ZodNumber;
    requestCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    successCount: number;
    requestCount: number;
}, {
    successCount: number;
    requestCount: number;
}>;
export type HookExecutionStats = z.infer<typeof hookExecutionStatsGuard>;
export declare const hookResponseGuard: z.ZodObject<z.extendShape<{
    tenantId: z.ZodType<string, z.ZodTypeDef, string>;
    id: z.ZodType<string, z.ZodTypeDef, string>;
    name: z.ZodType<string, z.ZodTypeDef, string>;
    event: z.ZodType<HookEvent | null, z.ZodTypeDef, HookEvent | null>;
    events: z.ZodType<HookEvent[], z.ZodTypeDef, HookEvent[]>;
    config: z.ZodType<{
        headers?: Record<string, string> | undefined;
        retries?: number | undefined;
        url: string;
    }, z.ZodTypeDef, {
        headers?: Record<string, string> | undefined;
        retries?: number | undefined;
        url: string;
    }>;
    signingKey: z.ZodType<string, z.ZodTypeDef, string>;
    enabled: z.ZodType<boolean, z.ZodTypeDef, boolean>;
    createdAt: z.ZodType<number, z.ZodTypeDef, number>;
}, {
    executionStats: z.ZodObject<{
        successCount: z.ZodNumber;
        requestCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        successCount: number;
        requestCount: number;
    }, {
        successCount: number;
        requestCount: number;
    }>;
}>, "strip", z.ZodTypeAny, {
    tenantId: string;
    id: string;
    createdAt: number;
    name: string;
    config: {
        headers?: Record<string, string> | undefined;
        retries?: number | undefined;
        url: string;
    };
    event: HookEvent | null;
    events: HookEvent[];
    signingKey: string;
    enabled: boolean;
    executionStats: {
        successCount: number;
        requestCount: number;
    };
}, {
    tenantId: string;
    id: string;
    createdAt: number;
    name: string;
    config: {
        headers?: Record<string, string> | undefined;
        retries?: number | undefined;
        url: string;
    };
    event: HookEvent | null;
    events: HookEvent[];
    signingKey: string;
    enabled: boolean;
    executionStats: {
        successCount: number;
        requestCount: number;
    };
}>;
export type HookResponse = z.infer<typeof hookResponseGuard>;
export declare const hookTestErrorResponseDataGuard: z.ZodObject<{
    responseStatus: z.ZodNumber;
    responseBody: z.ZodString;
}, "strip", z.ZodTypeAny, {
    responseStatus: number;
    responseBody: string;
}, {
    responseStatus: number;
    responseBody: string;
}>;
export type HookTestErrorResponseData = z.infer<typeof hookTestErrorResponseDataGuard>;
export {};
