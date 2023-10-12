import type { CreateScope, Role } from '../db-entries/index.js';
import type { UpdateAdminData } from './management-api.js';
/** The API Resource Indicator for Logto Cloud. It's only useful when domain-based multi-tenancy is enabled. */
export declare const cloudApiIndicator = "https://cloud.logto.io/api";
export declare enum CloudScope {
    /** The user can create a user tenant. */
    CreateTenant = "create:tenant",
    /** The user can perform arbitrary operations on any tenant. */
    ManageTenant = "manage:tenant",
    /** The user can update or delete its own tenants. */
    ManageTenantSelf = "manage:tenant:self",
    SendSms = "send:sms",
    SendEmail = "send:email",
    /** The user can see and manage affiliates, including create, update, and delete. */
    ManageAffiliate = "manage:affiliate",
    /** The user can create new affiliates and logs. */
    CreateAffiliate = "create:affiliate"
}
export declare const createCloudApi: () => readonly [UpdateAdminData, ...CreateScope[]];
export declare const createTenantApplicationRole: () => Readonly<Role>;
