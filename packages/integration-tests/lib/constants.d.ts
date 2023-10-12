import { SignInIdentifier } from '@logto/schemas';
export declare const logtoUrl: string;
export declare const logtoConsoleUrl: string;
export declare const logtoCloudUrl: string;
export declare const demoAppUrl: URL;
export declare const discoveryUrl: string;
export declare const demoAppRedirectUri: string;
export declare const adminConsoleRedirectUri: string;
export declare const signUpIdentifiers: {
    username: SignInIdentifier[];
    email: SignInIdentifier[];
    sms: SignInIdentifier[];
    emailOrSms: SignInIdentifier[];
    none: never[];
};
export declare const consoleUsername = "admin";
export declare const consolePassword = "some_random_password_123";
