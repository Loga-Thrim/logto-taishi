import { type Page } from 'puppeteer';
export declare const waitForFormCard: (page: Page, title: string) => Promise<void>;
type ExpectToSelectColorOptions = {
    field: string;
    color: string;
};
export declare const expectToSelectColor: (page: Page, { field, color }: ExpectToSelectColorOptions) => Promise<void>;
type ExpectToSaveSignInExperienceOptions = {
    needToConfirmChanges?: boolean;
};
export declare const expectToSaveSignInExperience: (page: Page, options?: ExpectToSaveSignInExperienceOptions) => Promise<void>;
export declare const expectToSelectPreviewLanguage: (page: Page, language: string) => Promise<void>;
export {};
