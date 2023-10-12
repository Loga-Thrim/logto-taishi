import { ApplicationType } from '@logto/schemas';
export type ApplicationCase = {
    framework: string;
    name: string;
    description: string;
    guideFilename: string;
    sample: {
        repo: string;
        path: string;
    };
    redirectUri: string;
    postSignOutRedirectUri: string;
};
export declare const initialApp: ApplicationCase;
export declare const testApp: ApplicationCase;
export declare const frameworkGroupLabels: readonly ["Popular and for you", "Traditional web app", "Single page app", "Native", "Machine-to-machine"];
export type ApplicationMetadata = {
    type: ApplicationType;
    name: string;
    description: string;
};
export declare const applicationTypesMetadata: {
    type: ApplicationType;
    name: string;
    description: string;
}[];
