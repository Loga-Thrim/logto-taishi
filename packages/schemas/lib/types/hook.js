import { z } from 'zod';
import { Hooks } from '../db-entries/index.js';
const hookExecutionStatsGuard = z.object({
    successCount: z.number(),
    requestCount: z.number(),
});
export const hookResponseGuard = Hooks.guard.extend({
    executionStats: hookExecutionStatsGuard,
});
export const hookTestErrorResponseDataGuard = z.object({
    responseStatus: z.number(),
    responseBody: z.string(),
});
