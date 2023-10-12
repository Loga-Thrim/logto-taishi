import ExpectPage from './expect-page.js';
type ExpectConsoleOptions = {
    /** The URL of the console endpoint. */
    endpoint?: URL;
    /**
     * The tenant ID to use for the Console.
     *
     * @default 'console' as the special tenant ID for OSS
     */
    tenantId?: string;
};
export type ConsoleTitle = 'Sign-in experience';
export default class ExpectConsole extends ExpectPage {
    readonly options: Required<ExpectConsoleOptions>;
    constructor(thePage?: import("puppeteer").Page, options?: ExpectConsoleOptions);
    start(): Promise<void>;
    /**
     * Navigate to a specific page in the Console.
     */
    gotoPage(pathname: string, title: ConsoleTitle): Promise<void>;
    /**
     * Expect card components to be rendered in the Console.
     *
     * @param titles The titles of the cards to expect, case-insensitive.
     */
    toExpectCards(...titles: string[]): Promise<void>;
    getFieldInputs(title: string): Promise<import("puppeteer").ElementHandle<HTMLInputElement>[]>;
    getFieldInput(title: string): Promise<import("puppeteer").ElementHandle<HTMLInputElement>>;
    /**
     * Click a `<nav>` navigation tab (not the page tab) in the Console.
     */
    toClickTab(tabName: string | RegExp): Promise<void>;
    /**
     * Expect a toast to appear with the given text, then remove it immediately.
     *
     * @param text The text to match.
     * @param type The type of the toast, if provided.
     */
    waitForToast(text: string | RegExp, type?: 'success' | 'error'): Promise<void>;
    toSaveChanges(confirmation?: string | RegExp): Promise<void>;
    /** Build a full Console URL from a pathname. */
    protected buildUrl(pathname?: string): URL;
}
export {};
