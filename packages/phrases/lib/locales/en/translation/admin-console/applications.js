const applications = {
    page_title: 'Applications',
    title: 'Applications',
    subtitle: 'Set up Logto authentication for your native, single page, machine to machine, or traditional application',
    subtitle_with_app_type: 'Set up Logto authentication for your {{name}} application',
    create: 'Create Application',
    application_name: 'Application name',
    application_name_placeholder: 'My App',
    application_description: 'Application description',
    application_description_placeholder: 'Enter your application description',
    select_application_type: 'Select an application type',
    no_application_type_selected: 'You haven’t selected any application type yet',
    application_created: 'Application created successfully.',
    app_id: 'App ID',
    type: {
        native: {
            title: 'Native App',
            subtitle: 'An app that runs in a native environment',
            description: 'E.g., iOS app, Android app',
        },
        spa: {
            title: 'Single Page App',
            subtitle: 'An app that runs in a web browser and dynamically updates data in place',
            description: 'E.g., React DOM app, Vue app',
        },
        traditional: {
            title: 'Traditional Web',
            subtitle: 'An app that renders and updates pages by the web server alone',
            description: 'E.g., Next.js, PHP',
        },
        machine_to_machine: {
            title: 'Machine-to-Machine',
            subtitle: 'An app (usually a service) that directly talks to resources',
            description: 'E.g., Backend service',
        },
    },
    placeholder_title: 'Select an application type to continue',
    placeholder_description: 'Logto uses an application entity for OIDC to help with tasks such as identifying your apps, managing sign-in, and creating audit logs.',
};
export default Object.freeze(applications);
