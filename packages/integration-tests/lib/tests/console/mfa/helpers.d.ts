import { type Page } from 'puppeteer';
export declare const expectToClickFactor: (page: Page, inputName: string) => Promise<void>;
export declare const expectToClickPolicyOption: (page: Page, inputName: string) => Promise<void>;
export declare const expectBackupCodeSetupError: (page: Page) => Promise<void>;
