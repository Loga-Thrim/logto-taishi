import { inSeconds } from './date.js';
export const tenantIdKey = 'tenant_id';
export const customClientMetadataDefault = Object.freeze({
    idTokenTtl: inSeconds.oneHour,
    refreshTokenTtlInDays: 14,
    rotateRefreshToken: true,
});
