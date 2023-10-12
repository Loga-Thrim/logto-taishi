import type { HookEvent } from '../../foundations/index.js';
/** The type of a hook event. */
export declare enum Type {
    TriggerHook = "TriggerHook"
}
export type LogKey = `${Type}.${HookEvent}`;
