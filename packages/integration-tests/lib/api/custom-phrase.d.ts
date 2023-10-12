import type { CustomPhrase, Translation } from '@logto/schemas';
export declare const listCustomPhrases: () => Promise<CustomPhrase[]>;
export declare const getCustomPhrase: (languageTag: string) => Promise<CustomPhrase>;
export declare const createOrUpdateCustomPhrase: (languageTag: string, translation: Translation) => Promise<CustomPhrase>;
export declare const deleteCustomPhrase: (languageTag: string) => Promise<unknown>;
