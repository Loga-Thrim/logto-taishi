export declare const getNewUsersResponseGuard: import("zod").ZodObject<{
    today: import("zod").ZodObject<{
        count: import("zod").ZodNumber;
        delta: import("zod").ZodNumber;
    }, "strip", import("zod").ZodTypeAny, {
        count: number;
        delta: number;
    }, {
        count: number;
        delta: number;
    }>;
    last7Days: import("zod").ZodObject<{
        count: import("zod").ZodNumber;
        delta: import("zod").ZodNumber;
    }, "strip", import("zod").ZodTypeAny, {
        count: number;
        delta: number;
    }, {
        count: number;
        delta: number;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    today: {
        count: number;
        delta: number;
    };
    last7Days: {
        count: number;
        delta: number;
    };
}, {
    today: {
        count: number;
        delta: number;
    };
    last7Days: {
        count: number;
        delta: number;
    };
}>;
export declare const getActiveUsersResponseGuard: import("zod").ZodObject<{
    dauCurve: import("zod").ZodArray<import("zod").ZodObject<{
        date: import("zod").ZodString;
        count: import("zod").ZodNumber;
    }, "strip", import("zod").ZodTypeAny, {
        date: string;
        count: number;
    }, {
        date: string;
        count: number;
    }>, "many">;
    dau: import("zod").ZodObject<{
        count: import("zod").ZodNumber;
        delta: import("zod").ZodNumber;
    }, "strip", import("zod").ZodTypeAny, {
        count: number;
        delta: number;
    }, {
        count: number;
        delta: number;
    }>;
    wau: import("zod").ZodObject<{
        count: import("zod").ZodNumber;
        delta: import("zod").ZodNumber;
    }, "strip", import("zod").ZodTypeAny, {
        count: number;
        delta: number;
    }, {
        count: number;
        delta: number;
    }>;
    mau: import("zod").ZodObject<{
        count: import("zod").ZodNumber;
        delta: import("zod").ZodNumber;
    }, "strip", import("zod").ZodTypeAny, {
        count: number;
        delta: number;
    }, {
        count: number;
        delta: number;
    }>;
}, "strip", import("zod").ZodTypeAny, {
    dauCurve: {
        date: string;
        count: number;
    }[];
    dau: {
        count: number;
        delta: number;
    };
    wau: {
        count: number;
        delta: number;
    };
    mau: {
        count: number;
        delta: number;
    };
}, {
    dauCurve: {
        date: string;
        count: number;
    }[];
    dau: {
        count: number;
        delta: number;
    };
    wau: {
        count: number;
        delta: number;
    };
    mau: {
        count: number;
        delta: number;
    };
}>;
