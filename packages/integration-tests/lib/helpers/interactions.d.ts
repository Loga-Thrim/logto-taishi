import type { UsernamePasswordPayload, EmailPasswordPayload, PhonePasswordPayload } from '@logto/schemas';
export declare const registerNewUser: (username: string, password: string) => Promise<string>;
export declare const signInWithPassword: (payload: UsernamePasswordPayload | EmailPasswordPayload | PhonePasswordPayload) => Promise<void>;
export declare const createNewSocialUserWithUsernameAndPassword: (connectorId: string) => Promise<string>;
export declare const resetPassword: (profile: {
    email: string;
} | {
    phone: string;
}, newPassword: string) => Promise<void>;
