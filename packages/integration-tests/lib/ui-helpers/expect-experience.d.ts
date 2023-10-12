import ExpectPage from './expect-page.js';
export type ExperienceType = 'sign-in' | 'register' | 'continue' | 'forgot-password';
export type ExperiencePath = ExperienceType | `${ExperienceType}/password` | `${ExperienceType}/verify` | `${ExperienceType}/verification-code` | `forgot-password/reset`;
export type ExpectExperienceOptions = {
    /** The URL of the experience endpoint. */
    endpoint?: URL;
    /**
     * Whether the forgot password flow is enabled.
     *
     * @default false
     */
    forgotPassword?: boolean;
};
/**
 * A class that provides:
 *
 * - A set of methods to navigate to a specific page for a experience.
 * - A set of methods to assert the state of a experience and its side effects.
 */
export default class ExpectExperience extends ExpectPage {
    #private;
    readonly options: Required<ExpectExperienceOptions>;
    protected get experienceType(): ExperienceType;
    constructor(thePage?: import("puppeteer").Page, options?: ExpectExperienceOptions);
    /**
     * Start experience with the given initial URL. Expect the initial URL is protected by Logto, and
     * navigate to the experience sign-in page if unauthenticated.
     *
     * If the experience can be started, the instance will be marked as ongoing.
     *
     * @param initialUrl The initial URL to start the experience with.
     * @param type The type of experience to expect. If it's `register`, it will try to click the "Create
     * account" link on the sign-in page.
     */
    startWith(initialUrl?: URL, type?: ExperienceType): Promise<void>;
    /**
     * Ensure the experience is ongoing and the page is at the initial URL; then try to click the "sign out"
     * button (case-insensitive) and close the page.
     *
     * It will clear the ongoing experience if the experience is ended successfully.
     */
    verifyThenEnd(): Promise<undefined>;
    /**
     * Assert the page is at the given experience path.
     *
     * @param pathname The experience path to assert.
     */
    toBeAt(pathname: ExperiencePath): void;
    /**
     * Assert the page is at the verification code page and fill the verification code inputs with the
     * code from Logto database.
     *
     * @param type The type of experience to expect.
     */
    toCompleteVerification(type: ExperienceType): Promise<void>;
    /**
     * Fill the verification code inputs with the given code.
     *
     * @param code The verification code to fill.
     */
    toFillVerificationCode(code: string): Promise<void>;
    /**
     * Fill the password form inputs with the given passwords. If forgot password flow is enabled,
     * only the `newPassword` input will be filled; otherwise, both `newPassword` and `confirmPassword`
     * will be filled.
     *
     * @param passwords The passwords to fill.
     * @see {@link toFillPasswordsToInputs} for filling passwords to specific named inputs.
     */
    toFillNewPasswords(...passwords: Array<string | [password: string, errorMessage: string | RegExp]>): Promise<void>;
    /**
     * Fill the password form inputs with the given passwords. If the password is an array,
     * the second element will be used to assert the error message; otherwise, the password is
     * expected to be valid and the form will be submitted.
     *
     * @param inputNames The names of the password form inputs.
     * @param passwords The passwords to fill.
     * @example
     *
     * In the following example, the first password is expected to be rejected with the error message
     * "simple password" (case-insensitive), and the second password is expected to be accepted.
     *
     * ```ts
     * await experience.toFillPasswords(
     *  [credentials.pwnedPassword, 'simple password'],
     *  credentials.password,
     * );
     * ```
     */
    toFillPasswordsToInputs({ inputNames, shouldNavigate }: {
        inputNames: string[];
        shouldNavigate?: boolean;
    }, ...passwords: Array<string | [password: string, errorMessage: string | RegExp]>): Promise<void>;
    /**
     * Expect a toast to appear with the given text, then remove it immediately.
     *
     * @param text The text to match.
     */
    waitForToast(text: string | RegExp): Promise<void>;
    /** Build a full experience URL from a pathname. */
    protected buildExperienceUrl(pathname?: string): URL;
    protected throwNoOngoingExperienceError(): never;
}
