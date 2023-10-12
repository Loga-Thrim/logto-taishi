import { type PartialPasswordPolicy } from '@logto/schemas';
import { type ElementHandle, type Browser, type Page } from 'puppeteer';
export declare const goToAdminConsole: () => Promise<void>;
type WaitToasterOptions = {
    text?: string | RegExp;
    type?: 'success' | 'error';
};
export declare const waitForToast: (page: Page, { text, type }: WaitToasterOptions) => Promise<void>;
export declare const expectUnsavedChangesAlert: (page: Page) => Promise<void>;
export declare const expectToSaveChanges: (page: Page) => Promise<void>;
export declare const expectToDiscardChanges: (page: Page) => Promise<void>;
export declare const expectToClickDetailsPageOption: (page: Page, optionText: string) => Promise<void>;
export declare const expectModalWithTitle: (page: Page, title: string | RegExp) => Promise<void>;
export declare const expectToClickModalAction: (page: Page, actionText: string | RegExp) => Promise<void>;
type ExpectConfirmModalAndActOptions = {
    title: string | RegExp;
    actionText: string | RegExp;
};
export declare const expectConfirmModalAndAct: (page: Page, { title, actionText }: ExpectConfirmModalAndActOptions) => Promise<void>;
export declare const expectToClickNavTab: (page: Page, tab: string) => Promise<void>;
export declare const expectToOpenNewPage: (browser: Browser, url: string) => Promise<void>;
export declare const expectMainPageWithTitle: (page: Page, title: string) => Promise<void>;
export declare const expectToClickSidebarMenu: (page: Page, menuText: string) => Promise<void>;
export declare const getInputValue: (input: ElementHandle<HTMLInputElement>) => Promise<string>;
/**
 * Setup the email connector and update the sign-in experience to the following:
 *
 * - Sign-in and register mode
 * - Use username and password to sign-up
 * - Use username or email to sign-in
 * - Email sign-in can use verification code
 *
 * @param passwordPolicy The password policy to partially update the existing one.
 */
export declare const setupUsernameAndEmailExperience: (passwordPolicy?: PartialPasswordPolicy) => Promise<void>;
export {};
