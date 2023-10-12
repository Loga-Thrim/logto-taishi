import { HookEvent, HookEvents, HookConfig, GeneratedSchema } from './../foundations/index.js';
export type CreateHook = {
    tenantId?: string;
    id: string;
    name?: string;
    event?: HookEvent | null;
    events?: HookEvents;
    config: HookConfig;
    signingKey?: string;
    enabled?: boolean;
    createdAt?: number;
};
export type Hook = {
    tenantId: string;
    id: string;
    name: string;
    event: HookEvent | null;
    events: HookEvents;
    config: HookConfig;
    signingKey: string;
    enabled: boolean;
    createdAt: number;
};
export declare const Hooks: GeneratedSchema<CreateHook, Hook>;
