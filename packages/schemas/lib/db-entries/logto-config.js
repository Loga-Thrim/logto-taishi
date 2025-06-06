// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import { z } from 'zod';
import { jsonObjectGuard } from './../foundations/index.js';
const createGuard = z.object({
    tenantId: z.string().max(21).optional(),
    key: z.string().min(1).max(256),
    value: jsonObjectGuard.optional(),
});
const guard = z.object({
    tenantId: z.string().max(21),
    key: z.string().min(1).max(256),
    value: jsonObjectGuard,
});
export const LogtoConfigs = Object.freeze({
    table: 'logto_configs',
    tableSingular: 'logto_config',
    fields: {
        tenantId: 'tenant_id',
        key: 'key',
        value: 'value',
    },
    fieldKeys: [
        'tenantId',
        'key',
        'value',
    ],
    createGuard,
    guard,
});
