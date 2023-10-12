import api from './api.js';
export const putInteraction = async (cookie, payload) => api
    .put('interaction', {
    headers: { cookie },
    json: payload,
    followRedirect: false,
})
    .json();
export const deleteInteraction = async (cookie) => api
    .delete('interaction', {
    headers: { cookie },
    followRedirect: false,
})
    .json();
export const putInteractionEvent = async (cookie, payload) => api
    .put('interaction/event', { headers: { cookie }, json: payload, followRedirect: false })
    .json();
export const patchInteractionIdentifiers = async (cookie, payload) => api
    .patch('interaction/identifiers', {
    headers: { cookie },
    json: payload,
    followRedirect: false,
})
    .json();
export const patchInteractionProfile = async (cookie, payload) => api
    .patch('interaction/profile', {
    headers: { cookie },
    json: payload,
    followRedirect: false,
})
    .json();
export const putInteractionProfile = async (cookie, payload) => api
    .put('interaction/profile', {
    headers: { cookie },
    json: payload,
    followRedirect: false,
})
    .json();
export const putInteractionBindMfa = async (cookie, payload) => api
    .put('interaction/bind-mfa', {
    headers: { cookie },
    json: payload,
    followRedirect: false,
})
    .json();
export const putInteractionMfa = async (cookie, payload) => api
    .put('interaction/mfa', {
    headers: { cookie },
    json: payload,
    followRedirect: false,
})
    .json();
export const deleteInteractionProfile = async (cookie) => api
    .delete('interaction/profile', {
    headers: { cookie },
    followRedirect: false,
})
    .json();
export const submitInteraction = async (api, cookie) => api
    .post('interaction/submit', { headers: { cookie }, followRedirect: false })
    .json();
export const sendVerificationCode = async (cookie, payload) => api.post('interaction/verification/verification-code', {
    headers: { cookie },
    json: payload,
    followRedirect: false,
});
export const createSocialAuthorizationUri = async (cookie, payload) => api.post('interaction/verification/social-authorization-uri', {
    headers: { cookie },
    json: payload,
    followRedirect: false,
});
export const initTotp = async (cookie) => api
    .post('interaction/verification/totp', {
    headers: { cookie },
    json: {},
    followRedirect: false,
})
    .json();
export const consent = async (api, cookie) => api
    .post('interaction/consent', {
    headers: {
        cookie,
    },
    followRedirect: false,
})
    .json();
//# sourceMappingURL=interaction.js.map