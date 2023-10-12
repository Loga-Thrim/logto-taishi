import { type Hook, type HookConfig, type HookEvent } from '@logto/schemas';
type HookCreationPayload = Pick<Hook, 'name' | 'events'> & {
    config: HookConfig;
};
export declare const getHookCreationPayload: (event: HookEvent, url?: string) => HookCreationPayload;
export {};
