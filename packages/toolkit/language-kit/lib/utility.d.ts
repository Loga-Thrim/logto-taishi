import { z } from 'zod';
import type { LanguageTag } from './type.js';
export declare const isLanguageTag: (value: unknown) => value is "af-ZA" | "am-ET" | "ar-AR" | "as-IN" | "az-AZ" | "be-BY" | "bg-BG" | "bn-IN" | "br-FR" | "bs-BA" | "ca-ES" | "cb-IQ" | "co-FR" | "cs-CZ" | "cx-PH" | "cy-GB" | "da-DK" | "de" | "de-DE" | "el-GR" | "en" | "en-GB" | "en-US" | "eo-EO" | "es" | "es-ES" | "es-419" | "et-EE" | "eu-ES" | "fa-IR" | "ff-NG" | "fi-FI" | "fo-FO" | "fr" | "fr-CA" | "fr-FR" | "fy-NL" | "ga-IE" | "gl-ES" | "gn-PY" | "gu-IN" | "ha-NG" | "he-IL" | "hi-IN" | "hr-HR" | "ht-HT" | "hu-HU" | "hy-AM" | "id-ID" | "ik-US" | "is-IS" | "it" | "it-IT" | "iu-CA" | "ja" | "ja-JP" | "ja-KS" | "jv-ID" | "ka-GE" | "kk-KZ" | "km-KH" | "kn-IN" | "ko" | "ko-KR" | "ku-TR" | "ky-KG" | "lo-LA" | "lt-LT" | "lv-LV" | "mg-MG" | "mk-MK" | "ml-IN" | "mn-MN" | "mr-IN" | "ms-MY" | "mt-MT" | "my-MM" | "nb-NO" | "ne-NP" | "nl-BE" | "nl-NL" | "nn-NO" | "or-IN" | "pa-IN" | "pl-PL" | "ps-AF" | "pt" | "pt-BR" | "pt-PT" | "ro-RO" | "ru" | "ru-RU" | "rw-RW" | "sc-IT" | "si-LK" | "sk-SK" | "sl-SI" | "sn-ZW" | "sq-AL" | "sr-RS" | "sv-SE" | "sw-KE" | "sy-SY" | "sz-PL" | "ta-IN" | "te-IN" | "tg-TJ" | "th-TH" | "tl-PH" | "tr" | "tr-TR" | "tt-RU" | "tz-MA" | "uk-UA" | "ur-PK" | "uz-UZ" | "vi-VN" | "zh" | "zh-CN" | "zh-HK" | "zh-MO" | "zh-TW" | "zz-TR";
export declare const languageTagGuard: z.ZodType<LanguageTag>;
/**
 * https://github.com/colinhacks/zod/issues/316#issuecomment-850906479
 * Create a schema matches anything and returns a value. Use it with `or`:
 *
 * const schema = zod.number();
 * const tolerant = schema.or(fallback(-1));
 *
 * schema.parse('foo')      // => ZodError
 * tolerant.parse('foo')    // -1
 */
export declare function fallback<T>(value: T): z.ZodEffects<z.ZodAny, T, any>;
