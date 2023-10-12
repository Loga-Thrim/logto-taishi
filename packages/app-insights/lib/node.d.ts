import type { TelemetryClient } from 'applicationinsights';
declare class AppInsights {
    client?: TelemetryClient;
    setup(cloudRole: string): Promise<boolean>;
    /** The function is async to avoid blocking the main script and force the use of `await` or `void`. */
    trackException(error: unknown): Promise<void>;
}
export declare const appInsights: AppInsights;
export {};
