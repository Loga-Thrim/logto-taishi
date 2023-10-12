import { type Page } from 'puppeteer';
import { type ApplicationCase } from './constants.js';
export declare const expectFrameworksInGroup: (page: Page, groupSelector: string) => Promise<void>;
export declare const expectToChooseAndClickApplicationFramework: (page: Page, framework: string) => Promise<void>;
export declare const expectFrameworkExists: (page: Page, framework: string) => Promise<void>;
export declare const expectToProceedApplicationCreationFrom: (page: Page, { name, description }: {
    name: string;
    description: string;
}) => Promise<void>;
export declare const expectToProceedSdkGuide: (page: Page, { guideFilename, sample, redirectUri, postSignOutRedirectUri }: ApplicationCase, skipFillForm?: boolean) => Promise<void>;
export declare const expectToProceedAppDeletion: (page: Page, appName: string) => Promise<void>;
