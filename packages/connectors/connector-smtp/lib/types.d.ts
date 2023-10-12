import { z } from 'zod';
export declare enum ContextType {
    Text = "text/plain",
    Html = "text/html"
}
export declare const smtpConfigGuard: z.ZodObject<{
    /**
     * Connection Options
     * See https://nodemailer.com/smtp/#connection-options.
     */
    name: z.ZodOptional<z.ZodString>;
    localAddress: z.ZodOptional<z.ZodString>;
    connectionTimeout: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    greetingTimeout: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    socketTimeout: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    dnsTimeout: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    /**
     * TLS Options
     */
    secure: z.ZodDefault<z.ZodBoolean>;
    tls: z.ZodDefault<z.ZodOptional<z.ZodUnion<[z.ZodObject<{}, "strip", z.ZodUnknown, {
        [x: string]: unknown;
    }, {
        [x: string]: unknown;
    }>, z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>]>>>;
    servername: z.ZodOptional<z.ZodString>;
    ignoreTLS: z.ZodOptional<z.ZodBoolean>;
    requireTLS: z.ZodOptional<z.ZodBoolean>;
    disableFileAccess: z.ZodOptional<z.ZodBoolean>;
    disableUrlAccess: z.ZodOptional<z.ZodBoolean>;
    logger: z.ZodOptional<z.ZodBoolean>;
    debug: z.ZodOptional<z.ZodBoolean>;
    host: z.ZodString;
    port: z.ZodNumber;
    auth: z.ZodUnion<[z.ZodUnion<[z.ZodObject<{
        user: z.ZodString;
        pass: z.ZodString;
        type: z.ZodOptional<z.ZodEnum<["login", "Login", "LOGIN"]>>;
    }, "strip", z.ZodTypeAny, {
        type?: "login" | "Login" | "LOGIN" | undefined;
        user: string;
        pass: string;
    }, {
        type?: "login" | "Login" | "LOGIN" | undefined;
        user: string;
        pass: string;
    }>, z.ZodObject<{
        type: z.ZodOptional<z.ZodEnum<["oauth2", "OAuth2", "OAUTH2"]>>;
        user: z.ZodString;
        privateKey: z.ZodUnion<[z.ZodString, z.ZodObject<{
            key: z.ZodString;
            passphrase: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            key: string;
            passphrase: string;
        }, {
            key: string;
            passphrase: string;
        }>]>;
        serviceClient: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type?: "oauth2" | "OAuth2" | "OAUTH2" | undefined;
        user: string;
        privateKey: string | {
            key: string;
            passphrase: string;
        };
        serviceClient: string;
    }, {
        type?: "oauth2" | "OAuth2" | "OAUTH2" | undefined;
        user: string;
        privateKey: string | {
            key: string;
            passphrase: string;
        };
        serviceClient: string;
    }>]>, z.ZodObject<{
        type: z.ZodOptional<z.ZodEnum<["oauth2", "OAuth2", "OAUTH2"]>>;
        user: z.ZodString;
        clientId: z.ZodOptional<z.ZodString>;
        clientSecret: z.ZodOptional<z.ZodString>;
        refreshToken: z.ZodOptional<z.ZodString>;
        accessToken: z.ZodOptional<z.ZodString>;
        expires: z.ZodOptional<z.ZodNumber>;
        accessUrl: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: "oauth2" | "OAuth2" | "OAUTH2" | undefined;
        clientId?: string | undefined;
        clientSecret?: string | undefined;
        refreshToken?: string | undefined;
        accessToken?: string | undefined;
        expires?: number | undefined;
        accessUrl?: string | undefined;
        user: string;
    }, {
        type?: "oauth2" | "OAuth2" | "OAUTH2" | undefined;
        clientId?: string | undefined;
        clientSecret?: string | undefined;
        refreshToken?: string | undefined;
        accessToken?: string | undefined;
        expires?: number | undefined;
        accessUrl?: string | undefined;
        user: string;
    }>]>;
    fromEmail: z.ZodString;
    replyTo: z.ZodOptional<z.ZodString>;
    templates: z.ZodEffects<z.ZodArray<z.ZodObject<{
        usageType: z.ZodString;
        contentType: z.ZodNativeEnum<typeof ContextType>;
        subject: z.ZodString;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        usageType: string;
        contentType: ContextType;
        subject: string;
        content: string;
    }, {
        usageType: string;
        contentType: ContextType;
        subject: string;
        content: string;
    }>, "many">, {
        usageType: string;
        contentType: ContextType;
        subject: string;
        content: string;
    }[], {
        usageType: string;
        contentType: ContextType;
        subject: string;
        content: string;
    }[]>;
}, "strip", z.ZodTypeAny, {
    replyTo?: string | undefined;
    logger?: boolean | undefined;
    debug?: boolean | undefined;
    disableFileAccess?: boolean | undefined;
    disableUrlAccess?: boolean | undefined;
    name?: string | undefined;
    localAddress?: string | undefined;
    servername?: string | undefined;
    ignoreTLS?: boolean | undefined;
    requireTLS?: boolean | undefined;
    host: string;
    port: number;
    auth: {
        type?: "login" | "Login" | "LOGIN" | undefined;
        user: string;
        pass: string;
    } | {
        type?: "oauth2" | "OAuth2" | "OAUTH2" | undefined;
        user: string;
        privateKey: string | {
            key: string;
            passphrase: string;
        };
        serviceClient: string;
    } | {
        type?: "oauth2" | "OAuth2" | "OAUTH2" | undefined;
        clientId?: string | undefined;
        clientSecret?: string | undefined;
        refreshToken?: string | undefined;
        accessToken?: string | undefined;
        expires?: number | undefined;
        accessUrl?: string | undefined;
        user: string;
    };
    fromEmail: string;
    templates: {
        usageType: string;
        contentType: ContextType;
        subject: string;
        content: string;
    }[];
    connectionTimeout: number;
    greetingTimeout: number;
    socketTimeout: number;
    dnsTimeout: number;
    secure: boolean;
    tls: {
        [x: string]: unknown;
    } | {};
}, {
    replyTo?: string | undefined;
    logger?: boolean | undefined;
    debug?: boolean | undefined;
    disableFileAccess?: boolean | undefined;
    disableUrlAccess?: boolean | undefined;
    name?: string | undefined;
    localAddress?: string | undefined;
    connectionTimeout?: number | undefined;
    greetingTimeout?: number | undefined;
    socketTimeout?: number | undefined;
    dnsTimeout?: number | undefined;
    secure?: boolean | undefined;
    tls?: {
        [x: string]: unknown;
    } | {} | undefined;
    servername?: string | undefined;
    ignoreTLS?: boolean | undefined;
    requireTLS?: boolean | undefined;
    host: string;
    port: number;
    auth: {
        type?: "login" | "Login" | "LOGIN" | undefined;
        user: string;
        pass: string;
    } | {
        type?: "oauth2" | "OAuth2" | "OAUTH2" | undefined;
        user: string;
        privateKey: string | {
            key: string;
            passphrase: string;
        };
        serviceClient: string;
    } | {
        type?: "oauth2" | "OAuth2" | "OAUTH2" | undefined;
        clientId?: string | undefined;
        clientSecret?: string | undefined;
        refreshToken?: string | undefined;
        accessToken?: string | undefined;
        expires?: number | undefined;
        accessUrl?: string | undefined;
        user: string;
    };
    fromEmail: string;
    templates: {
        usageType: string;
        contentType: ContextType;
        subject: string;
        content: string;
    }[];
}>;
export type SmtpConfig = z.infer<typeof smtpConfigGuard>;
