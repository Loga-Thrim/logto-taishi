import { z } from 'zod';
/** Password policy configuration guard. */
export const passwordPolicyGuard = z.object({
    length: z
        .object({
        min: z.number().int().min(1).default(8),
        max: z.number().int().min(1).default(256),
    })
        .default({}),
    characterTypes: z
        .object({
        min: z.number().int().min(1).max(4).optional().default(1),
    })
        .default({}),
    rejects: z
        .object({
        pwned: z.boolean().default(true),
        repetitionAndSequence: z.boolean().default(true),
        userInfo: z.boolean().default(true),
        words: z.string().array().default([]),
    })
        .default({}),
});
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
class PasswordPolicyChecker {
    static { this.symbols = Object.freeze('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ '); }
    /** A set of characters that are considered as sequential. */
    static { this.sequence = Object.freeze([
        '0123456789',
        'abcdefghijklmnopqrstuvwxyz',
        'qwertyuiop',
        'asdfghjkl',
        'zxcvbnm',
        '1qaz',
        '2wsx',
        '3edc',
        '4rfv',
        '5tgb',
        '6yhn',
        '7ujm',
        '8ik',
        '9ol',
    ]); }
    /** The length threshold for checking repetition and sequence. */
    static { this.repetitionAndSequenceThreshold = 3; }
    /**
     * If the password contains more than such number of characters that are not
     * in the restricted phrases, it will be accepted.
     */
    static { this.restrictedPhrasesTolerance = 3; }
    /** Get the length threshold for checking restricted phrases. */
    static getRestrictedPhraseThreshold(password) {
        const { restrictedPhrasesTolerance } = PasswordPolicyChecker;
        return Math.max(1, password.length - restrictedPhrasesTolerance);
    }
    constructor(policy, 
    /** The Web Crypto API to use. By default, the global `crypto.subtle` will be used. */
    subtle = crypto.subtle) {
        this.subtle = subtle;
        this.policy = passwordPolicyGuard.parse(policy);
    }
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
    /* eslint-disable @silverhand/fp/no-let, @silverhand/fp/no-mutation, @silverhand/fp/no-mutating-methods */
    async check(password, userInfo) {
        const issues = this.fastCheck(password);
        if (this.policy.rejects.pwned && (await this.hasBeenPwned(password))) {
            issues.push({
                code: 'password_rejected.pwned',
            });
        }
        // `hashArray[i]` indicates whether the `i`th character violates the restriction.
        // We'll gradually set the value to `1` if needed.
        // The algorithm time complexity should be O(n^2), but it's fast enough for a password.
        const hashArray = Array.from({ length: password.length }).fill(0);
        const issueCodes = new Set();
        const { repetitionAndSequence, words, userInfo: rejectUserInfo } = this.policy.rejects;
        const rejectWords = words.length > 0;
        const fillHashArray = (startIndex, length, code) => {
            if (length <= 0) {
                return;
            }
            for (let i = startIndex; i < startIndex + length; i += 1) {
                hashArray[i] = 1;
            }
            issueCodes.add(code);
        };
        for (let i = 0; i < password.length; i += 1) {
            const sliced = password.slice(i);
            if (repetitionAndSequence) {
                fillHashArray(i, this.repetitionLength(sliced), 'restricted.repetition');
                fillHashArray(i, this.sequenceLength(sliced), 'restricted.sequence');
            }
            if (rejectWords) {
                fillHashArray(i, this.wordLength(sliced), 'restricted.words');
            }
            if (rejectUserInfo) {
                if (!userInfo) {
                    throw new TypeError('User information data is required to check user information.');
                }
                fillHashArray(i, this.userInfoLength(sliced, userInfo), 'restricted.user_info');
            }
        }
        return hashArray.reduce((total, current) => total + current, 0) >
            PasswordPolicyChecker.getRestrictedPhraseThreshold(password)
            ? [
                ...issues,
                ...[...issueCodes].map((code) => ({ code: `password_rejected.${code}` })),
            ]
            : issues;
    }
    /* eslint-enable @silverhand/fp/no-let, @silverhand/fp/no-mutation, @silverhand/fp/no-mutating-methods */
    /**
     * Perform a fast check to see if the password passes the basic requirements.
     * Only the length and character types will be checked.
     *
     * This method is used for frontend validation.
     *
     * @param password - Password to check.
     * @returns Whether the password passes the basic requirements.
     */
    /* eslint-disable @silverhand/fp/no-mutating-methods */
    fastCheck(password) {
        const issues = [];
        if (password.length < this.policy.length.min) {
            issues.push({
                code: 'password_rejected.too_short',
                interpolation: { min: this.policy.length.min },
            });
        }
        else if (password.length > this.policy.length.max) {
            issues.push({
                code: 'password_rejected.too_long',
                interpolation: { max: this.policy.length.max },
            });
        }
        const characterTypes = this.checkCharTypes(password);
        if (characterTypes === 'unsupported') {
            issues.push({
                code: 'password_rejected.unsupported_characters',
            });
        }
        else if (!characterTypes) {
            issues.push({
                code: 'password_rejected.character_types',
                interpolation: { min: this.policy.characterTypes.min },
            });
        }
        return issues;
    }
    /* eslint-enable @silverhand/fp/no-mutating-methods */
    /**
     * Check if the given password contains enough character types.
     *
     * @param password - Password to check.
     * @returns Whether the password contains enough character types; or `'unsupported'`
     * if the password contains unsupported characters.
     */
    checkCharTypes(password) {
        const characterTypes = new Set();
        for (const char of password) {
            if (char >= 'a' && char <= 'z') {
                characterTypes.add('lowercase');
            }
            else if (char >= 'A' && char <= 'Z') {
                characterTypes.add('uppercase');
            }
            else if (char >= '0' && char <= '9') {
                characterTypes.add('digits');
            }
            else if (PasswordPolicyChecker.symbols.includes(char)) {
                characterTypes.add('symbols');
            }
            else {
                return 'unsupported';
            }
        }
        return characterTypes.size >= this.policy.characterTypes.min;
    }
    /**
     * Check if the given password has been pwned.
     *
     * @param password - Password to check.
     * @returns Whether the password has been pwned.
     */
    async hasBeenPwned(password) {
        const hash = await this.subtle.digest('SHA-1', new TextEncoder().encode(password));
        const hashHex = Array.from(new Uint8Array(hash))
            .map((binary) => binary.toString(16).padStart(2, '0'))
            .join('');
        const hashPrefix = hashHex.slice(0, 5);
        const hashSuffix = hashHex.slice(5);
        const response = await fetch(`https://api.pwnedpasswords.com/range/${hashPrefix}`);
        const text = await response.text();
        const hashes = text.split('\n');
        const found = hashes.some((hex) => hex.toLowerCase().startsWith(hashSuffix));
        return found;
    }
    /**
     * Get the length of the repetition at the beginning of the given string.
     * For example, `repetitionLength('aaaaa')` will return `5`.
     *
     * If the length is less than {@link PasswordPolicyChecker.repetitionAndSequenceThreshold},
     * `0` will be returned.
     */
    /* eslint-disable @silverhand/fp/no-let, @silverhand/fp/no-mutation */
    repetitionLength(password) {
        const { repetitionAndSequenceThreshold } = PasswordPolicyChecker;
        const firstChar = password[0];
        let length = 0;
        if (firstChar === undefined) {
            return 0;
        }
        for (const char of password) {
            if (char === firstChar) {
                length += 1;
            }
            else {
                break;
            }
        }
        return length >= repetitionAndSequenceThreshold ? length : 0;
    }
    /* eslint-enable @silverhand/fp/no-let, @silverhand/fp/no-mutation */
    /**
     * Get the length of the user information at the beginning of the given string.
     * For example, `userInfoLength('silverhand', { username: 'silverhand' })` will return `10`.
     *
     * For multiple matches, the longest length will be returned.
     */
    // eslint-disable-next-line complexity
    userInfoLength(password, userInfo) {
        const lowercased = password.toLowerCase();
        const { name, username, email, phoneNumber } = userInfo;
        // eslint-disable-next-line @silverhand/fp/no-let
        let length = 0;
        const updateLength = (newLength) => {
            if (newLength > length) {
                // eslint-disable-next-line @silverhand/fp/no-mutation
                length = newLength;
            }
        };
        if (name) {
            const joined = name.replaceAll(/\s+/g, '');
            // The original name should be the longest string, so we check it first.
            if (lowercased.startsWith(name.toLowerCase())) {
                updateLength(name.length);
            }
            else {
                if (lowercased.startsWith(joined.toLowerCase())) {
                    updateLength(joined.length);
                }
                for (const word of name.split(' ')) {
                    if (lowercased.startsWith(word.toLowerCase())) {
                        updateLength(word.length);
                    }
                }
            }
        }
        if (username && lowercased.startsWith(username.toLowerCase())) {
            updateLength(username.length);
        }
        if (email) {
            const emailPrefix = email.split('@')[0];
            if (emailPrefix && lowercased.startsWith(emailPrefix.toLowerCase())) {
                updateLength(emailPrefix.length);
            }
        }
        if (phoneNumber && lowercased.startsWith(phoneNumber)) {
            updateLength(phoneNumber.length);
        }
        return length;
    }
    /**
     * Get the length of the word that matches the word list at the beginning of the given string.
     *
     * For multiple matches, the longest length will be returned.
     */
    /* eslint-disable @silverhand/fp/no-let, @silverhand/fp/no-mutation */
    wordLength(password) {
        const sliced = password.toLowerCase();
        let length = 0;
        for (const word of this.policy.rejects.words) {
            if (sliced.startsWith(word.toLowerCase()) && word.length > length) {
                length = word.length;
            }
        }
        return length;
    }
    /* eslint-enable @silverhand/fp/no-let, @silverhand/fp/no-mutation */
    /**
     * Get the length of the sequence at the beginning of the given string.
     * For example, `sequenceLength('12345')` will return `5`.
     *
     * If the length is less than {@link PasswordPolicyChecker.repetitionAndSequenceThreshold},
     * `0` will be returned.
     */
    /* eslint-disable @silverhand/fp/no-let, @silverhand/fp/no-mutation */
    sequenceLength(password) {
        const { repetitionAndSequenceThreshold } = PasswordPolicyChecker;
        let value = '';
        let length = 0;
        for (const char of password) {
            if (!value || this.isSequential(value + char)) {
                value += char;
                length += 1;
            }
            else {
                break;
            }
        }
        return length >= repetitionAndSequenceThreshold ? length : 0;
    }
    /* eslint-enable @silverhand/fp/no-let, @silverhand/fp/no-mutation */
    /**
     * Check if the given string is sequential by iterating through the {@link PasswordPolicyChecker.sequence}.
     */
    isSequential(value) {
        const { sequence } = PasswordPolicyChecker;
        for (const seq of sequence) {
            // eslint-disable-next-line @silverhand/fp/no-mutating-methods -- created a new array before mutating
            const reversedSeq = [...seq].reverse().join('');
            if ([seq, reversedSeq, seq.toUpperCase(), reversedSeq.toUpperCase()].some((item) => item.includes(value))) {
                return true;
            }
        }
        return false;
    }
}
export { PasswordPolicyChecker };
