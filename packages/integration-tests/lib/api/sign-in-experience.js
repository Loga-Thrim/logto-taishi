import { authedAdminApi } from './api.js';
export const getSignInExperience = async () => authedAdminApi.get('sign-in-exp').json();
export const updateSignInExperience = async (signInExperience) => authedAdminApi
    .patch('sign-in-exp', {
    json: signInExperience,
})
    .json();
//# sourceMappingURL=sign-in-experience.js.map