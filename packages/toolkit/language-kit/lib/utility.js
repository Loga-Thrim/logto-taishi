import { z, any } from 'zod';
import { languages } from './const.js';
export const isLanguageTag = (value) => typeof value === 'string' && value in languages;
export const languageTagGuard = z
    .any()
    .refine((value) => isLanguageTag(value));
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
export function fallback(value) {
    return any().transform(() => value);
}
