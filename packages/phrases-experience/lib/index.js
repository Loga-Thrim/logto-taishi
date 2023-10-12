import { languages, fallback } from '@logto/language-kit';
import { z } from 'zod';
import de from './locales/de/index.js';
import en from './locales/en/index.js';
import es from './locales/es/index.js';
import fr from './locales/fr/index.js';
import it from './locales/it/index.js';
import ja from './locales/ja/index.js';
import ko from './locales/ko/index.js';
import plPL from './locales/pl-pl/index.js';
import ptBR from './locales/pt-br/index.js';
import ptPT from './locales/pt-pt/index.js';
import ru from './locales/ru/index.js';
import trTR from './locales/tr-tr/index.js';
import zhCN from './locales/zh-cn/index.js';
import zhHK from './locales/zh-hk/index.js';
import zhTW from './locales/zh-tw/index.js';
export const builtInLanguages = [
    'de',
    'en',
    'es',
    'fr',
    'it',
    'ja',
    'ko',
    'pl-PL',
    'pt-PT',
    'pt-BR',
    'ru',
    'tr-TR',
    'zh-CN',
    'zh-HK',
    'zh-TW',
];
export const builtInLanguageOptions = builtInLanguages.map((languageTag) => ({
    value: languageTag,
    title: languages[languageTag],
}));
export const builtInLanguageTagGuard = z.enum(builtInLanguages);
const resource = {
    de,
    en,
    es,
    fr,
    it,
    ja,
    ko,
    'pl-PL': plPL,
    'pt-PT': ptPT,
    'pt-BR': ptBR,
    ru,
    'tr-TR': trTR,
    'zh-CN': zhCN,
    'zh-HK': zhHK,
    'zh-TW': zhTW,
};
export const getDefaultLanguageTag = (language) => builtInLanguageTagGuard.or(fallback('en')).parse(language);
export const isBuiltInLanguageTag = (language) => builtInLanguageTagGuard.safeParse(language).success;
export default resource;
