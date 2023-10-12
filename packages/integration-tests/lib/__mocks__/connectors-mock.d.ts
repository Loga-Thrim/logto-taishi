export declare const aliyunSmsConnectorId = "aliyun-short-message-service";
export declare const aliyunSmsConnectorConfig: {
    accessKeyId: string;
    accessKeySecret: string;
    signName: string;
    templates: {
        usageType: string;
        templateCode: string;
    }[];
};
export declare const twilioSmsConnectorId = "twilio-short-message-service";
export declare const twilioSmsConnectorConfig: {
    accountSID: string;
    authToken: string;
    fromMessagingServiceSID: string;
    templates: {
        content: string;
        usageType: string;
    }[];
};
export declare const aliyunEmailConnectorId = "aliyun-direct-mail";
export declare const aliyunEmailConnectorConfig: {
    accessKeyId: string;
    accessKeySecret: string;
    accountName: string;
    fromAlias: string;
    templates: {
        subject: string;
        content: string;
        usageType: string;
    }[];
};
export declare const sendgridEmailConnectorId = "sendgrid-email-service";
export declare const sendgridEmailConnectorConfig: {
    apiKey: string;
    fromEmail: string;
    fromName: string;
    templates: {
        usageType: string;
        type: string;
        subject: string;
        content: string;
    }[];
};
export declare const mockSmsConnectorId = "mock-short-message-service";
export declare const mockSmsConnectorConfig: {
    accountSID: string;
    authToken: string;
    fromMessagingServiceSID: string;
    templates: {
        content: string;
        usageType: string;
    }[];
};
export declare const mockEmailConnectorId = "mock-email-service";
export declare const mockEmailConnectorConfig: {
    apiKey: string;
    fromEmail: string;
    fromName: string;
    templates: {
        usageType: string;
        type: string;
        subject: string;
        content: string;
    }[];
};
export declare const mockAlternativeEmailConnectorId = "mock-email-service-alternative";
export declare const mockAlternativeEmailConnectorConfig: {
    apiKey: string;
    fromEmail: string;
    fromName: string;
    templates: {
        usageType: string;
        type: string;
        subject: string;
        content: string;
    }[];
};
export declare const mockSocialConnectorId = "mock-social-connector";
export declare const mockSocialConnectorTarget = "mock-social";
export declare const mockSocialConnectorConfig: {
    clientId: string;
    clientSecret: string;
};
export declare const mockSocialConnectorNewConfig: {
    clientId: string;
    clientSecret: string;
};
