import { languages } from '@logto/language-kit';
import { isBuiltInLanguageTag as isPhrasesBuiltInLanguageTag } from '@logto/phrases';
import { isBuiltInLanguageTag as isPhrasesUiBuiltInLanguageTag } from '@logto/phrases-experience';
import PQueue from 'p-queue';
import { inquireInstancePath, lintLocaleFiles } from '../../utils.js';
import { baseLanguage, syncTranslation } from './utils.js';
const sync = {
    command: ['sync'],
    describe: 'Translate all untranslated phrases using ChatGPT. Note the environment variable `OPENAI_API_KEY` is required to work.',
    handler: async ({ path: inputPath }) => {
        const queue = new PQueue({ concurrency: 1 });
        const instancePath = await inquireInstancePath(inputPath);
        for (const languageTag of Object.keys(languages)) {
            if (languageTag === baseLanguage) {
                continue;
            }
            const baseOptions = {
                instancePath,
                verbose: false,
                queue,
            };
            /* eslint-disable no-await-in-loop */
            if (isPhrasesBuiltInLanguageTag(languageTag)) {
                await syncTranslation({
                    ...baseOptions,
                    packageName: 'phrases',
                    languageTag,
                });
            }
            if (isPhrasesUiBuiltInLanguageTag(languageTag)) {
                await syncTranslation({
                    ...baseOptions,
                    packageName: 'phrases-experience',
                    languageTag,
                });
            }
            /* eslint-enable no-await-in-loop */
        }
        await queue.onIdle();
        void lintLocaleFiles(instancePath);
    },
};
export default sync;
