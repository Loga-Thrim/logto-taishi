/**
 * Generate a standard id with 21 characters, including lowercase letters and numbers.
 *
 * @see {@link lowercaseAlphabet}
 */
export declare const generateStandardId: (size?: number | undefined) => string;
/**
 * Generate a standard short id with 12 characters, including lowercase letters and numbers.
 *
 * @see {@link lowercaseAlphabet}
 */
export declare const generateStandardShortId: (size?: number | undefined) => string;
/**
 * Generate a standard secret with 32 characters, including uppercase letters, lowercase
 * letters, and numbers.
 *
 * @see {@link alphabet}
 */
export declare const generateStandardSecret: (size?: number | undefined) => string;
