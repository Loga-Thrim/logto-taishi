import type { AdminConsoleData } from '@logto/schemas';
export declare const getAdminConsoleConfig: () => Promise<{
    signInExperienceCustomized: boolean;
}>;
export declare const updateAdminConsoleConfig: (payload: Partial<AdminConsoleData>) => Promise<{
    signInExperienceCustomized: boolean;
}>;
