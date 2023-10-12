declare const _default: Readonly<{
    general_required: string;
    general_invalid: string;
    username_required: string;
    password_required: string;
    username_exists: string;
    username_should_not_start_with_number: string;
    username_invalid_charset: string;
    invalid_email: string;
    invalid_phone: string;
    passwords_do_not_match: string;
    invalid_passcode: string;
    invalid_connector_auth: string;
    invalid_connector_request: string;
    unknown: string;
    invalid_session: string;
    timeout: string;
    password_rejected: Readonly<{
        too_short: string;
        too_long: string;
        character_types: string;
        unsupported_characters: string;
        pwned: string;
        restricted_found: string;
        restricted: {
            repetition: string;
            sequence: string;
            user_info: string;
            words: string;
        };
    }>;
}>;
export default _default;
