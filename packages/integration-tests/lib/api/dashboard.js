import { authedAdminApi } from './api.js';
export const getTotalUsersCount = async () => authedAdminApi.get('dashboard/users/total').json();
export const getNewUsersData = async () => authedAdminApi.get('dashboard/users/new').json();
export const getActiveUsersData = async () => authedAdminApi.get('dashboard/users/active').json();
//# sourceMappingURL=dashboard.js.map