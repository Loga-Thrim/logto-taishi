import type { SignInExperience } from '@logto/schemas';
export declare const getSignInExperience: () => Promise<SignInExperience>;
export declare const updateSignInExperience: (signInExperience: Partial<SignInExperience>) => Promise<SignInExperience>;
