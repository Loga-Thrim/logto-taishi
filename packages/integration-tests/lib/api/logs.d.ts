import type { Log } from '@logto/schemas';
export declare const getAuditLogs: (params?: URLSearchParams) => Promise<Log[]>;
export declare const getWebhookRecentLogs: (hookId: string, params?: URLSearchParams) => Promise<Log[]>;
export declare const getLog: (logId: string) => Promise<Log>;
