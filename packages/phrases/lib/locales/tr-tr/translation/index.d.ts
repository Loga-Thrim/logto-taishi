declare const _default: Readonly<{
    admin_console: Readonly<{
        title: string;
        admin_user: string;
        system_app: string;
        menu: Readonly<{
            profile: string;
            language: string;
            appearance: {
                label: string;
                light: string;
                dark: string;
                system: string;
            };
            sign_out: string;
        }>;
        general: Readonly<{
            placeholder: string;
            submit: string;
            skip: string;
            next: string;
            back: string;
            retry: string;
            done: string;
            search: string;
            search_placeholder: string;
            clear_result: string;
            save: string;
            save_changes: string;
            saved: string;
            discard: string;
            loading: string;
            redirecting: string;
            add: string;
            added: string;
            cancel: string;
            confirm: string;
            check_out: string;
            create: string;
            set_up: string;
            customize: string;
            enable: string;
            reminder: string;
            delete: string;
            more_options: string;
            close: string;
            copy: string;
            copying: string;
            copied: string;
            required: string;
            add_another: string;
            deletion_confirmation: string;
            settings_nav: string;
            unsaved_changes_warning: string;
            leave_page: string;
            stay_on_page: string;
            type_to_search: string;
            got_it: string;
            continue: string;
            page_info: string;
            learn_more: string;
            tab_errors: string;
            skip_for_now: string;
            remove: string;
            visit: string;
            join: string;
            try_now: string;
            multiple_form_field: string;
            demo: string;
            unnamed: string;
            view: string;
            hide: string;
            unknown_error: string;
            select: string;
            contact_us_action: string;
        }>;
        errors: Readonly<{
            something_went_wrong: string;
            page_not_found: string;
            unknown_server_error: string;
            empty: string;
            missing_total_number: string;
            invalid_uri_format: string;
            invalid_origin_format: string;
            invalid_json_format: string;
            invalid_error_message_format: string;
            required_field_missing: string;
            required_field_missing_plural: string;
            more_details: string;
            username_pattern_error: string;
            email_pattern_error: string;
            phone_pattern_error: string;
            insecure_contexts: string;
            unexpected_error: string;
            not_found: string;
            create_internal_role_violation: string;
            should_be_an_integer: string;
            number_should_be_between_inclusive: string;
        }>;
        tab_sections: Readonly<{
            overview: string;
            resources: string;
            users: string;
            access_control: string;
            help_and_support: string;
            tenant: string;
            automation: string;
        }>;
        tabs: Readonly<{
            get_started: string;
            dashboard: string;
            applications: string;
            api_resources: string;
            sign_in_experience: string;
            connectors: string;
            webhooks: string;
            users: string;
            audit_logs: string;
            roles: string;
            docs: string;
            tenant_settings: string;
            mfa: string;
        }>;
        applications: Readonly<{
            page_title: string;
            title: string;
            subtitle: string;
            subtitle_with_app_type: string;
            create: string;
            application_name: string;
            application_name_placeholder: string;
            application_description: string;
            application_description_placeholder: string;
            select_application_type: string;
            no_application_type_selected: string;
            application_created: string;
            app_id: string;
            type: {
                native: {
                    title: string;
                    subtitle: string;
                    description: string;
                };
                spa: {
                    title: string;
                    subtitle: string;
                    description: string;
                };
                traditional: {
                    title: string;
                    subtitle: string;
                    description: string;
                };
                machine_to_machine: {
                    title: string;
                    subtitle: string;
                    description: string;
                };
            };
            placeholder_title: string;
            placeholder_description: string;
        }>;
        application_details: Readonly<{
            page_title: string;
            back_to_applications: string;
            check_guide: string;
            settings: string;
            settings_description: string;
            advanced_settings: string;
            advanced_settings_description: string;
            application_roles: string;
            machine_logs: string;
            application_name: string;
            application_name_placeholder: string;
            description: string;
            description_placeholder: string;
            config_endpoint: string;
            authorization_endpoint: string;
            authorization_endpoint_tip: string;
            logto_endpoint: string;
            application_id: string;
            application_id_tip: string;
            application_secret: string;
            redirect_uri: string;
            redirect_uris: string;
            redirect_uri_placeholder: string;
            redirect_uri_placeholder_native: string;
            redirect_uri_tip: string;
            post_sign_out_redirect_uri: string;
            post_sign_out_redirect_uris: string;
            post_sign_out_redirect_uri_placeholder: string;
            post_sign_out_redirect_uri_tip: string;
            cors_allowed_origins: string;
            cors_allowed_origins_placeholder: string;
            cors_allowed_origins_tip: string;
            token_endpoint: string;
            user_info_endpoint: string;
            enable_admin_access: string;
            enable_admin_access_label: string;
            always_issue_refresh_token: string;
            always_issue_refresh_token_label: string;
            refresh_token_ttl: string;
            refresh_token_ttl_tip: string;
            rotate_refresh_token: string;
            rotate_refresh_token_label: string;
            delete_description: string;
            enter_your_application_name: string;
            application_deleted: string;
            redirect_uri_required: string;
            roles: {
                name_column: string;
                description_column: string;
                assign_button: string;
                delete_description: string;
                deleted: string;
                assign_title: string;
                assign_subtitle: string;
                assign_role_field: string;
                role_search_placeholder: string;
                added_text: string;
                assigned_app_count: string;
                confirm_assign: string;
                role_assigned: string;
                search: string;
                empty: string;
            };
        }>;
        api_resources: Readonly<{
            page_title: string;
            title: string;
            subtitle: string;
            create: string;
            api_name: string;
            api_name_placeholder: string;
            api_identifier: string;
            api_identifier_placeholder: string;
            api_identifier_tip: string;
            default_api: string;
            default_api_label: string;
            api_resource_created: string;
        }>;
        api_resource_details: Readonly<{
            page_title: string;
            back_to_api_resources: string;
            settings_tab: string;
            permissions_tab: string;
            settings: string;
            settings_description: string;
            management_api_settings_description: string;
            management_api_notice: string;
            token_expiration_time_in_seconds: string;
            token_expiration_time_in_seconds_placeholder: string;
            delete_description: string;
            enter_your_api_resource_name: string;
            api_resource_deleted: string;
            permission: {
                create_button: string;
                create_title: string;
                create_subtitle: string;
                confirm_create: string;
                name: string;
                name_placeholder: string;
                forbidden_space_in_name: string;
                description: string;
                description_placeholder: string;
                permission_created: string;
                delete_description: string;
                deleted: string;
            };
        }>;
        connectors: Readonly<{
            page_title: string;
            title: string;
            subtitle: string;
            create: string;
            config_sie_notice: string;
            config_sie_link_text: string;
            tab_email_sms: string;
            tab_social: string;
            connector_name: string;
            demo_tip: string;
            social_demo_tip: string;
            connector_type: string;
            connector_status: string;
            connector_status_in_use: string;
            connector_status_not_in_use: string;
            not_in_use_tip: {
                content: string;
                go_to_sie: string;
            };
            placeholder_title: string;
            placeholder_description: string;
            save_and_done: string;
            type: {
                email: string;
                sms: string;
                social: string;
            };
            setup_title: {
                email: string;
                sms: string;
                social: string;
            };
            guide: {
                subtitle: string;
                general_setting: string;
                parameter_configuration: string;
                test_connection: string;
                name: string;
                name_placeholder: string;
                name_tip: string;
                logo: string;
                logo_placeholder: string;
                logo_tip: string;
                logo_dark: string;
                logo_dark_placeholder: string;
                logo_dark_tip: string;
                logo_dark_collapse: string;
                logo_dark_show: string;
                target: string;
                target_placeholder: string;
                target_tip: string;
                target_tip_standard: string;
                target_tooltip: string;
                target_conflict: string;
                target_conflict_line2: string;
                target_conflict_line3: string;
                config: string;
                sync_profile: string;
                sync_profile_only_at_sign_up: string;
                sync_profile_each_sign_in: string;
                sync_profile_tip: string;
                callback_uri: string;
                callback_uri_description: string;
            };
            platform: {
                universal: string;
                web: string;
                native: string;
            };
            add_multi_platform: string;
            drawer_title: string;
            drawer_subtitle: string;
            unknown: string;
            standard_connectors: string;
        }>;
        connector_details: Readonly<{
            page_title: string;
            back_to_connectors: string;
            check_readme: string;
            settings: string;
            settings_description: string;
            parameter_configuration: string;
            test_connection: string;
            save_error_empty_config: string;
            send: string;
            send_error_invalid_format: string;
            edit_config_label: string;
            test_email_sender: string;
            test_sms_sender: string;
            test_email_placeholder: string;
            test_sms_placeholder: string;
            test_message_sent: string;
            test_sender_description: string;
            options_change_email: string;
            options_change_sms: string;
            connector_deleted: string;
            type_email: string;
            type_sms: string;
            type_social: string;
            in_used_social_deletion_description: string;
            in_used_passwordless_deletion_description: string;
            deletion_description: string;
            logto_email: {
                total_email_sent: string;
                total_email_sent_tip: string;
                email_template_title: string;
                template_description: string;
                template_description_link_text: string;
                description_action_text: string;
                from_email_field: string;
                sender_name_field: string;
                sender_name_tip: string;
                sender_name_placeholder: string;
                company_information_field: string;
                company_information_description: string;
                company_information_placeholder: string;
                app_logo_field: string;
                app_logo_tip: string;
                urls_not_allowed: string;
                test_notes: string;
            };
        }>;
        get_started: Readonly<{
            page_title: string;
            title: string;
            subtitle: string;
            develop: {
                title: string;
            };
            customize: {
                title: string;
                preview: {
                    title: string;
                    subtitle: string;
                };
                connector: {
                    title: string;
                    subtitle: string;
                };
                continue_customizing: string;
                try_now: string;
                add_more: string;
            };
            secure: {
                title: string;
            };
            manage: {
                title: string;
                rbac: {
                    title: string;
                    subtitle: string;
                };
                create_roles: string;
            };
            view_all: string;
        }>;
        users: Readonly<{
            page_title: string;
            title: string;
            subtitle: string;
            create: string;
            create_subtitle: string;
            error_missing_identifier: string;
            user_name: string;
            application_name: string;
            latest_sign_in: string;
            create_form_username: string;
            create_form_password: string;
            create_form_name: string;
            placeholder_name: string;
            placeholder_email: string;
            placeholder_username: string;
            placeholder_phone: string;
            unnamed: string;
            search: string;
            check_user_detail: string;
            placeholder_title: string;
            placeholder_description: string;
        }>;
        user_details: Readonly<{
            page_title: string;
            back_to_users: string;
            created_title: string;
            created_guide: string;
            created_email: string;
            created_phone: string;
            created_username: string;
            created_password: string;
            menu_delete: string;
            delete_description: string;
            deleted: string;
            reset_password: {
                reset_password: string;
                title: string;
                content: string;
                congratulations: string;
                new_password: string;
            };
            tab_settings: string;
            tab_roles: string;
            tab_logs: string;
            settings: string;
            settings_description: string;
            field_email: string;
            field_phone: string;
            field_username: string;
            field_name: string;
            field_avatar: string;
            field_avatar_placeholder: string;
            field_custom_data: string;
            field_custom_data_tip: string;
            field_connectors: string;
            custom_data_invalid: string;
            connectors: {
                connectors: string;
                user_id: string;
                remove: string;
                not_connected: string;
                deletion_confirmation: string;
            };
            mfa: {
                field_name: string;
                field_description: string;
                name_column: string;
                field_description_empty: string;
                deletion_confirmation: string;
            };
            suspended: string;
            suspend_user: string;
            suspend_user_reminder: string;
            suspend_action: string;
            user_suspended: string;
            reactivate_user: string;
            reactivate_user_reminder: string;
            reactivate_action: string;
            user_reactivated: string;
            roles: {
                name_column: string;
                description_column: string;
                assign_button: string;
                delete_description: string;
                deleted: string;
                assign_title: string;
                assign_subtitle: string;
                assign_role_field: string;
                role_search_placeholder: string;
                added_text: string;
                assigned_user_count: string;
                confirm_assign: string;
                role_assigned: string;
                search: string;
                empty: string;
            };
            warning_no_sign_in_identifier: string;
        }>;
        contact: Readonly<{
            title: string;
            description: string;
            discord: {
                title: string;
                description: string;
                button: string;
            };
            github: {
                title: string;
                description: string;
                button: string;
            };
            email: {
                title: string;
                description: string;
                button: string;
            };
            reserve: {
                title: string;
                description: string;
                button: string;
            };
        }>;
        sign_in_exp: Readonly<{
            page_title: string;
            title: string;
            description: string;
            tabs: {
                branding: string;
                sign_up_and_sign_in: string;
                content: string;
                password_policy: string;
            };
            welcome: {
                title: string;
                description: string;
                get_started: string;
                apply_remind: string;
            };
            color: {
                title: string;
                primary_color: string;
                dark_primary_color: string;
                dark_mode: string;
                dark_mode_description: string;
                dark_mode_reset_tip: string;
                reset: string;
            };
            branding: {
                title: string;
                ui_style: string;
                favicon: string;
                logo_image_url: string;
                logo_image_url_placeholder: string;
                dark_logo_image_url: string;
                dark_logo_image_url_placeholder: string;
                logo_image: string;
                dark_logo_image: string;
                logo_image_error: string;
                favicon_error: string;
            };
            custom_css: {
                title: string;
                css_code_editor_title: string;
                css_code_editor_description1: string;
                css_code_editor_description2: string;
                css_code_editor_description_link_content: string;
                css_code_editor_content_placeholder: string;
            };
            sign_up_and_sign_in: Readonly<{
                identifiers_email: string;
                identifiers_phone: string;
                identifiers_username: string;
                identifiers_email_or_sms: string;
                identifiers_none: string;
                and: string;
                or: string;
                sign_up: {
                    title: string;
                    sign_up_identifier: string;
                    identifier_description: string;
                    sign_up_authentication: string;
                    authentication_description: string;
                    set_a_password_option: string;
                    verify_at_sign_up_option: string;
                    social_only_creation_description: string;
                };
                sign_in: {
                    title: string;
                    sign_in_identifier_and_auth: string;
                    description: string;
                    add_sign_in_method: string;
                    password_auth: string;
                    verification_code_auth: string;
                    auth_swap_tip: string;
                    require_auth_factor: string;
                };
                social_sign_in: {
                    title: string;
                    social_sign_in: string;
                    description: string;
                    add_social_connector: string;
                    set_up_hint: {
                        not_in_list: string;
                        set_up_more: string;
                        go_to: string;
                    };
                };
                tip: {
                    set_a_password: string;
                    verify_at_sign_up: string;
                    password_auth: string;
                    verification_code_auth: string;
                    delete_sign_in_method: string;
                };
                advanced_options: {
                    title: string;
                    enable_user_registration: string;
                    enable_user_registration_description: string;
                };
            }>;
            content: Readonly<{
                terms_of_use: {
                    title: string;
                    terms_of_use: string;
                    terms_of_use_placeholder: string;
                    privacy_policy: string;
                    privacy_policy_placeholder: string;
                };
                languages: {
                    title: string;
                    enable_auto_detect: string;
                    description: string;
                    manage_language: string;
                    default_language: string;
                    default_language_description_auto: string;
                    default_language_description_fixed: string;
                };
                manage_language: {
                    title: string;
                    subtitle: string;
                    add_language: string;
                    logto_provided: string;
                    key: string;
                    logto_source_values: string;
                    custom_values: string;
                    clear_all_tip: string;
                    unsaved_description: string;
                    deletion_tip: string;
                    deletion_title: string;
                    deletion_description: string;
                    default_language_deletion_title: string;
                    default_language_deletion_description: string;
                };
            }>;
            password_policy: Readonly<{
                password_requirements: string;
                minimum_length: string;
                minimum_length_description: string;
                minimum_length_error: string;
                minimum_required_char_types: string;
                minimum_required_char_types_description: string;
                password_rejection: string;
                compromised_passwords: string;
                breached_passwords: string;
                breached_passwords_description: string;
                restricted_phrases: string;
                restricted_phrases_tooltip: string;
                repetitive_or_sequential_characters: string;
                repetitive_or_sequential_characters_description: string;
                user_information: string;
                user_information_description: string;
                custom_words: string;
                custom_words_description: string;
                custom_words_placeholder: string;
            }>;
            setup_warning: {
                no_connector_sms: string;
                no_connector_email: string;
                no_connector_social: string;
                setup_link: string;
            };
            save_alert: {
                description: string;
                before: string;
                after: string;
                sign_up: string;
                sign_in: string;
                social: string;
            };
            preview: {
                title: string;
                live_preview: string;
                live_preview_tip: string;
                native: string;
                desktop_web: string;
                mobile_web: string;
                desktop: string;
                mobile: string;
            };
        }>;
        dashboard: Readonly<{
            page_title: string;
            title: string;
            description: string;
            total_users: string;
            total_users_tip: string;
            new_users_today: string;
            new_users_today_tip: string;
            new_users_7_days: string;
            new_users_7_days_tip: string;
            daily_active_users: string;
            daily_active_users_tip: string;
            weekly_active_users: string;
            weekly_active_users_tip: string;
            monthly_active_users: string;
            monthly_active_users_tip: string;
        }>;
        logs: Readonly<{
            page_title: string;
            title: string;
            subtitle: string;
            event: string;
            user: string;
            application: string;
            time: string;
            filter_by: string;
        }>;
        log_details: Readonly<{
            page_title: string;
            back_to_logs: string;
            back_to: string;
            success: string;
            failed: string;
            event_key: string;
            application: string;
            ip_address: string;
            user: string;
            log_id: string;
            time: string;
            user_agent: string;
            tab_details: string;
            raw_data: string;
        }>;
        session_expired: Readonly<{
            title: string;
            subtitle: string;
            button: string;
        }>;
        welcome: Readonly<{
            title: string;
            description: string;
            create_account: string;
        }>;
        roles: Readonly<{
            page_title: string;
            title: string;
            subtitle: string;
            create: string;
            role_name: string;
            role_type: string;
            show_role_type_button_text: string;
            hide_role_type_button_text: string;
            type_user: string;
            type_machine_to_machine: string;
            role_description: string;
            role_name_placeholder: string;
            role_description_placeholder: string;
            col_roles: string;
            col_type: string;
            col_description: string;
            col_assigned_entities: string;
            user_counts: string;
            application_counts: string;
            user_count: string;
            application_count: string;
            assign_permissions: string;
            create_role_title: string;
            create_role_description: string;
            create_role_button: string;
            role_created: string;
            search: string;
            placeholder_title: string;
            placeholder_description: string;
        }>;
        role_details: Readonly<{
            back_to_roles: string;
            identifier: string;
            delete_description: string;
            role_deleted: string;
            settings_tab: string;
            users_tab: string;
            m2m_apps_tab: string;
            permissions_tab: string;
            settings: string;
            settings_description: string;
            field_name: string;
            field_description: string;
            type_m2m_role_tag: string;
            type_user_role_tag: string;
            permission: {
                assign_button: string;
                assign_title: string;
                assign_subtitle: string;
                assign_form_field: string;
                added_text_one: string;
                added_text_other: string;
                api_permission_count_one: string;
                api_permission_count_other: string;
                confirm_assign: string;
                permission_assigned: string;
                deletion_description: string;
                permission_deleted: string;
                empty: string;
            };
            users: {
                assign_button: string;
                name_column: string;
                app_column: string;
                latest_sign_in_column: string;
                delete_description: string;
                deleted: string;
                assign_title: string;
                assign_subtitle: string;
                assign_users_field: string;
                confirm_assign: string;
                users_assigned: string;
                empty: string;
            };
            applications: {
                assign_button: string;
                name_column: string;
                app_column: string;
                description_column: string;
                delete_description: string;
                deleted: string;
                assign_title: string;
                assign_subtitle: string;
                assign_applications_field: string;
                confirm_assign: string;
                applications_assigned: string;
                empty: string;
            };
        }>;
        permissions: Readonly<{
            search_placeholder: string;
            search_placeholder_without_api: string;
            name_column: string;
            description_column: string;
            api_column: string;
            placeholder_title: string;
            placeholder_description: string;
        }>;
        cloud: Readonly<{
            general: {
                onboarding: string;
            };
            welcome: {
                page_title: string;
                title: string;
                description: string;
                project_field: string;
                project_options: {
                    personal: string;
                    company: string;
                };
                title_field: string;
                title_options: {
                    developer: string;
                    team_lead: string;
                    ceo: string;
                    cto: string;
                    product: string;
                    others: string;
                };
                company_name_field: string;
                company_name_placeholder: string;
                company_size_field: string;
                company_options: {
                    size_1: string;
                    size_2_49: string;
                    size_50_199: string;
                    size_200_999: string;
                    size_1000_plus: string;
                };
                reason_field: string;
                reason_options: {
                    passwordless: string;
                    efficiency: string;
                    access_control: string;
                    multi_tenancy: string;
                    enterprise: string;
                    others: string;
                };
            };
            sie: {
                page_title: string;
                title: string;
                inspire: {
                    title: string;
                    description: string;
                    inspire_me: string;
                };
                logo_field: string;
                color_field: string;
                identifier_field: string;
                identifier_options: {
                    email: string;
                    phone: string;
                    user_name: string;
                };
                authn_field: string;
                authn_options: {
                    password: string;
                    verification_code: string;
                };
                social_field: string;
                finish_and_done: string;
                preview: {
                    mobile_tab: string;
                    web_tab: string;
                };
                connectors: {
                    unlocked_later: string;
                    unlocked_later_tip: string;
                    notice: string;
                };
            };
            socialCallback: {
                title: string;
                description: string;
            };
            tenant: {
                create_tenant: string;
            };
        }>;
        profile: Readonly<{
            page_title: string;
            title: string;
            description: string;
            settings: {
                title: string;
                profile_information: string;
                avatar: string;
                name: string;
                username: string;
            };
            link_account: {
                title: string;
                email_sign_in: string;
                email: string;
                social_sign_in: string;
                link_email: string;
                link_email_subtitle: string;
                email_required: string;
                invalid_email: string;
                identical_email_address: string;
                anonymous: string;
            };
            password: {
                title: string;
                password: string;
                password_setting: string;
                new_password: string;
                confirm_password: string;
                enter_password: string;
                enter_password_subtitle: string;
                set_password: string;
                verify_via_password: string;
                show_password: string;
                required: string;
                do_not_match: string;
            };
            code: {
                enter_verification_code: string;
                enter_verification_code_subtitle: string;
                verify_via_code: string;
                resend: string;
                resend_countdown: string;
            };
            delete_account: {
                title: string;
                label: string;
                description: string;
                button: string;
                dialog_paragraph_1: string;
                dialog_paragraph_2: string;
                dialog_paragraph_3: string;
            };
            set: string;
            change: string;
            link: string;
            unlink: string;
            not_set: string;
            change_avatar: string;
            change_name: string;
            change_username: string;
            set_name: string;
            email_changed: string;
            password_changed: string;
            updated: string;
            linked: string;
            unlinked: string;
            email_exists_reminder: string;
            unlink_confirm_text: string;
            unlink_reminder: string;
        }>;
        components: Readonly<{
            uploader: {
                action_description: string;
                uploading: string;
                image_limit: string;
                error_upload: string;
                error_file_size: string;
                error_file_type: string;
                error_file_count: string;
            };
        }>;
        webhooks: Readonly<{
            page_title: string;
            title: string;
            subtitle: string;
            create: string;
            events: {
                post_register: string;
                post_sign_in: string;
                post_reset_password: string;
            };
            table: {
                name: string;
                events: string;
                success_rate: string;
                requests: string;
            };
            placeholder: {
                title: string;
                description: string;
                create_webhook: string;
            };
            create_form: {
                title: string;
                subtitle: string;
                events: string;
                events_description: string;
                name: string;
                name_placeholder: string;
                endpoint_url: string;
                endpoint_url_placeholder: string;
                endpoint_url_tip: string;
                create_webhook: string;
                missing_event_error: string;
                https_format_error: string;
            };
            webhook_created: string;
        }>;
        webhook_details: Readonly<{
            page_title: string;
            back_to_webhooks: string;
            not_in_use: string;
            success_rate: string;
            requests: string;
            disable_webhook: string;
            disable_reminder: string;
            webhook_disabled: string;
            webhook_reactivated: string;
            reactivate_webhook: string;
            delete_webhook: string;
            deletion_reminder: string;
            deleted: string;
            settings_tab: string;
            recent_requests_tab: string;
            settings: {
                settings: string;
                settings_description: string;
                events: string;
                events_description: string;
                name: string;
                endpoint_url: string;
                endpoint_url_tip: string;
                signing_key: string;
                signing_key_tip: string;
                regenerate: string;
                regenerate_key_title: string;
                regenerate_key_reminder: string;
                regenerated: string;
                custom_headers: string;
                custom_headers_tip: string;
                key_duplicated_error: string;
                key_missing_error: string;
                value_missing_error: string;
                test: string;
                test_webhook: string;
                test_webhook_description: string;
                send_test_payload: string;
                test_result: {
                    endpoint_url: string;
                    message: string;
                    response_status: string;
                    response_body: string;
                    request_time: string;
                    test_success: string;
                };
            };
        }>;
        domain: Readonly<{
            status: {
                connecting: string;
                in_used: string;
                failed_to_connect: string;
            };
            update_endpoint_notice: string;
            error_hint: string;
            custom: {
                custom_domain: string;
                custom_domain_description: string;
                custom_domain_field: string;
                custom_domain_placeholder: string;
                add_domain: string;
                invalid_domain_format: string;
                verify_domain: string;
                enable_ssl: string;
                checking_dns_tip: string;
                enable_ssl_tip: string;
                generating_dns_records: string;
                add_dns_records: string;
                dns_table: {
                    type_field: string;
                    name_field: string;
                    value_field: string;
                };
                deletion: {
                    delete_domain: string;
                    reminder: string;
                    description: string;
                    in_used_description: string;
                    in_used_tip: string;
                    deleted: string;
                };
            };
            default: {
                default_domain: string;
                default_domain_description: string;
                default_domain_field: string;
            };
            custom_endpoint_note: string;
            custom_social_callback_url_note: string;
        }>;
        tenants: Readonly<{
            title: string;
            description: string;
            tabs: {
                settings: string;
                domains: string;
                subscription: string;
                billing_history: string;
            };
            settings: {
                title: string;
                tenant_id: string;
                tenant_name: string;
                environment_tag: string;
                environment_tag_description: string;
                environment_tag_development: string;
                environment_tag_staging: string;
                environment_tag_production: string;
                tenant_info_saved: string;
            };
            deletion_card: {
                title: string;
                tenant_deletion: string;
                tenant_deletion_description: string;
                tenant_deletion_button: string;
            };
            create_modal: {
                title: string;
                subtitle: string;
                create_button: string;
                tenant_name_placeholder: string;
            };
            delete_modal: {
                title: string;
                description_line1: string;
                description_line2: string;
                description_line3: string;
                delete_button: string;
            };
            tenant_landing_page: {
                title: string;
                description: string;
                create_tenant_button: string;
            };
            status: {
                mau_exceeded: string;
                suspended: string;
                overdue: string;
            };
            tenant_suspended_page: {
                title: string;
                description_1: string;
                description_2: string;
            };
        }>;
        topbar: Readonly<{
            docs: string;
            help: string;
        }>;
        subscription: Readonly<{
            free_plan: string;
            free_plan_description: string;
            hobby_plan: string;
            hobby_plan_description: string;
            pro_plan: string;
            pro_plan_description: string;
            enterprise: string;
            current_plan: string;
            current_plan_description: string;
            plan_usage: string;
            plan_cycle: string;
            next_bill: string;
            next_bill_hint: string;
            next_bill_tip: string;
            manage_payment: string;
            overfill_quota_warning: string;
            upgrade_pro: string;
            update_payment: string;
            payment_error: string;
            downgrade: string;
            current: string;
            upgrade: string;
            quota_table: Readonly<{
                quota: {
                    title: string;
                    tenant_limit: string;
                    base_price: string;
                    mau_unit_price: string;
                    mau_limit: string;
                };
                application: {
                    title: string;
                    total: string;
                    m2m: string;
                };
                resource: {
                    title: string;
                    resource_count: string;
                    scopes_per_resource: string;
                };
                branding: {
                    title: string;
                    custom_domain: string;
                    custom_css: string;
                    app_logo_and_favicon: string;
                    dark_mode: string;
                    i18n: string;
                };
                user_authn: {
                    title: string;
                    omni_sign_in: string;
                    password: string;
                    passwordless: string;
                    email_connector: string;
                    sms_connector: string;
                    social_connectors: string;
                    standard_connectors: string;
                    built_in_email_connector: string;
                    mfa: string;
                };
                user_management: {
                    title: string;
                    user_management: string;
                    roles: string;
                    scopes_per_role: string;
                };
                audit_logs: {
                    title: string;
                    retention: string;
                };
                hooks: {
                    title: string;
                    hooks: string;
                };
                support: {
                    title: string;
                    community: string;
                    customer_ticket: string;
                    premium: string;
                };
                mau_unit_price_footnote: string;
                unlimited: string;
                contact: string;
                monthly_price: string;
                mau_price: string;
                days_one: string;
                days_other: string;
                add_on: string;
                tier: string;
            }>;
            billing_history: {
                invoice_column: string;
                status_column: string;
                amount_column: string;
                invoice_created_date_column: string;
                invoice_status: {
                    void: string;
                    paid: string;
                    open: string;
                    uncollectible: string;
                };
            };
            quota_item: Readonly<{
                tenant_limit: {
                    name: string;
                    limited: string;
                    limited_other: string;
                    unlimited: string;
                    not_eligible: string;
                };
                mau_limit: {
                    name: string;
                    limited: string;
                    unlimited: string;
                    not_eligible: string;
                };
                applications_limit: {
                    name: string;
                    limited: string;
                    limited_other: string;
                    unlimited: string;
                    not_eligible: string;
                };
                machine_to_machine_limit: {
                    name: string;
                    limited: string;
                    limited_other: string;
                    unlimited: string;
                    not_eligible: string;
                };
                resources_limit: {
                    name: string;
                    limited: string;
                    limited_other: string;
                    unlimited: string;
                    not_eligible: string;
                };
                scopes_per_resource_limit: {
                    name: string;
                    limited: string;
                    limited_other: string;
                    unlimited: string;
                    not_eligible: string;
                };
                custom_domain_enabled: {
                    name: string;
                    limited: string;
                    unlimited: string;
                    not_eligible: string;
                };
                omni_sign_in_enabled: {
                    name: string;
                    limited: string;
                    unlimited: string;
                    not_eligible: string;
                };
                built_in_email_connector_enabled: {
                    name: string;
                    limited: string;
                    unlimited: string;
                    not_eligible: string;
                };
                social_connectors_limit: {
                    name: string;
                    limited: string;
                    limited_other: string;
                    unlimited: string;
                    not_eligible: string;
                };
                standard_connectors_limit: {
                    name: string;
                    limited: string;
                    limited_other: string;
                    unlimited: string;
                    not_eligible: string;
                };
                roles_limit: {
                    name: string;
                    limited: string;
                    limited_other: string;
                    unlimited: string;
                    not_eligible: string;
                };
                scopes_per_role_limit: {
                    name: string;
                    limited: string;
                    limited_other: string;
                    unlimited: string;
                    not_eligible: string;
                };
                hooks_limit: {
                    name: string;
                    limited: string;
                    limited_other: string;
                    unlimited: string;
                    not_eligible: string;
                };
                audit_logs_retention_days: {
                    name: string;
                    limited: string;
                    limited_other: string;
                    unlimited: string;
                    not_eligible: string;
                };
                community_support_enabled: {
                    name: string;
                    limited: string;
                    unlimited: string;
                    not_eligible: string;
                };
                customer_ticket_support: {
                    name: string;
                    limited: string;
                    limited_other: string;
                    unlimited: string;
                    not_eligible: string;
                };
                mfa_enabled: {
                    name: string;
                    limited: string;
                    unlimited: string;
                    not_eligible: string;
                };
            }>;
            downgrade_modal: {
                title: string;
                description: string;
                before: string;
                after: string;
                downgrade: string;
            };
            not_eligible_modal: {
                downgrade_title: string;
                downgrade_description: string;
                downgrade_help_tip: string;
                upgrade_title: string;
                upgrade_description: string;
                upgrade_pro_tip: string;
                upgrade_help_tip: string;
                a_maximum_of: string;
            };
            upgrade_success: string;
            downgrade_success: string;
            subscription_check_timeout: string;
        }>;
        upsell: Readonly<{
            pro_tag: string;
            upgrade_plan: string;
            compare_plans: string;
            create_tenant: {
                title: string;
                description: string;
                base_price: string;
                monthly_price: string;
                mau_unit_price: string;
                view_all_features: string;
                select_plan: string;
                free_tenants_limit: string;
                free_tenants_limit_other: string;
                most_popular: string;
                upgrade_success: string;
            };
            mau_exceeded_modal: {
                title: string;
                notification: string;
                update_plan: string;
            };
            payment_overdue_modal: {
                title: string;
                notification: string;
                unpaid_bills: string;
                update_payment: string;
            };
            paywall: Readonly<{
                applications: string;
                applications_other: string;
                machine_to_machine_feature: string;
                machine_to_machine: string;
                machine_to_machine_other: string;
                resources: string;
                resources_other: string;
                scopes_per_resource: string;
                scopes_per_resource_other: string;
                custom_domain: string;
                social_connectors: string;
                social_connectors_other: string;
                standard_connectors_feature: string;
                standard_connectors: string;
                standard_connectors_other: string;
                standard_connectors_pro: string;
                standard_connectors_pro_other: string;
                roles: string;
                roles_other: string;
                scopes_per_role: string;
                scopes_per_role_other: string;
                hooks: string;
                hooks_other: string;
            }>;
        }>;
        guide: Readonly<{
            start_building: string;
            get_started: string;
            categories: {
                featured: string;
                Traditional: string;
                SPA: string;
                Native: string;
                MachineToMachine: string;
            };
            filter: {
                title: string;
                placeholder: string;
            };
            checkout_tutorial: string;
            do_not_need_tutorial: string;
            finish_and_done: string;
            cannot_find_guide: string;
            describe_guide_looking_for: string;
            request_guide_successfully: string;
            app: {
                select_framework_or_tutorial: string;
                guide_modal_title: string;
                modal_subtitle: string;
                select_a_framework: string;
                continue_without_framework: string;
                describe_guide_looking_for_placeholder: string;
            };
            api: {
                modal_title: string;
                modal_subtitle: string;
                select_a_tutorial: string;
                continue_without_tutorial: string;
                describe_guide_looking_for_placeholder: string;
            };
        }>;
        mfa: Readonly<{
            title: string;
            description: string;
            factors: string;
            multi_factors: string;
            multi_factors_description: string;
            totp: string;
            otp_description: string;
            webauthn: string;
            webauthn_description: string;
            backup_code: string;
            backup_code_description: string;
            backup_code_setup_hint: string;
            backup_code_error_hint: string;
            policy: string;
            two_step_sign_in_policy: string;
            two_step_sign_in_policy_description: string;
            user_controlled: string;
            user_controlled_description: string;
            mandatory: string;
            mandatory_description: string;
            unlock_reminder: string;
            view_plans: string;
        }>;
    }>;
    demo_app: Readonly<{
        title: string;
        subtitle: string;
        username: string;
        user_id: string;
        sign_out: string;
        continue_explore: string;
        customize_sign_in_experience: string;
        enable_passwordless: string;
        add_social_connector: string;
    }>;
    oidc: Readonly<{
        logout_success: string;
    }>;
}>;
export default _default;
