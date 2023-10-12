const google = {
    factoryId: 'google-universal',
    name: 'Google',
    initialFormData: {
        'formConfig.clientId': 'client-id',
        'formConfig.clientSecret': 'client-secret',
        'formConfig.scope': 'scope',
    },
    updateFormData: {
        'formConfig.clientId': 'new-client-id',
        'formConfig.clientSecret': 'new-client-secret',
        'formConfig.scope': 'new-scope',
    },
    errorFormData: {
        'formConfig.clientId': '',
        'formConfig.clientSecret': '',
        'formConfig.scope': '',
    },
};
const apple = {
    factoryId: 'apple-universal',
    name: 'Apple',
    initialFormData: {
        'formConfig.clientId': 'client-id',
    },
    updateFormData: {
        'formConfig.clientId': 'new-client-id',
    },
    errorFormData: {
        'formConfig.clientId': '',
    },
};
const facebook = {
    factoryId: 'facebook-universal',
    name: 'Facebook',
    initialFormData: {
        'formConfig.clientId': 'client-id',
        'formConfig.clientSecret': 'client-secret',
        'formConfig.scope': 'scope',
    },
    updateFormData: {
        'formConfig.clientId': 'new-client-id',
        'formConfig.clientSecret': 'new-client-secret',
        'formConfig.scope': 'new-scope',
    },
    errorFormData: {
        'formConfig.clientId': '',
        'formConfig.clientSecret': '',
        'formConfig.scope': '',
    },
};
const github = {
    factoryId: 'github-universal',
    name: 'GitHub',
    initialFormData: {
        'formConfig.clientId': 'client-id',
        'formConfig.clientSecret': 'client-secret',
        'formConfig.scope': 'scope',
    },
    updateFormData: {
        'formConfig.clientId': 'new-client-id',
        'formConfig.clientSecret': 'new-client-secret',
        'formConfig.scope': 'new-scope',
    },
    errorFormData: {
        'formConfig.clientId': '',
        'formConfig.clientSecret': '',
        'formConfig.scope': '',
    },
};
const discord = {
    factoryId: 'discord-universal',
    name: 'Discord',
    initialFormData: {
        'formConfig.clientId': 'client-id',
        'formConfig.clientSecret': 'client-secret',
        'formConfig.scope': 'scope',
    },
    updateFormData: {
        'formConfig.clientId': 'new-client-id',
        'formConfig.clientSecret': 'new-client-secret',
        'formConfig.scope': 'new-scope',
    },
    errorFormData: {
        'formConfig.clientId': '',
        'formConfig.clientSecret': '',
        'formConfig.scope': '',
    },
};
const kakao = {
    factoryId: 'kakao-universal',
    name: 'Kakao',
    initialFormData: {
        'formConfig.clientId': 'client-id',
        'formConfig.clientSecret': 'client-secret',
    },
    updateFormData: {
        'formConfig.clientId': 'new-client-id',
        'formConfig.clientSecret': 'new-client-secret',
    },
    errorFormData: {
        'formConfig.clientId': '',
        'formConfig.clientSecret': '',
    },
};
const naver = {
    factoryId: 'naver-universal',
    name: 'Naver',
    initialFormData: {
        'formConfig.clientId': 'client-id',
        'formConfig.clientSecret': 'client-secret',
    },
    updateFormData: {
        'formConfig.clientId': 'new-client-id',
        'formConfig.clientSecret': 'new-client-secret',
    },
    errorFormData: {
        'formConfig.clientId': '',
        'formConfig.clientSecret': '',
    },
};
const microsoft = {
    factoryId: 'azuread-universal',
    name: 'Microsoft',
    initialFormData: {
        'formConfig.clientId': 'client-id',
        'formConfig.clientSecret': 'client-secret',
        'formConfig.cloudInstance': 'cloud-instance',
        'formConfig.tenantId': 'tenant-id',
    },
    updateFormData: {
        'formConfig.clientId': 'new-client-id',
        'formConfig.clientSecret': 'new-client-secret',
        'formConfig.cloudInstance': 'new-cloud-instance',
        'formConfig.tenantId': 'new-tenant-id',
    },
    errorFormData: {
        'formConfig.clientId': '',
        'formConfig.clientSecret': '',
        'formConfig.cloudInstance': '',
        'formConfig.tenantId': '',
    },
};
const feishu = {
    factoryId: 'feishu-web',
    name: 'Feishu',
    initialFormData: {
        'formConfig.appId': 'app-id',
        'formConfig.appSecret': 'app-secret',
    },
    updateFormData: {
        'formConfig.appId': 'new-app-id',
        'formConfig.appSecret': 'new-app-secret',
    },
    errorFormData: {
        'formConfig.appId': '',
        'formConfig.appSecret': '',
    },
};
const wechatNative = {
    groupFactoryId: 'wechat-native',
    factoryId: 'wechat-native',
    name: 'WeChat',
    initialFormData: {
        'formConfig.appId': 'app-id',
        'formConfig.appSecret': 'app-secret',
        'formConfig.universalLinks': 'universal-links',
    },
    updateFormData: {
        'formConfig.appId': 'new-app-id',
        'formConfig.appSecret': 'new-app-secret',
        'formConfig.universalLinks': 'new-universal-links',
    },
    errorFormData: {
        'formConfig.appId': '',
        'formConfig.appSecret': '',
        'formConfig.universalLinks': '',
    },
};
const wechatWeb = {
    groupFactoryId: 'wechat-native',
    factoryId: 'wechat-web',
    name: 'WeChat',
    initialFormData: {
        'formConfig.appId': 'app-id',
        'formConfig.appSecret': 'app-secret',
        'formConfig.scope': 'scope',
    },
    updateFormData: {
        'formConfig.appId': 'new-app-id',
        'formConfig.appSecret': 'new-app-secret',
        'formConfig.scope': 'new-scope',
    },
    errorFormData: {
        'formConfig.appId': '',
        'formConfig.appSecret': '',
        'formConfig.scope': '',
    },
};
const alipayNative = {
    groupFactoryId: 'alipay-native',
    factoryId: 'alipay-native',
    name: 'Alipay',
    initialFormData: {
        'formConfig.appId': 'app-id',
        'formConfig.privateKey': 'private-key',
    },
    updateFormData: {
        'formConfig.appId': 'new-app-id',
        'formConfig.privateKey': 'new-private-key',
    },
    errorFormData: {
        'formConfig.appId': '',
        'formConfig.privateKey': '',
    },
};
const alipayWeb = {
    groupFactoryId: 'alipay-native',
    factoryId: 'alipay-web',
    name: 'Alipay',
    initialFormData: {
        'formConfig.appId': 'app-id',
        'formConfig.privateKey': 'private-key',
        'formConfig.scope': 'scope',
    },
    updateFormData: {
        'formConfig.appId': 'new-app-id',
        'formConfig.privateKey': 'new-private-key',
        'formConfig.scope': 'new-scope',
    },
    errorFormData: {
        'formConfig.appId': '',
        'formConfig.privateKey': '',
        'formConfig.scope': '',
    },
};
const oauth2 = {
    factoryId: 'oauth2',
    name: 'OAuth 2.0',
    initialFormData: {
        'formConfig.authorizationEndpoint': 'authorization-endpoint',
        'formConfig.tokenEndpoint': 'token-endpoint',
        'formConfig.userInfoEndpoint': 'user-info-endpoint',
        'formConfig.clientId': 'client-id',
        'formConfig.clientSecret': 'client-secret-id',
        'formConfig.scope': 'scope',
    },
    updateFormData: {
        'formConfig.authorizationEndpoint': 'new-authorization-endpoint',
        'formConfig.tokenEndpoint': 'new-token-endpoint',
        'formConfig.userInfoEndpoint': 'new-user-info-endpoint',
        'formConfig.clientId': 'new-client-id',
        'formConfig.clientSecret': 'new-client-secret-id',
        'formConfig.scope': 'new-scope',
    },
    errorFormData: {
        'formConfig.authorizationEndpoint': '',
        'formConfig.tokenEndpoint': '',
        'formConfig.userInfoEndpoint': '',
        'formConfig.clientId': '',
        'formConfig.clientSecret': '',
        'formConfig.scope': '',
    },
    standardBasicFormData: {
        name: 'OAuth 2.0',
        target: 'oauth2',
    },
};
const oidc = {
    factoryId: 'oidc',
    name: 'OIDC',
    initialFormData: {
        'formConfig.authorizationEndpoint': 'authorization-endpoint',
        'formConfig.tokenEndpoint': 'token-endpoint',
        'formConfig.clientId': 'client-id',
        'formConfig.clientSecret': 'client-secret-id',
        'formConfig.scope': 'scope',
    },
    updateFormData: {
        'formConfig.authorizationEndpoint': 'new-authorization-endpoint',
        'formConfig.tokenEndpoint': 'new-token-endpoint',
        'formConfig.clientId': 'new-client-id',
        'formConfig.clientSecret': 'new-client-secret-id',
        'formConfig.scope': 'new-scope',
    },
    errorFormData: {
        'formConfig.authorizationEndpoint': '',
        'formConfig.tokenEndpoint': '',
        'formConfig.clientId': '',
        'formConfig.clientSecret': '',
    },
    standardBasicFormData: {
        name: 'OIDC',
        target: 'oidc',
    },
};
const saml = {
    factoryId: 'saml',
    name: 'SAML',
    initialFormData: {
        'formConfig.entityID': 'entity-id',
        'formConfig.signInEndpoint': 'sign-in-endpoint',
        'formConfig.x509Certificate': 'x509-certificate',
        'formConfig.idpMetadataXml': 'idp-metadata-xml',
        'formConfig.assertionConsumerServiceUrl': 'assertion-consumer-service-url',
    },
    updateFormData: {
        'formConfig.entityID': 'new-entity-id',
        'formConfig.signInEndpoint': 'new-sign-in-endpoint',
        'formConfig.x509Certificate': 'new-x509-certificate',
        'formConfig.idpMetadataXml': 'new-idp-metadata-xml',
        'formConfig.assertionConsumerServiceUrl': 'new-assertion-consumer-service-url',
    },
    errorFormData: {
        'formConfig.entityID': '',
        'formConfig.signInEndpoint': '',
        'formConfig.x509Certificate': '',
        'formConfig.idpMetadataXml': '',
        'formConfig.assertionConsumerServiceUrl': '',
    },
    standardBasicFormData: {
        name: 'SAML',
        target: 'saml',
    },
};
export const socialConnectorTestCases = [
    google,
    apple,
    facebook,
    github,
    discord,
    kakao,
    naver,
    microsoft,
    feishu,
    wechatNative,
    wechatWeb,
    alipayNative,
    alipayWeb,
    oauth2,
    oidc,
    saml,
];
/* eslint-enable max-lines */
//# sourceMappingURL=social-connector-test-cases.js.map