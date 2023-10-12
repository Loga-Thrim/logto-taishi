import { z } from 'zod';
import type * as saml from 'samlify';
export declare enum SigningAlgorithm {
    RSA_SHA1 = "http://www.w3.org/2000/09/xmldsig#rsa-sha1",
    RSA_SHA256 = "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256",
    RSA_SHA512 = "http://www.w3.org/2001/04/xmldsig-more#rsa-sha512"
}
export declare enum NameIDFormat {
    Unspecified = "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified",
    EmailAddress = "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress",
    x590SubjectName = "urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName",
    Persistent = "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent",
    Transient = "urn:oasis:names:tc:SAML:2.0:nameid-format:transient"
}
export declare const profileMapGuard: z.ZodDefault<z.ZodOptional<z.ZodObject<{
    id: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    email: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    phone: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    name: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    avatar: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    phone: string;
    name: string;
    avatar: string;
}, {
    id?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    name?: string | undefined;
    avatar?: string | undefined;
}>>>;
export type ProfileMap = z.infer<typeof profileMapGuard>;
export declare const samlConfigGuard: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    entityID: z.ZodString;
    signInEndpoint: z.ZodOptional<z.ZodString>;
    x509Certificate: z.ZodString;
    idpMetadataXml: z.ZodString;
    assertionConsumerServiceUrl: z.ZodString;
    signAuthnRequest: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    requestSignatureAlgorithm: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof SigningAlgorithm>>>;
    messageSigningOrder: z.ZodDefault<z.ZodOptional<z.ZodEnum<["sign-then-encrypt", "encrypt-then-sign"]>>>;
    encryptAssertion: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    privateKey: z.ZodOptional<z.ZodString>;
    privateKeyPass: z.ZodOptional<z.ZodString>;
    encPrivateKey: z.ZodOptional<z.ZodString>;
    encPrivateKeyPass: z.ZodOptional<z.ZodString>;
    nameIDFormat: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof NameIDFormat>>>, NameIDFormat[], NameIDFormat | undefined>;
    timeout: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    authnRequestBinding: z.ZodDefault<z.ZodOptional<z.ZodEnum<["HTTP-Redirect"]>>>;
    assertionBinding: z.ZodDefault<z.ZodOptional<z.ZodEnum<["HTTP-POST"]>>>;
    profileMap: z.ZodDefault<z.ZodOptional<z.ZodObject<{
        id: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        email: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        phone: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        name: z.ZodDefault<z.ZodOptional<z.ZodString>>;
        avatar: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        phone: string;
        name: string;
        avatar: string;
    }, {
        id?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        name?: string | undefined;
        avatar?: string | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    signInEndpoint?: string | undefined;
    privateKey?: string | undefined;
    privateKeyPass?: string | undefined;
    encPrivateKey?: string | undefined;
    encPrivateKeyPass?: string | undefined;
    entityID: string;
    x509Certificate: string;
    idpMetadataXml: string;
    assertionConsumerServiceUrl: string;
    requestSignatureAlgorithm: SigningAlgorithm;
    messageSigningOrder: "sign-then-encrypt" | "encrypt-then-sign";
    signAuthnRequest: boolean;
    encryptAssertion: boolean;
    nameIDFormat: NameIDFormat[];
    timeout: number;
    profileMap: {
        id: string;
        email: string;
        phone: string;
        name: string;
        avatar: string;
    };
    authnRequestBinding: "HTTP-Redirect";
    assertionBinding: "HTTP-POST";
}, {
    signInEndpoint?: string | undefined;
    requestSignatureAlgorithm?: SigningAlgorithm | undefined;
    messageSigningOrder?: "sign-then-encrypt" | "encrypt-then-sign" | undefined;
    signAuthnRequest?: boolean | undefined;
    privateKey?: string | undefined;
    privateKeyPass?: string | undefined;
    encryptAssertion?: boolean | undefined;
    encPrivateKey?: string | undefined;
    encPrivateKeyPass?: string | undefined;
    nameIDFormat?: NameIDFormat | undefined;
    timeout?: number | undefined;
    profileMap?: {
        id?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        name?: string | undefined;
        avatar?: string | undefined;
    } | undefined;
    authnRequestBinding?: "HTTP-Redirect" | undefined;
    assertionBinding?: "HTTP-POST" | undefined;
    entityID: string;
    x509Certificate: string;
    idpMetadataXml: string;
    assertionConsumerServiceUrl: string;
}>, {
    signInEndpoint?: string | undefined;
    privateKey?: string | undefined;
    privateKeyPass?: string | undefined;
    encPrivateKey?: string | undefined;
    encPrivateKeyPass?: string | undefined;
    entityID: string;
    x509Certificate: string;
    idpMetadataXml: string;
    assertionConsumerServiceUrl: string;
    requestSignatureAlgorithm: SigningAlgorithm;
    messageSigningOrder: "sign-then-encrypt" | "encrypt-then-sign";
    signAuthnRequest: boolean;
    encryptAssertion: boolean;
    nameIDFormat: NameIDFormat[];
    timeout: number;
    profileMap: {
        id: string;
        email: string;
        phone: string;
        name: string;
        avatar: string;
    };
    authnRequestBinding: "HTTP-Redirect";
    assertionBinding: "HTTP-POST";
}, {
    signInEndpoint?: string | undefined;
    requestSignatureAlgorithm?: SigningAlgorithm | undefined;
    messageSigningOrder?: "sign-then-encrypt" | "encrypt-then-sign" | undefined;
    signAuthnRequest?: boolean | undefined;
    privateKey?: string | undefined;
    privateKeyPass?: string | undefined;
    encryptAssertion?: boolean | undefined;
    encPrivateKey?: string | undefined;
    encPrivateKeyPass?: string | undefined;
    nameIDFormat?: NameIDFormat | undefined;
    timeout?: number | undefined;
    profileMap?: {
        id?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        name?: string | undefined;
        avatar?: string | undefined;
    } | undefined;
    authnRequestBinding?: "HTTP-Redirect" | undefined;
    assertionBinding?: "HTTP-POST" | undefined;
    entityID: string;
    x509Certificate: string;
    idpMetadataXml: string;
    assertionConsumerServiceUrl: string;
}>, {
    signInEndpoint?: string | undefined;
    privateKey?: string | undefined;
    privateKeyPass?: string | undefined;
    encPrivateKey?: string | undefined;
    encPrivateKeyPass?: string | undefined;
    entityID: string;
    x509Certificate: string;
    idpMetadataXml: string;
    assertionConsumerServiceUrl: string;
    requestSignatureAlgorithm: SigningAlgorithm;
    messageSigningOrder: "sign-then-encrypt" | "encrypt-then-sign";
    signAuthnRequest: boolean;
    encryptAssertion: boolean;
    nameIDFormat: NameIDFormat[];
    timeout: number;
    profileMap: {
        id: string;
        email: string;
        phone: string;
        name: string;
        avatar: string;
    };
    authnRequestBinding: "HTTP-Redirect";
    assertionBinding: "HTTP-POST";
}, {
    signInEndpoint?: string | undefined;
    requestSignatureAlgorithm?: SigningAlgorithm | undefined;
    messageSigningOrder?: "sign-then-encrypt" | "encrypt-then-sign" | undefined;
    signAuthnRequest?: boolean | undefined;
    privateKey?: string | undefined;
    privateKeyPass?: string | undefined;
    encryptAssertion?: boolean | undefined;
    encPrivateKey?: string | undefined;
    encPrivateKeyPass?: string | undefined;
    nameIDFormat?: NameIDFormat | undefined;
    timeout?: number | undefined;
    profileMap?: {
        id?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        name?: string | undefined;
        avatar?: string | undefined;
    } | undefined;
    authnRequestBinding?: "HTTP-Redirect" | undefined;
    assertionBinding?: "HTTP-POST" | undefined;
    entityID: string;
    x509Certificate: string;
    idpMetadataXml: string;
    assertionConsumerServiceUrl: string;
}>;
export type SamlConfig = z.infer<typeof samlConfigGuard>;
export type ESamlHttpRequest = Parameters<saml.ServiceProviderInstance['parseLoginResponse']>[2];
export declare const samlHttpRequestGuard: z.ZodObject<{
    query: z.ZodOptional<z.ZodUnknown>;
    body: z.ZodOptional<z.ZodUnknown>;
    octetString: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    query?: unknown;
    body?: unknown;
    octetString?: string | undefined;
}, {
    query?: unknown;
    body?: unknown;
    octetString?: string | undefined;
}>;
