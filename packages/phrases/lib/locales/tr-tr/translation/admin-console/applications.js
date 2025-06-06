const applications = {
    page_title: 'Uygulamalar',
    title: 'Uygulamalar',
    subtitle: 'Kimlik doğrulaması için Logtoyu kullanmak üzere mobil, tek sayfa, machine to machine veya geleneksel bir uygulama ayarlayınız',
    subtitle_with_app_type: 'Logto Doğrulamasını {{name}} uygulamanız için yapılandırın',
    create: 'Uygulama oluştur',
    application_name: 'Uygulama adı',
    application_name_placeholder: 'Uygulamam',
    application_description: 'Uygulama açıklaması',
    application_description_placeholder: 'Uygulama açıklaması giriniz',
    select_application_type: 'Uygulama tipi seçiniz',
    no_application_type_selected: 'Henüz bir uygulama tipi seçmediniz',
    application_created: 'Uygulaması başarıyla oluşturuldu.',
    app_id: 'App ID',
    type: {
        native: {
            title: 'Native Uygulama',
            subtitle: 'Nativede çalışan bir uygulama ',
            description: 'Örneğin, iOS uygulaması, Android uygulaması',
        },
        spa: {
            title: 'Tek sayfalı uygulama',
            subtitle: 'Bir web tarayıcısında çalışan ve verileri yerinde dinamik olarak güncelleyen bir uygulama',
            description: 'Örneğin, React DOM uygulaması, Vue uygulaması',
        },
        traditional: {
            title: 'Geleneksel Web',
            subtitle: 'Sayfaları yalnızca web sunucusu tarafından işleyen ve güncelleyen bir uygulama',
            description: 'Örneğin, JSP, PHP',
        },
        machine_to_machine: {
            title: 'Machine-to-Machine',
            subtitle: 'Kaynaklarla doğrudan iletişim kuran bir uygulama (genellikle bir servis)',
            description: 'Örneğin, Backend servisi',
        },
    },
    placeholder_title: 'Devam etmek için bir uygulama tipi seçin',
    placeholder_description: 'Logto, uygulamanızı tanımlamaya, oturum açmayı yönetmeye ve denetim kayıtları oluşturmaya yardımcı olmak için OIDC için bir uygulama varlığı kullanır.',
};
export default Object.freeze(applications);
