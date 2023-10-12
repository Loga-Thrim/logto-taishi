import { type Page } from 'puppeteer';
export declare const expectToSelectSignUpIdentifier: (page: Page, identifier: string) => Promise<void>;
export declare const expectToClickSignUpAuthnOption: (page: Page, option: string) => Promise<void>;
export declare const expectToAddSignInMethod: (page: Page, method: string, isAddAnother?: boolean) => Promise<void>;
type ExpectSignInMethodAuthnOptionOptions = {
    method: string;
    option: string;
};
export declare const expectToClickSignInMethodAuthnOption: (page: Page, { method, option }: ExpectSignInMethodAuthnOptionOptions) => Promise<void>;
export declare const expectToSwapSignInMethodAuthnOption: (page: Page, method: string) => Promise<void>;
export declare const expectToRemoveSignInMethod: (page: Page, method: string) => Promise<void>;
export declare const expectSignInMethodError: (page: Page, method: string) => Promise<void>;
type ExpectNotificationOnFiledOptions = {
    field: string;
    content?: RegExp | string;
};
export declare const expectNotificationInFiled: (page: Page, { field, content }: ExpectNotificationOnFiledOptions) => Promise<void>;
export declare const expectSignUpIdentifierSelectorError: (page: Page) => Promise<void>;
export declare const expectToResetSignUpAndSignInConfig: (page: Page, needSave?: boolean) => Promise<void>;
export declare const expectToAddSocialSignInConnector: (page: Page, name: string) => Promise<void>;
export declare const expectToRemoveSocialSignInConnector: (page: Page, name: string) => Promise<void>;
type ExpectErrorsOnNavTabOptions = {
    tab: string;
    error?: RegExp | string;
};
export declare const expectErrorsOnNavTab: (page: Page, { tab, error }: ExpectErrorsOnNavTabOptions) => Promise<void>;
export {};
