import { type ClickAnalyticsPlugin } from '@microsoft/applicationinsights-clickanalytics-js';
import type { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js';
import type { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { type Optional } from '@silverhand/essentials';
import { type ComponentType } from 'react';
export type SetupConfig = {
    connectionString?: string;
    /**
     * The config object for the ClickAnalytics plugin. If this is provided, the plugin will be
     * automatically loaded when calling `.setup()`.
     *
     * Wait for {@link https://github.com/microsoft/ApplicationInsights-JS/issues/2106 | microsoft/ApplicationInsights-JS#2106}
     * to be resolved to use a stronger type.
     *
     * @see {@link https://github.com/microsoft/ApplicationInsights-JS/tree/master/extensions/applicationinsights-clickanalytics-js#configuration | ClickAnalytics configuration}
     */
    clickPlugin?: Record<string, unknown>;
    cookieDomain?: string;
};
export declare class AppInsightsReact {
    /**
     * URL search parameters that start with `utm_`. It is an empty object until you call `.setup()`,
     * which will read the URL search string and store parameters in this property.
     */
    utmParameters: Record<string, string>;
    protected reactPlugin?: ReactPlugin;
    protected clickAnalyticsPlugin?: ClickAnalyticsPlugin;
    protected withAITracking?: typeof withAITracking;
    protected appInsights?: ApplicationInsights;
    get instance(): Optional<ApplicationInsights>;
    get trackPageView(): Optional<ApplicationInsights['trackPageView']>;
    setup(cloudRole: string, config?: string | SetupConfig): Promise<boolean>;
    withAppInsights<P>(Component: ComponentType<P>): ComponentType<P>;
}
export declare const appInsightsReact: AppInsightsReact;
export declare const withAppInsights: <P>(Component: ComponentType<P>) => ComponentType<P>;
