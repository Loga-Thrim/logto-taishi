import { type LanguageTag } from '@logto/language-kit';
import PQueue from 'p-queue';
export declare const baseLanguage = "en";
export declare const readLocaleFiles: (directory: string) => Promise<string[]>;
export declare const readBaseLocaleFiles: (directory: string) => Promise<string[]>;
export type TranslationOptions = {
    instancePath: string;
    packageName: 'phrases' | 'phrases-experience';
    languageTag: LanguageTag;
    verbose?: boolean;
    queue?: PQueue;
};
export declare const createFullTranslation: ({ instancePath, packageName, languageTag, verbose, queue, }: TranslationOptions) => Promise<void>;
export declare const syncTranslation: ({ instancePath, packageName, languageTag, verbose, queue, }: TranslationOptions) => Promise<void>;
