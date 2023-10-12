export type StatisticsData = {
    count: number;
    delta: number;
};
export type TotalUserCountData = {
    totalUserCount: number;
};
export type NewUserStatistics = {
    today: StatisticsData;
    last7Days: StatisticsData;
};
export type ActiveUserStatistics = {
    dauCurve: StatisticsData[];
    dau: StatisticsData;
    wau: StatisticsData;
    mau: StatisticsData;
};
export declare const getTotalUsersCount: () => Promise<TotalUserCountData>;
export declare const getNewUsersData: () => Promise<NewUserStatistics>;
export declare const getActiveUsersData: () => Promise<ActiveUserStatistics>;
