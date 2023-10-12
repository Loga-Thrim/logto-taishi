export default class ConsoleLog {
    static prefixes: Readonly<{
        info: string;
        warn: string;
        error: string;
        fatal: string;
    }>;
    plain: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
    info: typeof console.log;
    succeed: typeof console.log;
    warn: typeof console.log;
    error: typeof console.log;
    fatal: (...args: Parameters<typeof console.log>) => never;
}
