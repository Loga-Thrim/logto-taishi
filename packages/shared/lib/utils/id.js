import { customAlphabet } from 'nanoid';
const lowercaseAlphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
const alphabet = `${lowercaseAlphabet}ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const buildIdGenerator = (size, includingUppercase = true) => customAlphabet(includingUppercase ? alphabet : lowercaseAlphabet, size);
/**
 * Generate a standard id with 21 characters, including lowercase letters and numbers.
 *
 * @see {@link lowercaseAlphabet}
 */
export const generateStandardId = buildIdGenerator(21, false);
/**
 * Generate a standard short id with 12 characters, including lowercase letters and numbers.
 *
 * @see {@link lowercaseAlphabet}
 */
export const generateStandardShortId = buildIdGenerator(12, false);
/**
 * Generate a standard secret with 32 characters, including uppercase letters, lowercase
 * letters, and numbers.
 *
 * @see {@link alphabet}
 */
export const generateStandardSecret = buildIdGenerator(32);
