import { Translation, GeneratedSchema } from './../foundations/index.js';
export type CreateCustomPhrase = {
    tenantId?: string;
    id: string;
    languageTag: string;
    translation: Translation;
};
export type CustomPhrase = {
    tenantId: string;
    id: string;
    languageTag: string;
    translation: Translation;
};
export declare const CustomPhrases: GeneratedSchema<CreateCustomPhrase, CustomPhrase>;
