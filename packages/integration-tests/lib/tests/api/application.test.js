import { ApplicationType } from '@logto/schemas';
import { HTTPError } from 'got';
import { createApplication, getApplication, updateApplication, deleteApplication, getApplications, } from '#src/api/index.js';
describe('admin console application', () => {
    it('should create application successfully', async () => {
        const applicationName = 'test-create-app';
        const applicationType = ApplicationType.SPA;
        const application = await createApplication(applicationName, applicationType);
        expect(application.name).toBe(applicationName);
        expect(application.type).toBe(applicationType);
        const fetchedApplication = await getApplication(application.id);
        expect(fetchedApplication.name).toBe(applicationName);
        expect(fetchedApplication.id).toBe(application.id);
    });
    it('should update application details successfully', async () => {
        const application = await createApplication('test-update-app', ApplicationType.Traditional);
        const newApplicationDescription = `new_${application.description ?? ''}`;
        const newRedirectUris = application.oidcClientMetadata.redirectUris.concat([
            'https://logto.dev/callback',
        ]);
        await updateApplication(application.id, {
            description: newApplicationDescription,
            oidcClientMetadata: {
                redirectUris: newRedirectUris,
            },
            customClientMetadata: { rotateRefreshToken: true, refreshTokenTtlInDays: 10 },
        });
        const updatedApplication = await getApplication(application.id);
        expect(updatedApplication.description).toBe(newApplicationDescription);
        expect(updatedApplication.oidcClientMetadata.redirectUris).toEqual(newRedirectUris);
        expect(updatedApplication.customClientMetadata).toStrictEqual({
            rotateRefreshToken: true,
            refreshTokenTtlInDays: 10,
        });
    });
    it('should update application "admin" successfully', async () => {
        const application = await createApplication('test-update-is-admin', ApplicationType.MachineToMachine);
        await updateApplication(application.id, {
            isAdmin: true,
        });
        const updatedApplication = await getApplication(application.id);
        expect(updatedApplication.isAdmin).toBeTruthy();
        await updateApplication(application.id, {
            isAdmin: false,
        });
        const updatedAgainApplication = await getApplication(application.id);
        expect(updatedAgainApplication.isAdmin).toBeFalsy();
    });
    it('should get demo app application successfully', async () => {
        const application = await getApplication('demo-app');
        expect(application.id).toBe('demo-app');
    });
    it('should fetch all applications created above', async () => {
        const applications = await getApplications();
        const applicationNames = applications.map(({ name }) => name);
        expect(applicationNames).toContain('test-create-app');
        expect(applicationNames).toContain('test-update-app');
    });
    it('should create m2m application successfully and can get only m2m applications by specifying types', async () => {
        await createApplication('test-m2m-app-1', ApplicationType.MachineToMachine);
        await createApplication('test-m2m-app-2', ApplicationType.MachineToMachine);
        const m2mApps = await getApplications([ApplicationType.MachineToMachine]);
        const m2mAppNames = m2mApps.map(({ name }) => name);
        expect(m2mAppNames).toContain('test-m2m-app-1');
        expect(m2mAppNames).toContain('test-m2m-app-2');
    });
    it('total number of apps should equal to the sum of number of each types', async () => {
        const allApps = await getApplications();
        const m2mApps = await getApplications([ApplicationType.MachineToMachine]);
        const spaApps = await getApplications([ApplicationType.SPA]);
        const otherApps = await getApplications([ApplicationType.Native, ApplicationType.Traditional]);
        expect(allApps.length).toBe(m2mApps.length + spaApps.length + otherApps.length);
        const allAppNames = allApps.map(({ name }) => name);
        const spaAppNames = spaApps.map(({ name }) => name);
        const otherAppNames = otherApps.map(({ name }) => name);
        expect(allAppNames).toContain('test-m2m-app-1');
        expect(allAppNames).toContain('test-m2m-app-2');
        expect(spaAppNames).not.toContain('test-m2m-app-1');
        expect(spaAppNames).not.toContain('test-m2m-app-2');
        expect(otherAppNames).not.toContain('test-m2m-app-1');
        expect(otherAppNames).not.toContain('test-m2m-app-2');
    });
    it('should delete application successfully', async () => {
        const application = await createApplication('test-delete-app', ApplicationType.Native);
        await deleteApplication(application.id);
        const response = await getApplication(application.id).catch((error) => error);
        expect(response instanceof HTTPError && response.response.statusCode === 404).toBe(true);
    });
});
//# sourceMappingURL=application.test.js.map