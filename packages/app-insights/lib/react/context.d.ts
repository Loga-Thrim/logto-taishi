import { type ReactNode } from 'react';
import { type AppInsightsReact, appInsightsReact as appInsights } from './AppInsightsReact';
type Context = {
    needsSetup: boolean;
    isSetupFinished: boolean;
    setup: (...args: Parameters<typeof appInsights.setup>) => Promise<void>;
    appInsights: AppInsightsReact;
};
export declare const AppInsightsContext: import("react").Context<Context>;
type Properties = {
    children: ReactNode;
};
export type SetupStatus = 'none' | 'loading' | 'initialized' | 'failed';
export declare const AppInsightsProvider: ({ children }: Properties) => JSX.Element;
export {};
