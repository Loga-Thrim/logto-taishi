import type { SignInExperience } from '@logto/schemas';
export declare const enableAllPasswordSignInMethods: (signUp?: SignInExperience['signUp']) => Promise<SignInExperience>;
export declare const enableAllVerificationCodeSignInMethods: (signUp?: SignInExperience['signUp']) => Promise<SignInExperience>;
export declare const enableMandatoryMfaWithTotp: () => Promise<SignInExperience>;
