import type { SetSession } from '@logto/connector-kit';
import type { ESamlHttpRequest, ProfileMap, SamlConfig } from './types.js';
export declare const userProfileMapping: (originUserProfile: Record<string, unknown>, keyMapping: ProfileMap) => {
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    avatar?: string | undefined;
    id: string;
};
export declare const getUserInfoFromRawUserProfile: (rawUserProfile: Record<string, unknown>, keyMapping: ProfileMap) => {
    name?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
    avatar?: string | undefined;
    id: string;
};
export declare const samlAssertionHandler: (request: ESamlHttpRequest, options: SamlConfig, setSession: SetSession) => Promise<void | Record<string, unknown>>;
