import { trySafe } from '@silverhand/essentials';
const transformedKey = Symbol('Indicates an object is transformed from an `Error` instance');
// eslint-disable-next-line @typescript-eslint/ban-types
const isObject = (value) => typeof value === 'object' && value !== null;
// Edited from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value#circular_references
function getCircularReplacer() {
    const ancestors = [];
    const transformedMap = new WeakMap();
    const transformErrorValue = (value) => {
        // Special handling for `Error` instances since they have non-enumerable properties
        if (value instanceof Error) {
            if (!transformedMap.has(value)) {
                const transformed = {};
                for (const key of Object.getOwnPropertyNames(value)) {
                    // @ts-expect-error getOwnPropertyNames() returns the valid keys
                    // eslint-disable-next-line @silverhand/fp/no-mutation
                    transformed[key] = value[key];
                }
                // eslint-disable-next-line @silverhand/fp/no-mutation
                transformed[transformedKey] = true;
                transformedMap.set(value, transformed);
            }
            return transformedMap.get(value);
        }
        return value;
    };
    return function (key, value) {
        // Ignore `stack` property since ApplicationInsights will show it
        if (isObject(this) &&
            Object.prototype.hasOwnProperty.call(this, transformedKey) &&
            key === 'stack') {
            return;
        }
        if (!isObject(value)) {
            return value;
        }
        // `this` is the object that value is contained in,
        // i.e., its direct parent.
        while (ancestors.length > 0 && ancestors.at(-1) !== this) {
            // eslint-disable-next-line @silverhand/fp/no-mutating-methods
            ancestors.pop();
        }
        const transformed = transformErrorValue(value);
        if (ancestors.includes(transformed)) {
            return '[Circular ~]';
        }
        // eslint-disable-next-line @silverhand/fp/no-mutating-methods
        ancestors.push(transformed);
        return transformed;
    };
}
/**
 * Clone and stringify error object for ApplicationInsights. The stringified result
 * will be used as the error message. This is necessary because ApplicationInsights
 * only shows limited error properties.
 */
export const normalizeError = (error) => {
    /**
     * - Ensure the message if not empty otherwise Application Insights will respond 400
     *   and the error will not be recorded.
     * - We stringify error object here since other error properties won't show on the
     *   ApplicationInsights details page.
     */
    const message = trySafe(() => JSON.stringify(error, getCircularReplacer())) ?? 'Unknown error';
    // Ensure we don't mutate the original error
    const normalized = new Error(message);
    if (error instanceof Error) {
        // Manually clone key fields of the error for AppInsights display
        /* eslint-disable @silverhand/fp/no-mutation */
        normalized.name = error.name;
        normalized.stack = error.stack;
        normalized.cause = error.cause;
        /* eslint-enable @silverhand/fp/no-mutation */
    }
    return normalized;
};
