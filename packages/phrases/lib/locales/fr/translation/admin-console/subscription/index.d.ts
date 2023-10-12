declare const _default: Readonly<{
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
export default _default;
