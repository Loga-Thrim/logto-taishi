import type { Application, CreateApplication, CreateApplicationsRole } from '../db-entries/index.js';
/**
 * The fixed application ID for Admin Console.
 *
 * This built-in application does not belong to any tenant in the OSS version.
 */
export declare const adminConsoleApplicationId = "admin-console";
export declare const demoAppApplicationId = "demo-app";
export declare const buildDemoAppDataForTenant: (tenantId: string) => Application;
export declare const createDefaultAdminConsoleApplication: () => Readonly<CreateApplication>;
export declare const createTenantMachineToMachineApplication: (tenantId: string) => Readonly<CreateApplication>;
/** Create role for "tenant application (M2M)" in admin tenant */
export declare const createAdminTenantApplicationRole: (applicationId: string, roleId: string) => Readonly<CreateApplicationsRole>;
