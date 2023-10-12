import { type LanguageTag } from '@logto/language-kit';
import { type Got } from 'got';
export declare const createOpenaiApi: () => Got;
type TranslateConfig = {
    api: Got;
    sourceFilePath: string;
    targetLanguage: LanguageTag;
    extraPrompt?: string;
};
export declare const translate: ({ api, targetLanguage, sourceFilePath, extraPrompt, }: TranslateConfig) => Promise<string | undefined>;
export {};
