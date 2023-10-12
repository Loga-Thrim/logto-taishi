import { type Page } from 'puppeteer';
export declare const createM2mRoleAndAssignPermissions: (page: Page, { roleName, roleDescription }: {
    roleName: string;
    roleDescription: string;
}, apiResources: Array<{
    apiResourceName: string;
    permissionName: string;
}>) => Promise<void>;
