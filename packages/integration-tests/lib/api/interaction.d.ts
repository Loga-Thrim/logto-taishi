import type { InteractionEvent, IdentifierPayload, Profile, RequestVerificationCodePayload, BindMfaPayload, VerifyMfaPayload } from '@logto/schemas';
import type { Got } from 'got';
export type RedirectResponse = {
    redirectTo: string;
};
export type InteractionPayload = {
    event: InteractionEvent;
    identifier?: IdentifierPayload;
    profile?: Profile;
};
export declare const putInteraction: (cookie: string, payload: InteractionPayload) => Promise<unknown>;
export declare const deleteInteraction: (cookie: string) => Promise<unknown>;
export declare const putInteractionEvent: (cookie: string, payload: {
    event: InteractionEvent;
}) => Promise<unknown>;
export declare const patchInteractionIdentifiers: (cookie: string, payload: IdentifierPayload) => Promise<unknown>;
export declare const patchInteractionProfile: (cookie: string, payload: Profile) => Promise<unknown>;
export declare const putInteractionProfile: (cookie: string, payload: Profile) => Promise<unknown>;
export declare const putInteractionBindMfa: (cookie: string, payload: BindMfaPayload) => Promise<unknown>;
export declare const putInteractionMfa: (cookie: string, payload: VerifyMfaPayload) => Promise<unknown>;
export declare const deleteInteractionProfile: (cookie: string) => Promise<unknown>;
export declare const submitInteraction: (api: Got, cookie: string) => Promise<RedirectResponse>;
export declare const sendVerificationCode: (cookie: string, payload: RequestVerificationCodePayload) => Promise<import("got").Response<string>>;
export type SocialAuthorizationUriPayload = {
    connectorId: string;
    state: string;
    redirectUri: string;
};
export declare const createSocialAuthorizationUri: (cookie: string, payload: SocialAuthorizationUriPayload) => Promise<import("got").Response<string>>;
export declare const initTotp: (cookie: string) => Promise<{
    secret: string;
}>;
export declare const consent: (api: Got, cookie: string) => Promise<RedirectResponse>;
