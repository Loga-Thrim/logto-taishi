import type { CommonQueryMethods } from 'slonik';
/**
 * Append Redirect URIs for the default tenant callback in cloud Admin Console.
 * It reads the same env variables as core to construct the cloud `UrlSet`.
 *
 * E.g., by default, it will appends `http://localhost:3003/default/callback` to the Redirect URIs.
 *
 * For why it is necessary, see the redirect lifecycle of cloud Admin Console.
 */
export declare const appendAdminConsoleRedirectUris: (pool: CommonQueryMethods) => Promise<void>;
/**
 * Create Cloud Service M2M application for the tenant.
 *
 * This is a built-in M2M application for the tenant to communicate with the cloud service.
 * - default
 * - admin
 */
export declare const seedTenantCloudServiceApplication: (pool: CommonQueryMethods, tenantId: string) => Promise<void>;
