import { Domains } from '../db-entries/index.js';
export const domainSelectFields = Object.freeze([
    'id',
    'domain',
    'status',
    'errorMessage',
    'dnsRecords',
]);
export const domainResponseGuard = Domains.guard.pick({
    id: true,
    domain: true,
    status: true,
    errorMessage: true,
    dnsRecords: true,
});
