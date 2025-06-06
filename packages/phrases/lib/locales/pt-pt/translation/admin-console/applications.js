const applications = {
    page_title: 'Aplicações',
    title: 'Aplicações',
    subtitle: 'Configure um aplicativo móvel, de página única, machine to machine ou tradicional para usar o Logto para autenticação',
    subtitle_with_app_type: 'Configurar autenticação Logto para a aplicação {{name}}',
    create: 'Criar aplicação',
    application_name: 'Nome da aplicação',
    application_name_placeholder: 'Ex: Site Empresa',
    application_description: 'Descrição da aplicação',
    application_description_placeholder: 'Insira a descrição da sua aplicação',
    select_application_type: 'Selecione o tipo de aplicação',
    no_application_type_selected: 'Ainda não selecionou nenhum tipo de aplicação',
    application_created: 'A aplicação foi criada com sucesso.',
    app_id: 'App ID',
    type: {
        native: {
            title: 'Nativo',
            subtitle: 'Uma aplicação que é executada em um ambiente nativo',
            description: 'Ex., App iOS, App Android',
        },
        spa: {
            title: 'Página única (SPAs)',
            subtitle: 'Uma aplicação que é executada num navegador e atualiza dinamicamente os dados',
            description: 'Ex., App React, App VueJS',
        },
        traditional: {
            title: 'Web tradicional',
            subtitle: 'Uma aplicação que renderiza e atualiza páginas apenas pelo servidor web',
            description: 'Ex., Next.js, PHP',
        },
        machine_to_machine: {
            title: 'Machine-to-Machine',
            subtitle: 'Uma aplicação (normalmente um serviço) que se comunica diretamente com recursos',
            description: 'Ex., serviço back-end',
        },
    },
    placeholder_title: 'Selecione um tipo de aplicação para continuar',
    placeholder_description: 'O Logto usa uma entidade de aplicativo para OIDC para ajudar em tarefas como identificar seus aplicativos, gerenciar o registro e criar registros de auditoria.',
};
export default Object.freeze(applications);
