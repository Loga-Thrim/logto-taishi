const tenants = {
    title: 'Ayarlar',
    description: 'Kiracı ayarlarını verimli bir şekilde yönetin ve alan adınızı özelleştirin.',
    tabs: {
        settings: 'Ayarlar',
        domains: 'Alan adları',
        subscription: 'Plan ve faturalandırma',
        billing_history: 'Fatura geçmişi',
    },
    settings: {
        title: 'AYARLAR',
        tenant_id: 'Kiracı Kimliği',
        tenant_name: 'Kiracı Adı',
        environment_tag: 'Çevre Etiketi',
        environment_tag_description: 'Etiketler hizmeti değiştirmez. Sadece farklı ortamları ayırt etmek için rehberlik eder.',
        environment_tag_development: 'Geliş',
        environment_tag_staging: 'Staging',
        environment_tag_production: 'Prod',
        tenant_info_saved: 'Kiracı bilgileri başarıyla kaydedildi.',
    },
    deletion_card: {
        title: 'SİL',
        tenant_deletion: 'Kiracıyı Sil',
        tenant_deletion_description: 'Kiracının silinmesi, tüm ilişkili kullanıcı verilerinin ve yapılandırmalarının kalıcı olarak silinmesine neden olur. Lütfen dikkatli bir şekilde devam edin.',
        tenant_deletion_button: 'Kiracıyı Sil',
    },
    create_modal: {
        title: 'Kiracı Oluştur',
        subtitle: 'Kaynakları ve kullanıcıları ayırmak için yeni bir kiracı oluşturun.',
        create_button: 'Kiracı oluştur',
        tenant_name_placeholder: 'Benim kiracım',
    },
    delete_modal: {
        title: 'Kiracıyı Sil',
        description_line1: 'Ortam etiketi "<span>{{tag}}</span>" olan "<span>{{name}}</span>" kiracınızı silmek istediğinizden emin misiniz? Bu işlem geri alınamaz ve tüm verilerinizin ve hesap bilgilerinizin kalıcı olarak silinmesine neden olur.',
        description_line2: 'Hesabınızı silmeden önce size yardımcı olabiliriz. <span><a>E-posta yoluyla bize ulaşın</a></span>',
        description_line3: 'Devam etmek isterseniz, "<span>{{name}}</span>" kiracı adını onaylamak için yazın.',
        delete_button: 'Kalıcı olarak sil',
    },
    tenant_landing_page: {
        title: 'Henüz bir kiracı oluşturmadınız',
        description: 'Logto ile projenizi yapılandırmaya başlamak için lütfen yeni bir kiracı oluşturun. Hesabınızdan çıkış yapmanız veya hesabınızı silmeniz gerekiyorsa, sağ üst köşedeki avatar düğmesine tıklayın.',
        create_tenant_button: 'Kiracı oluştur',
    },
    status: {
        mau_exceeded: 'MAU Sınırı Aşıldı',
        suspended: 'Askıya Alındı',
        overdue: 'Geçmişte',
    },
    tenant_suspended_page: {
        title: 'Kiracı Askıya Alındı. Erişimi geri yüklemek için bizimle iletişime geçin.',
        description_1: 'Üzülerek bildirmekten üzüntü duyuyoruz, kiracı hesabınız şu anda geçici olarak askıya alınmıştır. Bunun nedeni, MAU sınırlarını aşmak, gecikmiş ödemeler veya diğer izinsiz işlemler gibi yanlış kullanımdır.',
        description_2: 'Daha fazla açıklama, endişeleriniz veya işlevselliği tamamen geri yüklemek ve kiracılarınızı engellemek isterseniz, lütfen derhal bizimle iletişime geçmekten çekinmeyin.',
    },
};
export default Object.freeze(tenants);
