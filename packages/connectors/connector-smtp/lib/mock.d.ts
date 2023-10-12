export declare const mockedConfig: {
    host: string;
    port: number;
    auth: {
        pass: string;
        user: string;
    };
    fromEmail: string;
    templates: {
        contentType: string;
        content: string;
        subject: string;
        usageType: string;
    }[];
};
export declare const mockedOauth2AuthWithToken: {
    user: string;
    type: string;
    clientId: string;
    clientSecret: string;
    accessToken: string;
};
export declare const mockedOauth2AuthWithKey: {
    user: string;
    serviceClient: string;
    privateKey: string;
};
export declare const mockedTlsOptionsWithoutTls: {
    servername: string;
    ignoreTLS: boolean;
    requireTLS: boolean;
};
export declare const mockedTlsOptionsWithTls: {
    tls: {
        rejectUnauthorized: boolean;
    };
    servername: string;
    ignoreTLS: boolean;
    requireTLS: boolean;
};
export declare const mockedConnectionOptionsValid: {
    localAddress: string;
    name: string;
};
export declare const mockedConnectionOptionsInvalid: {
    name: string;
};
export declare const mockedDebuggingOptions: {
    logger: boolean;
    debug: boolean;
};
export declare const mockedSecurityOptions: {
    disableFileAccess: boolean;
    disableUrlAccess: boolean;
};
