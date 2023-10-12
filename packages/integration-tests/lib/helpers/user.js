import { createUser } from '#src/api/index.js';
import { generateUsername, generateEmail, generatePhone, generatePassword, generateName, } from '#src/utils.js';
export const generateNewUserProfile = ({ username, password, name, primaryEmail, primaryPhone, }) => {
    // @ts-expect-error - TS can't map the type of userProfile to the UserProfile defined above
    const userProfile = {
        name: generateName(),
        ...(username ? { username: generateUsername() } : {}),
        ...(password ? { password: generatePassword() } : {}),
        ...(name ? { name: generateName() } : {}),
        ...(primaryEmail ? { primaryEmail: generateEmail() } : {}),
        ...(primaryPhone ? { primaryPhone: generatePhone() } : {}),
    };
    return userProfile;
};
export const generateNewUser = async (options) => {
    const userProfile = generateNewUserProfile(options);
    const user = await createUser(userProfile);
    return { user, userProfile };
};
//# sourceMappingURL=user.js.map