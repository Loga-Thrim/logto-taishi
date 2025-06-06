import { readFileSync, existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { tryThat } from '@silverhand/essentials';
import ts from 'typescript';
import { consoleLog } from '../../../utils.js';
const untranslatedMark = 'UNTRANSLATED';
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
export const parseLocaleFiles = (filePath) => {
    const content = readFileSync(filePath, 'utf8');
    const ast = ts.createSourceFile(filePath, content, ts.ScriptTarget.Latest, true);
    const importIdentifierPath = new Map();
    const traverseNode = (node, nestedObject, fileStructure) => {
        /**
         * Handle property assignment in object literal expression:
         *
         * - Shorthand property assignments (e.g. `{ errors }`) are treated as import
         * - Property assignments will be categorized per its initializer:
         *   - Object literal expressions (e.g. `{ errors: { page_not_found: 'Page not found' } }`)
         *     will be treated as nested object
         *   - String literals (e.g. `{ page_title: 'Applications' }`) or no substitution template
         *     literals (e.g. `{ page_title: `Applications` }`) will be treated as string
         *   - Others are not supported, and will exit with error
         */
        const handleProperty = (property) => {
            // Treat shorthand property assignment as import
            if (ts.isShorthandPropertyAssignment(property)) {
                const key = property.name.getText();
                const importPath = importIdentifierPath.get(key);
                if (!importPath) {
                    consoleLog.fatal(`Cannot find import path for ${key} in ${filePath}`);
                }
                const resolvedPath = path.resolve(path.dirname(filePath), importPath);
                // Recursively parse the nested object from the imported file
                const [phrases, structure] = parseLocaleFiles(resolvedPath);
                /* eslint-disable @silverhand/fp/no-mutation */
                nestedObject[key] = phrases;
                fileStructure[key] = {
                    filePath: importPath,
                    structure,
                };
                /* eslint-enable @silverhand/fp/no-mutation */
            }
            if (ts.isPropertyAssignment(property)) {
                const key = property.name.getText();
                // Nested object, recursively parse it
                if (ts.isObjectLiteralExpression(property.initializer)) {
                    const [phrases, structure] = traverseNode(property.initializer, {}, {});
                    /* eslint-disable @silverhand/fp/no-mutation */
                    nestedObject[key] = phrases;
                    fileStructure[key] = { structure };
                    /* eslint-enable @silverhand/fp/no-mutation */
                }
                else if (ts.isStringLiteral(property.initializer) ||
                    ts.isNoSubstitutionTemplateLiteral(property.initializer)) {
                    const value = property.initializer.getText();
                    const commentRanges = ts.getLeadingCommentRanges(property.getFullText(), 0);
                    if (commentRanges?.[0]) {
                        if (commentRanges.length > 1) {
                            consoleLog.fatal('Multiple comments found for property:', property);
                        }
                        const commentRange = commentRanges[0];
                        const comment = property.getFullText().slice(commentRange.pos, commentRange.end);
                        if (comment.includes(untranslatedMark)) {
                            // eslint-disable-next-line @silverhand/fp/no-mutation
                            nestedObject[key] = [value, false];
                        }
                        else {
                            // eslint-disable-next-line @silverhand/fp/no-mutation
                            nestedObject[key] = [value, true];
                            consoleLog.warn('Unsupported comment:', comment);
                        }
                    }
                    else {
                        // eslint-disable-next-line @silverhand/fp/no-mutation
                        nestedObject[key] = [value, true];
                    }
                }
                else {
                    consoleLog.fatal('Unsupported property:', property);
                }
            }
        };
        if (ts.isImportDeclaration(node)) {
            const importPath = node.moduleSpecifier.getText().slice(1, -1).replace('.js', '.ts');
            const importIdentifier = node.importClause?.getText();
            // Assuming only default import is used
            if (importIdentifier) {
                importIdentifierPath.set(importIdentifier, importPath);
            }
        }
        else if (ts.isObjectLiteralExpression(node)) {
            for (const property of node.properties) {
                handleProperty(property);
            }
        }
        else {
            node.forEachChild((child) => {
                traverseNode(child, nestedObject, fileStructure);
            });
        }
        return [nestedObject, fileStructure];
    };
    return traverseNode(ast, {}, {});
};
const getIdentifier = (filePath) => {
    const filename = path.basename(filePath, '.ts');
    return (filename === 'index' ? path.basename(path.dirname(filePath)) : filename).replaceAll('-', '_');
};
/** Traverse the file structure and return an array of imports in the current file. */
const getCurrentFileImports = (fileStructure) => {
    const imports = new Set();
    for (const [key, value] of Object.entries(fileStructure)) {
        // If the key has a file path, treat it as an import and stop traversing
        // since it's pointing to another file
        if (value.filePath) {
            imports.add([key, value.filePath]);
        }
        // Otherwise, recursively traverse the nested object
        else {
            for (const importEntry of getCurrentFileImports(value.structure)) {
                imports.add(importEntry);
            }
        }
    }
    return [...imports];
};
/**
 * Recursively traverse the nested object of phrases and the file structure of
 * the baseline language, and generate the target language directory with the
 * same file structure.
 *
 * Values of the nested object will be replaced with the values of the target
 * language if the key exists; otherwise, the value of the baseline language
 * will be used.
 *
 * @param baseline The baseline language tuple
 * @param targetObject The target language nested object
 * @param targetFilePath The target language entrypoint file path
 * @param isRoot Whether the target file is the root entrypoint
 */
/* eslint-disable no-await-in-loop */
const traverseNode = async (baseline, targetObject, targetFilePath, isRoot = false) => {
    const [, baselineStructure] = baseline;
    const targetDirectory = path.dirname(targetFilePath);
    await fs.mkdir(targetDirectory, { recursive: true });
    await fs.writeFile(targetFilePath, '', { flag: 'w+' });
    if (isRoot) {
        await fs.appendFile(targetFilePath, "import type { LocalePhrase } from '../../types.js';\n\n");
    }
    // Write imports first
    const baselineEntries = getCurrentFileImports(baselineStructure);
    for (const [key, value] of baselineEntries
        .slice()
        .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))) {
        const importPath = path.join(targetDirectory, value);
        await fs.appendFile(targetFilePath, `import ${key} from './${path
            .relative(targetDirectory, importPath)
            .replace('.ts', '.js')}';\n`);
    }
    // Add a newline between imports and the object
    if (baselineEntries.length > 0) {
        await fs.appendFile(targetFilePath, '\n');
    }
    // Write the object
    const identifier = getIdentifier(targetFilePath);
    await fs.appendFile(targetFilePath, `const ${identifier} = {\n`);
    // Recursively traverse the nested object of phrases and the file structure
    // of the baseline language
    const traverseObject = async (baseline, targetObject, tabSize) => {
        const [baselineObject, baselineStructure] = baseline;
        for (const [key, value] of Object.entries(baselineObject)) {
            const existingValue = targetObject[key];
            if (Array.isArray(value)) {
                const [phrase] = value;
                // If the key exists in the target language and the value is a translated
                // string, use the value of the target language; otherwise, use the value
                // of the baseline language and add a comment to indicate that the phrase
                // is untranslated to help identify missing translations.
                if (Array.isArray(existingValue) && existingValue[1]) {
                    await fs.appendFile(targetFilePath, `${' '.repeat(tabSize)}${key}: ${existingValue[0]},\n`);
                }
                else {
                    await fs.appendFile(targetFilePath, `${' '.repeat(tabSize)}/** ${untranslatedMark} */\n`);
                    await fs.appendFile(targetFilePath, `${' '.repeat(tabSize)}${key}: ${phrase},\n`);
                }
            }
            // Not a string, treat it as a nested object or an import
            else {
                const keyStructure = baselineStructure[key];
                // If the key has a file structure, treat it as an import
                if (keyStructure?.filePath) {
                    await fs.appendFile(targetFilePath, `${' '.repeat(tabSize)}${key},\n`);
                    await traverseNode([value, keyStructure.structure], Array.isArray(existingValue) ? {} : existingValue ?? {}, path.join(targetDirectory, keyStructure.filePath));
                }
                // Otherwise, treat it as a nested object.
                else {
                    await fs.appendFile(targetFilePath, `${' '.repeat(tabSize)}${key}: {\n`);
                    await traverseObject([value, keyStructure?.structure ?? {}], Array.isArray(existingValue) ? {} : existingValue ?? {}, tabSize + 2);
                    await fs.appendFile(targetFilePath, `${' '.repeat(tabSize)}},\n`);
                }
            }
        }
    };
    await traverseObject(baseline, targetObject, 2);
    await (isRoot
        ? fs.appendFile(targetFilePath, '} satisfies LocalePhrase;\n\n')
        : fs.appendFile(targetFilePath, '};\n\n'));
    await fs.appendFile(targetFilePath, `export default Object.freeze(${identifier});\n`);
};
/* eslint-enable no-await-in-loop */
export const syncPhraseKeysAndFileStructure = async (baseline, targetLocale, targetDirectory) => {
    const targetEntrypoint = path.join(targetDirectory, 'index.ts');
    const isTargetLocaleExist = existsSync(targetEntrypoint);
    const targetObject = isTargetLocaleExist ? parseLocaleFiles(targetEntrypoint)[0] : {};
    const backupDirectory = targetDirectory + '.bak';
    if (isTargetLocaleExist) {
        await fs.rename(targetDirectory, backupDirectory);
    }
    else {
        consoleLog.warn(`Cannot find ${targetLocale} entrypoint, creating one`);
    }
    await tryThat(traverseNode(baseline, targetObject, path.join(targetDirectory, 'index.ts'), true), (error) => {
        consoleLog.plain();
        consoleLog.error(error);
        consoleLog.plain();
        consoleLog.fatal(`Failed to sync keys for ${targetLocale}, the backup is at ${backupDirectory} for recovery`);
    });
    if (isTargetLocaleExist) {
        await fs.rm(backupDirectory, { recursive: true });
    }
};
