export type NewUserProfileOptions = {
    username?: true;
    password?: true;
    name?: true;
    primaryEmail?: true;
    primaryPhone?: true;
};
export declare const generateNewUserProfile: <T extends NewUserProfileOptions>({ username, password, name, primaryEmail, primaryPhone, }: T) => { [K in keyof T]: T[K] extends true ? string : never; };
export declare const generateNewUser: <T extends NewUserProfileOptions>(options: T) => Promise<{
    user: import("@logto/schemas").User;
    userProfile: { [K in keyof T]: T[K] extends true ? string : never; };
}>;
