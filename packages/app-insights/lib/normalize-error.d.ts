/**
 * Clone and stringify error object for ApplicationInsights. The stringified result
 * will be used as the error message. This is necessary because ApplicationInsights
 * only shows limited error properties.
 */
export declare const normalizeError: (error: unknown) => Error;
