import { ApplicationType } from '@logto/schemas';
export const initialApp = {
    framework: 'Next.js',
    name: 'Next.js App',
    description: 'This is a Next.js app',
    guideFilename: 'web-next',
    sample: {
        repo: 'js',
        path: 'packages/next-sample',
    },
    redirectUri: 'https://my.test.app/sign-in',
    postSignOutRedirectUri: 'https://my.test.app/sign-out',
};
export const testApp = {
    framework: 'Go',
    name: 'Go App',
    description: 'This is a Go app',
    guideFilename: 'web-go',
    sample: {
        repo: 'go',
        path: 'gin-sample',
    },
    redirectUri: 'https://my.test.app/sign-in',
    postSignOutRedirectUri: 'https://my.test.app/sign-out',
};
export const frameworkGroupLabels = [
    'Popular and for you',
    'Traditional web app',
    'Single page app',
    'Native',
    'Machine-to-machine',
];
export const applicationTypesMetadata = Object.entries(ApplicationType).map(([key, value]) => ({
    type: value,
    name: `${key} app`,
    description: `This is a ${key} app`,
}));
//# sourceMappingURL=constants.js.map