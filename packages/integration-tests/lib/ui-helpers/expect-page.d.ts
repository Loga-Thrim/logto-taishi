import { type ElementHandle, type Page } from 'puppeteer';
/** Error thrown by {@link ExpectPage}. */
export declare class ExpectPageError extends Error {
    readonly page: Page;
    constructor(message: string, page: Page);
}
/**
 * A class that provides a set of methods to assert the state of page tests and its side effects.
 */
export default class ExpectPage {
    readonly page: Page;
    constructor(page?: Page);
    /**
     * Navigate to the given URL and wait for the page to load. Assert that an element with ID `app`
     * is present.
     *
     * @param initialUrl The URL to navigate to.
     */
    toStart(initialUrl: URL): Promise<void>;
    /**
     * Click on the element matching the given selector and text.
     *
     * @param selector The selector to match.
     * @param text The text to match, if provided.
     * @param shouldNavigate Whether the click should trigger a navigation. Defaults to `true`.
     */
    toClick(selector: string, text?: string | RegExp, shouldNavigate?: boolean): Promise<void>;
    /**
     * Click on the `<button type="submit">` element on the page.
     *
     * @param shouldNavigate Whether the click should trigger a navigation. Defaults to `true`.
     */
    toClickSubmit(shouldNavigate?: boolean): Promise<void>;
    /**
     * Find the `<form>` element on the page and submit it programmatically.
     *
     * @param shouldNavigate Whether the click should trigger a navigation. Defaults to `true`.
     */
    toSubmit(shouldNavigate?: boolean): Promise<void>;
    /**
     * Fill an `<input>` with the given name with the given value and optionally submit the form.
     *
     * @param name The name of the input to fill.
     * @param value The value to fill the input with.
     * @param options Options to control the behavior of the method.
     * @param options.submit Whether to submit the form after filling the input. Defaults to `false`.
     * @param options.shouldNavigate Whether the submit should trigger a navigation. Defaults to `true`. Note that this
     * option is ignored if `options.submit` is `false`.
     */
    toFillInput(name: string, value: string, options?: {
        submit: true;
        shouldNavigate?: boolean;
    }): Promise<void>;
    /**
     * Fill a `<form>` with the given values and optionally submit it.
     *
     * @param values The key-value object of values to fill the form with.
     * @param options Options to control the behavior of the method.
     * @param options.submit Whether to submit the form after filling the input. Defaults to `false`.
     * @param options.shouldNavigate Whether the submit should trigger a navigation. Defaults to `true`. Note that this
     * option is ignored if `options.submit` is `false`.
     */
    toFillForm(values: Record<string, string>, options?: {
        submit: true;
        shouldNavigate?: boolean;
    }): Promise<void>;
    /**
     * Expect the page to match an element with `role="alert"` and optionally with the given text.
     *
     * @param text The text to match, if provided.
     */
    toMatchAlert(text?: string | RegExp): Promise<ElementHandle>;
    /**
     * Expect the page's URL to match the given URL.
     *
     * @param url The URL to match.
     */
    toMatchUrl(url: URL | string): void;
    /**
     * Navigate to the given URL and wait for the page to be navigated.
     */
    navigateTo(url: URL | string): Promise<import("puppeteer").HTTPResponse | null>;
    /**
     * Expect the page to match an element with the given selector and text, then remove it immediately.
     *
     * @param selector The selector to match.
     * @param text The text to match.
     */
    toMatchAndRemove(selector: string, text: string | RegExp): Promise<void>;
    protected throwError(message: string): never;
}
