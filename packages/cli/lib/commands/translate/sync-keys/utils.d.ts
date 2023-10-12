type FileStructure = {
    [key: string]: {
        filePath?: string;
        structure: FileStructure;
    };
};
type NestedPhraseObject = {
    [key: string]: [phrase: string, isTranslated: boolean] | NestedPhraseObject;
};
type ParsedTuple = readonly [NestedPhraseObject, FileStructure];
/**
 * Given a entrypoint file path of a language, parse the nested object of
 * phrases and the file structure.
 *
 * @example
 * Given the following file:
 *
 * ```ts
 * import errors from './errors/index.js';
 *
 * const translation = {
 *   // UNTRANSLATED
 *   page_title: 'Applications',
 *   errors,
 * };
 * ```
 *
 * The returned object will be:
 *
 * ```ts
 * {
 *   page_title: ['Anwendungen', false],
 *   errors: {
 *     page_not_found: ['Seite nicht gefunden', true],
 *   },
 * }
 * ```
 *
 * And the file structure will be:
 *
 * ```ts
 * {
 *   errors: {
 *     filePath: './errors/index.js',
 *     structure: {},
 *   },
 * }
 * ```
 *
 * @param filePath The entrypoint file path of a language
 *
 * @returns A tuple of the nested object of phrases and the file structure
 *
 */
export declare const parseLocaleFiles: (filePath: string) => ParsedTuple;
export declare const syncPhraseKeysAndFileStructure: (baseline: ParsedTuple, targetLocale: string, targetDirectory: string) => Promise<void>;
export {};
