const password_rejected = {
    too_short: 'Minimum length is {{min}}.',
    too_long: 'Maximum length is {{max}}.',
    character_types: 'At least {{min}} types of characters are required.',
    unsupported_characters: 'Unsupported character found.',
    pwned: 'Avoid using simple passwords that are easy to guess.',
    restricted_found: 'Avoid overusing {{list, list}}.',
    restricted: {
        repetition: 'repeated characters',
        sequence: 'sequential characters',
        user_info: 'your personal information',
        words: 'product context',
    },
};
export default Object.freeze(password_rejected);
