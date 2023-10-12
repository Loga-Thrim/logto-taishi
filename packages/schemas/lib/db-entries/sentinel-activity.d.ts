import { SentinelActivityTargetType, SentinelActivityAction, SentinelActivityPayload, GeneratedSchema } from './../foundations/index.js';
import { SentinelActionResult, SentinelDecision } from './custom-types.js';
export type CreateSentinelActivity = {
    tenantId?: string;
    id: string;
    /** The target that the action was performed on. */
    targetType: SentinelActivityTargetType;
    /** The target hashed identifier. */
    targetHash: string;
    /** The action name that was performed. */
    action: SentinelActivityAction;
    /** If the action was successful or not. */
    actionResult: SentinelActionResult;
    /** Additional payload data if any. */
    payload: SentinelActivityPayload;
    /** The sentinel decision for the action. */
    decision: SentinelDecision;
    /** The expiry date of the decision. For instant decisions, this is the date the activity was created. */
    decisionExpiresAt?: number;
    /** The time the activity was created. */
    createdAt?: number;
};
export type SentinelActivity = {
    tenantId: string;
    id: string;
    /** The target that the action was performed on. */
    targetType: SentinelActivityTargetType;
    /** The target hashed identifier. */
    targetHash: string;
    /** The action name that was performed. */
    action: SentinelActivityAction;
    /** If the action was successful or not. */
    actionResult: SentinelActionResult;
    /** Additional payload data if any. */
    payload: SentinelActivityPayload;
    /** The sentinel decision for the action. */
    decision: SentinelDecision;
    /** The expiry date of the decision. For instant decisions, this is the date the activity was created. */
    decisionExpiresAt: number;
    /** The time the activity was created. */
    createdAt: number;
};
export declare const SentinelActivities: GeneratedSchema<CreateSentinelActivity, SentinelActivity>;
