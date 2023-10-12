declare const _default: Readonly<{
    request: Readonly<{
        invalid_input: string;
        general: string;
    }>;
    auth: Readonly<{
        authorization_header_missing: string;
        authorization_token_type_not_supported: string;
        unauthorized: string;
        forbidden: string;
        expected_role_not_found: string;
        jwt_sub_missing: string;
        require_re_authentication: string;
    }>;
    guard: Readonly<{
        invalid_input: string;
        invalid_pagination: string;
        can_not_get_tenant_id: string;
        file_size_exceeded: string;
        mime_type_not_allowed: string;
    }>;
    oidc: Readonly<{
        aborted: string;
        invalid_scope: string;
        invalid_scope_plural: string;
        invalid_token: string;
        invalid_client_metadata: string;
        insufficient_scope: string;
        invalid_request: string;
        invalid_grant: string;
        invalid_redirect_uri: string;
        access_denied: string;
        invalid_target: string;
        unsupported_grant_type: string;
        unsupported_response_mode: string;
        unsupported_response_type: string;
        provider_error: string;
        server_error: string;
        provider_error_fallback: string;
    }>;
    user: Readonly<{
        username_already_in_use: string;
        email_already_in_use: string;
        phone_already_in_use: string;
        invalid_email: string;
        invalid_phone: string;
        email_not_exist: string;
        phone_not_exist: string;
        identity_not_exist: string;
        identity_already_in_use: string;
        social_account_exists_in_profile: string;
        cannot_delete_self: string;
        sign_up_method_not_enabled: string;
        sign_in_method_not_enabled: string;
        same_password: string;
        password_required_in_profile: string;
        new_password_required_in_profile: string;
        password_exists_in_profile: string;
        username_required_in_profile: string;
        username_exists_in_profile: string;
        email_required_in_profile: string;
        email_exists_in_profile: string;
        phone_required_in_profile: string;
        phone_exists_in_profile: string;
        email_or_phone_required_in_profile: string;
        suspended: string;
        user_not_exist: string;
        missing_profile: string;
        role_exists: string;
        invalid_role_type: string;
        missing_mfa: string;
        totp_already_in_use: string;
    }>;
    password: Readonly<{
        unsupported_encryption_method: string;
        pepper_not_found: string;
        rejected: string;
    }>;
    session: Readonly<{
        not_found: string;
        invalid_credentials: string;
        invalid_sign_in_method: string;
        invalid_connector_id: string;
        insufficient_info: string;
        connector_id_mismatch: string;
        connector_session_not_found: string;
        verification_session_not_found: string;
        verification_expired: string;
        verification_blocked_too_many_attempts: string;
        unauthorized: string;
        unsupported_prompt_name: string;
        forgot_password_not_enabled: string;
        verification_failed: string;
        connector_validation_session_not_found: string;
        identifier_not_found: string;
        interaction_not_found: string;
        mfa: {
            require_mfa_verification: string;
            mfa_sign_in_only: string;
            pending_info_not_found: string;
            invalid_totp_code: string;
        };
    }>;
    connector: Readonly<{
        general: string;
        not_found: string;
        not_enabled: string;
        invalid_metadata: string;
        invalid_config_guard: string;
        unexpected_type: string;
        invalid_request_parameters: string;
        insufficient_request_parameters: string;
        invalid_config: string;
        invalid_response: string;
        template_not_found: string;
        template_not_supported: string;
        rate_limit_exceeded: string;
        not_implemented: string;
        social_invalid_access_token: string;
        invalid_auth_code: string;
        social_invalid_id_token: string;
        authorization_failed: string;
        social_auth_code_invalid: string;
        more_than_one_sms: string;
        more_than_one_email: string;
        more_than_one_connector_factory: string;
        db_connector_type_mismatch: string;
        not_found_with_connector_id: string;
        multiple_instances_not_supported: string;
        invalid_type_for_syncing_profile: string;
        can_not_modify_target: string;
        should_specify_target: string;
        multiple_target_with_same_platform: string;
        cannot_overwrite_metadata_for_non_standard_connector: string;
    }>;
    verification_code: Readonly<{
        phone_email_empty: string;
        not_found: string;
        phone_mismatch: string;
        email_mismatch: string;
        code_mismatch: string;
        expired: string;
        exceed_max_try: string;
    }>;
    sign_in_experiences: Readonly<{
        empty_content_url_of_terms_of_use: string;
        empty_social_connectors: string;
        enabled_connector_not_found: string;
        not_one_and_only_one_primary_sign_in_method: string;
        username_requires_password: string;
        passwordless_requires_verify: string;
        miss_sign_up_identifier_in_sign_in: string;
        password_sign_in_must_be_enabled: string;
        code_sign_in_must_be_enabled: string;
        unsupported_default_language: string;
        at_least_one_authentication_factor: string;
        backup_code_cannot_be_enabled_alone: string;
        duplicated_mfa_factors: string;
    }>;
    localization: Readonly<{
        cannot_delete_default_language: string;
        invalid_translation_structure: string;
    }>;
    swagger: Readonly<{
        invalid_zod_type: string;
        not_supported_zod_type_for_params: string;
    }>;
    entity: Readonly<{
        invalid_input: string;
        create_failed: string;
        db_constraint_violated: string;
        not_exists: string;
        not_exists_with_id: string;
        not_found: string;
    }>;
    log: Readonly<{
        invalid_type: string;
    }>;
    role: Readonly<{
        name_in_use: string;
        scope_exists: string;
        user_exists: string;
        application_exists: string;
        default_role_missing: string;
        internal_role_violation: string;
    }>;
    scope: Readonly<{
        name_exists: string;
        name_with_space: string;
    }>;
    storage: Readonly<{
        not_configured: string;
        missing_parameter: string;
        upload_error: string;
    }>;
    resource: Readonly<{
        resource_identifier_in_use: string;
    }>;
    hook: Readonly<{
        missing_events: string;
        send_test_payload_failed: string;
        endpoint_responded_with_error: string;
    }>;
    domain: Readonly<{
        not_configured: string;
        cloudflare_data_missing: string;
        cloudflare_unknown_error: string;
        cloudflare_response_error: string;
        limit_to_one_domain: string;
        hostname_already_exists: string;
        cloudflare_not_found: string;
    }>;
    subscription: Readonly<{
        limit_exceeded: string;
        get_plan_failed: string;
        tenant_suspended: string;
    }>;
    application: Readonly<{
        invalid_type: string;
        role_exists: string;
        invalid_role_type: string;
    }>;
}>;
export default _default;
