import type { CreateSignInExperience } from '../db-entries/index.js';
export declare const createDefaultSignInExperience: (forTenantId: string, isCloud: boolean) => Readonly<CreateSignInExperience>;
/** @deprecated Use `createDefaultSignInExperience()` instead. */
export declare const defaultSignInExperience: Readonly<CreateSignInExperience>;
export declare const createAdminTenantSignInExperience: () => Readonly<CreateSignInExperience>;
