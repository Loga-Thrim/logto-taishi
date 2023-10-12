import { conditionalString } from '@silverhand/essentials';
import { authedAdminApi } from './api.js';
export const getAuditLogs = async (params) => authedAdminApi.get('logs?' + conditionalString(params?.toString())).json();
export const getWebhookRecentLogs = async (hookId, params) => authedAdminApi
    .get(`hooks/${hookId}/recent-logs?` + conditionalString(params?.toString()))
    .json();
export const getLog = async (logId) => authedAdminApi.get(`logs/${logId}`).json();
//# sourceMappingURL=logs.js.map