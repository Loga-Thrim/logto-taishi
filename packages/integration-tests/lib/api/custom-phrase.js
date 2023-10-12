import { authedAdminApi } from './api.js';
export const listCustomPhrases = async () => authedAdminApi.get('custom-phrases').json();
export const getCustomPhrase = async (languageTag) => authedAdminApi.get(`custom-phrases/${languageTag}`).json();
export const createOrUpdateCustomPhrase = async (languageTag, translation) => authedAdminApi
    .put({ url: `custom-phrases/${languageTag}`, json: translation })
    .json();
export const deleteCustomPhrase = async (languageTag) => authedAdminApi.delete(`custom-phrases/${languageTag}`).json();
//# sourceMappingURL=custom-phrase.js.map