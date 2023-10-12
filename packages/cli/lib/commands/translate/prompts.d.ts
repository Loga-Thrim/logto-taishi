import { type LanguageTag } from '@logto/language-kit';
type GetTranslationPromptProperties = {
    sourceFileContent: string;
    targetLanguage: LanguageTag;
    extraPrompt?: string;
};
export declare const untranslatedMark = "/** UNTRANSLATED */";
/**
 * Note:
 * The input token limit of GPT 3.5 is 2048, the following prompt tokens with sourceFileContent is about 1600.
 * Remember to check the token limit before adding more prompt.
 * Tokens can be counted in https://platform.openai.com/tokenizer
 */
export declare const getTranslationPromptMessages: ({ sourceFileContent, targetLanguage, extraPrompt, }: GetTranslationPromptProperties) => {
    role: string;
    content: string;
}[];
export {};
