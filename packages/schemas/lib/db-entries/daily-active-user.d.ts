import { GeneratedSchema } from './../foundations/index.js';
export type CreateDailyActiveUser = {
    id: string;
    tenantId?: string;
    userId: string;
    date: number;
};
export type DailyActiveUser = {
    id: string;
    tenantId: string;
    userId: string;
    date: number;
};
export declare const DailyActiveUsers: GeneratedSchema<CreateDailyActiveUser, DailyActiveUser>;
