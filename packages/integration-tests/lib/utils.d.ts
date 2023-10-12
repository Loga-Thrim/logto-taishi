import { type Page } from 'puppeteer';
export declare const generateName: () => string;
export declare const generateUserId: () => string;
export declare const generateUsername: () => string;
export declare const generatePassword: () => string;
export declare const generateResourceName: () => string;
export declare const generateResourceIndicator: () => string;
export declare const generateEmail: () => string;
export declare const generateScopeName: () => string;
export declare const generateRoleName: () => string;
export declare const generateDomain: () => string;
export declare const generatePhone: (isE164?: boolean) => string;
export declare const formatPhoneNumberToInternational: (phoneNumber: string) => string;
export declare const waitFor: (ms: number) => Promise<unknown>;
export declare const getAccessTokenPayload: (accessToken: string) => Record<string, unknown>;
export declare const appendPathname: (pathname: string, baseUrl: URL) => URL;
/**
 * Run an action and simultaneously wait for navigation to complete. This is
 * useful for actions that trigger navigation, such as clicking a link or
 * submitting a form.
 */
export declare const expectNavigation: <T>(action: Promise<T>, page?: Page) => Promise<T>;
/**
 * Build the string for a CSS selector that matches a class name.
 *
 * Since we use CSS modules, the class names are prefixed with a hash followed by a `_`.
 * For example, the class name `foo` will be transformed to `abc123_foo`. This function
 * returns a selector that matches any class name that contains `_foo`.
 *
 * It is accurate enough for our tests, as long as our class names are camelCased.
 */
export declare const cls: <C extends string>(className: C) => `[class*=_${C}]`;
/**
 * Build the string for a CSS selector that matches a class name for a `<div>` element.
 * This is a shorthand for `div${cls(className)}`.
 *
 * @example
 * ```ts
 * dcls('foo') // => 'div[class*=_foo]'
 * ```
 *
 * @see {@link cls}
 */
export declare const dcls: <C extends string>(className: C) => `div[class*=_${C}]`;
