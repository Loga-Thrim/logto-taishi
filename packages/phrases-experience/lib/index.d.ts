import type { LanguageTag } from '@logto/language-kit';
import type { NormalizeKeyPaths } from '@silverhand/essentials';
import { z } from 'zod';
import en from './locales/en/index.js';
import type { LocalePhrase } from './types.js';
export type { LocalePhrase } from './types.js';
export type I18nKey = NormalizeKeyPaths<typeof en.translation>;
export declare const builtInLanguages: readonly ["de", "en", "es", "fr", "it", "ja", "ko", "pl-PL", "pt-PT", "pt-BR", "ru", "tr-TR", "zh-CN", "zh-HK", "zh-TW"];
export declare const builtInLanguageOptions: {
    value: "de" | "en" | "es" | "fr" | "it" | "ja" | "ko" | "pl-PL" | "pt-PT" | "pt-BR" | "ru" | "tr-TR" | "zh-CN" | "zh-HK" | "zh-TW";
    title: "Deutsch" | "English" | "Español" | "Français" | "Italiano" | "日本語" | "한국어" | "Polski" | "Português (Portugal)" | "Português (Brasil)" | "Русский" | "Türkçe" | "简体中文" | "繁體中文（香港）" | "繁體中文（台灣）";
}[];
export declare const builtInLanguageTagGuard: z.ZodEnum<["de", "en", "es", "fr", "it", "ja", "ko", "pl-PL", "pt-PT", "pt-BR", "ru", "tr-TR", "zh-CN", "zh-HK", "zh-TW"]>;
export type BuiltInLanguageTag = z.infer<typeof builtInLanguageTagGuard>;
export type Resource = Record<BuiltInLanguageTag, LocalePhrase>;
declare const resource: Resource;
export declare const getDefaultLanguageTag: (language: string) => LanguageTag;
export declare const isBuiltInLanguageTag: (language: string) => language is "de" | "en" | "es" | "fr" | "it" | "ja" | "ko" | "pl-PL" | "pt-PT" | "pt-BR" | "ru" | "tr-TR" | "zh-CN" | "zh-HK" | "zh-TW";
export default resource;
