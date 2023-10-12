import { getAdminConsoleConfig, updateAdminConsoleConfig } from '#src/api/index.js';
const defaultAdminConsoleConfig = {
    signInExperienceCustomized: false,
};
describe('admin console sign-in experience', () => {
    it('should get admin console config successfully', async () => {
        const adminConsoleConfig = await getAdminConsoleConfig();
        expect(adminConsoleConfig).toBeTruthy();
    });
    it('should update admin console config successfully', async () => {
        const newAdminConsoleConfig = {
            signInExperienceCustomized: true,
        };
        const updatedAdminConsoleConfig = await updateAdminConsoleConfig(newAdminConsoleConfig);
        expect(updatedAdminConsoleConfig).toMatchObject({
            ...defaultAdminConsoleConfig,
            ...newAdminConsoleConfig,
        });
    });
});
//# sourceMappingURL=logto-config.test.js.map