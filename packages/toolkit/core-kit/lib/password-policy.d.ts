import { type DeepPartial } from '@silverhand/essentials';
import { z } from 'zod';
/** Password policy configuration type. */
export type PasswordPolicy = {
    /** Policy about password length. */
    length: {
        /** Minimum password length. */
        min: number;
        /** Maximum password length. */
        max: number;
    };
    /**
     * Policy about password character types. Four types of characters are supported:
     *
     * - Lowercase letters (a-z).
     * - Uppercase letters (A-Z).
     * - Digits (0-9).
     * - Symbols ({@link PasswordPolicyChecker.symbols}).
     */
    characterTypes: {
        /** Minimum number of character types. Range: 1-4. */
        min: number;
    };
    /** Policy about what passwords to reject. */
    rejects: {
        /** Whether to reject passwords that are pwned. */
        pwned: boolean;
        /** Whether to reject passwords that like '123456' or 'aaaaaa'. */
        repetitionAndSequence: boolean;
        /** Whether to reject passwords that include current user information. */
        userInfo: boolean;
        /** Whether to reject passwords that include specific words. */
        words: string[];
    };
};
/** Password policy configuration guard. */
export declare const passwordPolicyGuard: z.ZodObject<{
    length: z.ZodDefault<z.ZodObject<{
        min: z.ZodDefault<z.ZodNumber>;
        max: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        min: number;
        max: number;
    }, {
        min?: number | undefined;
        max?: number | undefined;
    }>>;
    characterTypes: z.ZodDefault<z.ZodObject<{
        min: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        min: number;
    }, {
        min?: number | undefined;
    }>>;
    rejects: z.ZodDefault<z.ZodObject<{
        pwned: z.ZodDefault<z.ZodBoolean>;
        repetitionAndSequence: z.ZodDefault<z.ZodBoolean>;
        userInfo: z.ZodDefault<z.ZodBoolean>;
        words: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        pwned: boolean;
        repetitionAndSequence: boolean;
        userInfo: boolean;
        words: string[];
    }, {
        pwned?: boolean | undefined;
        repetitionAndSequence?: boolean | undefined;
        userInfo?: boolean | undefined;
        words?: string[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    length: {
        min: number;
        max: number;
    };
    characterTypes: {
        min: number;
    };
    rejects: {
        pwned: boolean;
        repetitionAndSequence: boolean;
        userInfo: boolean;
        words: string[];
    };
}, {
    length?: {
        min?: number | undefined;
        max?: number | undefined;
    } | undefined;
    characterTypes?: {
        min?: number | undefined;
    } | undefined;
    rejects?: {
        pwned?: boolean | undefined;
        repetitionAndSequence?: boolean | undefined;
        userInfo?: boolean | undefined;
        words?: string[] | undefined;
    } | undefined;
}>;
/** The code of why a password is rejected. */
export type PasswordRejectionCode = 'too_short' | 'too_long' | 'character_types' | 'unsupported_characters' | 'pwned' | 'restricted.repetition' | 'restricted.sequence' | 'restricted.user_info' | 'restricted.words';
/** A password issue that does not meet the policy. */
export type PasswordIssue<Code extends PasswordRejectionCode = PasswordRejectionCode> = {
    /** Issue code. */
    code: `password_rejected.${Code}`;
    /** Interpolation data for the issue message. */
    interpolation?: Record<string, unknown>;
};
/** User information to check. */
export type UserInfo = Partial<{
    name: string;
    username: string;
    email: string;
    phoneNumber: string;
}>;
/**
 * The class for checking if a password meets the policy. The policy is defined as
 * {@link PasswordPolicy}.
 *
 * @example
 * ```ts
 * const checker = new PasswordPolicyChecker({
 *   length: { min: 8, max: 256 },
 *   characterTypes: { min: 2 },
 *   rejects: { pwned: true, repetitionAndSequence: true, words: [] },
 * });
 *
 * const issues = await checker.check('123456');
 * console.log(issues);
 * // [
 * //   { code: 'password_rejected.too_short' },
 * //   { code: 'password_rejected.character_types', interpolation: { min: 2 } },
 * //   { code: 'password_rejected.pwned' },
 * //   { code: 'password_rejected.restricted.sequence' },
 * // ]
 * ```
 */
export declare class PasswordPolicyChecker {
    /** The Web Crypto API to use. By default, the global `crypto.subtle` will be used. */
    protected readonly subtle: SubtleCrypto;
    static symbols: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ ";
    /** A set of characters that are considered as sequential. */
    static sequence: readonly ["0123456789", "abcdefghijklmnopqrstuvwxyz", "qwertyuiop", "asdfghjkl", "zxcvbnm", "1qaz", "2wsx", "3edc", "4rfv", "5tgb", "6yhn", "7ujm", "8ik", "9ol"];
    /** The length threshold for checking repetition and sequence. */
    static repetitionAndSequenceThreshold: 3;
    /**
     * If the password contains more than such number of characters that are not
     * in the restricted phrases, it will be accepted.
     */
    static restrictedPhrasesTolerance: 3;
    /** Get the length threshold for checking restricted phrases. */
    protected static getRestrictedPhraseThreshold(password: string): number;
    readonly policy: PasswordPolicy;
    constructor(policy: DeepPartial<PasswordPolicy>, 
    /** The Web Crypto API to use. By default, the global `crypto.subtle` will be used. */
    subtle?: SubtleCrypto);
    /**
     * Check if a password meets all the policy requirements.
     *
     * @param password - Password to check.
     * @param userInfo - User information to check. Required if the policy
     * requires to reject passwords that include user information.
     * @returns An array of issues. If the password meets the policy, an empty array will be returned.
     * @throws TypeError - If the policy requires to reject passwords that include user information
     * but the user information is not provided.
     */
    check(password: string, userInfo?: UserInfo): Promise<PasswordIssue[]>;
    /**
     * Perform a fast check to see if the password passes the basic requirements.
     * Only the length and character types will be checked.
     *
     * This method is used for frontend validation.
     *
     * @param password - Password to check.
     * @returns Whether the password passes the basic requirements.
     */
    fastCheck(password: string): PasswordIssue<PasswordRejectionCode>[];
    /**
     * Check if the given password contains enough character types.
     *
     * @param password - Password to check.
     * @returns Whether the password contains enough character types; or `'unsupported'`
     * if the password contains unsupported characters.
     */
    checkCharTypes(password: string): boolean | 'unsupported';
    /**
     * Check if the given password has been pwned.
     *
     * @param password - Password to check.
     * @returns Whether the password has been pwned.
     */
    hasBeenPwned(password: string): Promise<boolean>;
    /**
     * Get the length of the repetition at the beginning of the given string.
     * For example, `repetitionLength('aaaaa')` will return `5`.
     *
     * If the length is less than {@link PasswordPolicyChecker.repetitionAndSequenceThreshold},
     * `0` will be returned.
     */
    repetitionLength(password: string): number;
    /**
     * Get the length of the user information at the beginning of the given string.
     * For example, `userInfoLength('silverhand', { username: 'silverhand' })` will return `10`.
     *
     * For multiple matches, the longest length will be returned.
     */
    userInfoLength(password: string, userInfo: UserInfo): number;
    /**
     * Get the length of the word that matches the word list at the beginning of the given string.
     *
     * For multiple matches, the longest length will be returned.
     */
    wordLength(password: string): number;
    /**
     * Get the length of the sequence at the beginning of the given string.
     * For example, `sequenceLength('12345')` will return `5`.
     *
     * If the length is less than {@link PasswordPolicyChecker.repetitionAndSequenceThreshold},
     * `0` will be returned.
     */
    sequenceLength(password: string): number;
    /**
     * Check if the given string is sequential by iterating through the {@link PasswordPolicyChecker.sequence}.
     */
    protected isSequential(value: string): boolean;
}
