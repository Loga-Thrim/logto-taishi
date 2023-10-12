export declare enum PrivateKeyType {
    RSA = "rsa",
    EC = "ec"
}
export declare const generateOidcPrivateKey: (type?: PrivateKeyType) => Promise<string>;
export declare const generateOidcCookieKey: () => string;
