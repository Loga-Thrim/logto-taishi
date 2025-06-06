import type * as hook from './hook.js';
import type * as interaction from './interaction.js';
import type * as token from './token.js';
export * as interaction from './interaction.js';
export * as token from './token.js';
export * as hook from './hook.js';
/** Fallback for empty or unrecognized log keys. */
export declare const LogKeyUnknown = "Unknown";
export type AuditLogKey = typeof LogKeyUnknown | interaction.LogKey | token.LogKey;
export type WebhookLogKey = hook.LogKey;
/**
 * The union type of all available log keys.
 * Note duplicate keys are allowed but should be avoided.
 *
 * @see {@link interaction.LogKey} for interaction log keys.
 * @see {@link token.LogKey} for token log keys.
 **/
export type LogKey = AuditLogKey | WebhookLogKey;
