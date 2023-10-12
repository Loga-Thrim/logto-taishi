import { Resources, Scopes } from '../db-entries/index.js';
export const scopeResponseGuard = Scopes.guard.extend({
    resource: Resources.guard,
});
