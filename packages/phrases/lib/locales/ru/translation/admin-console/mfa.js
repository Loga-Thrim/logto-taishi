const mfa = {
    title: 'Многофакторная аутентификация',
    description: 'Добавьте многофакторную аутентификацию для повышения безопасности вашего опыта входа.',
    factors: 'Факторы',
    multi_factors: 'Многофакторы',
    multi_factors_description: 'Пользователи должны проверить один из включенных факторов для двухэтапной аутентификации.',
    totp: 'OTP из приложения Authenticator',
    otp_description: 'Свяжите Google Authenticator и т. д., чтобы проверить одноразовые пароли.',
    webauthn: 'WebAuthn',
    webauthn_description: 'WebAuthn использует ключ прохода для проверки устройства пользователя, включая YubiKey.',
    backup_code: 'Резервный код',
    backup_code_description: 'Генерируйте 10 уникальных кодов, каждый из которых можно использовать для одной аутентификации.',
    backup_code_setup_hint: 'Фактор резервной аутентификации, который нельзя включить отдельно:',
    backup_code_error_hint: 'Чтобы использовать резервный код для многофакторной аутентификации, другие факторы должны быть включены для обеспечения успешного входа ваших пользователей.',
    policy: 'Политика',
    two_step_sign_in_policy: 'Политика двухэтапной аутентификации при входе',
    two_step_sign_in_policy_description: 'Задайте требование двухэтапной аутентификации для всего приложения при входе.',
    user_controlled: 'Управление пользователем',
    user_controlled_description: 'По умолчанию отключено и не обязательно, но пользователи могут включить его по отдельности.',
    mandatory: 'Обязательно',
    mandatory_description: 'Требуйте многофакторную аутентификацию для всех ваших пользователей при каждом входе.',
    unlock_reminder: 'Разблокируйте многофакторную аутентификацию для увеличения безопасности с помощью перехода на платный план. Не стесняйтесь <a>связаться с нами</a>, если вам нужна помощь.',
    view_plans: 'Просмотреть планы',
};
export default Object.freeze(mfa);
