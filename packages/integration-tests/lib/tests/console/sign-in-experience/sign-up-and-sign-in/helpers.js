import { expectToSaveSignInExperience } from '../helpers.js';
export const expectToSelectSignUpIdentifier = async (page, identifier) => {
    const signUpIdentifierField = await expect(page).toMatchElement('div[class$=field]:has(div[class$=headline] > div[class$=title])', {
        text: 'Sign-up identifier',
    });
    await expect(signUpIdentifierField).toClick('div[role=button][class*=select]');
    // Wait for the dropdown to be rendered in the correct position
    await page.waitForTimeout(500);
    await expect(page).toClick('.ReactModalPortal div[class$=dropdownContainer] div[role=menuitem] div', {
        text: identifier,
    });
    await page.waitForSelector('.ReactModalPortal div[class$=dropdownContainer]', {
        hidden: true,
    });
    await expect(signUpIdentifierField).toMatchElement('div[class*=select] div[class$=title] div', {
        text: identifier,
    });
    // Wait for the config to update
    await page.waitForTimeout(500);
};
export const expectToClickSignUpAuthnOption = async (page, option) => {
    const signUpAuthnSettingsFiled = await expect(page).toMatchElement('div[class$=field]:has(div[class$=headline] > div[class$=title])', {
        text: 'Authentication setting for sign-up',
    });
    await expect(signUpAuthnSettingsFiled).toClick('div[class$=selections] span[class$=label]', {
        text: option,
    });
};
export const expectToAddSignInMethod = async (page, method, isAddAnother = true) => {
    const signInMethodsField = await expect(page).toMatchElement('div[class$=field]:has(div[class$=headline] > div[class$=title])', {
        text: 'Identifier and authentication settings for sign-in',
    });
    // Click Add another
    await expect(signInMethodsField).toClick('button span', {
        text: isAddAnother ? 'Add Another' : 'Add Sign-in Method',
    });
    // Wait for the dropdown to be rendered in the correct position
    await page.waitForTimeout(500);
    await expect(page).toClick('.ReactModalPortal div[class$=dropdownContainer] div[role=menuitem]', {
        text: method,
    });
    await page.waitForSelector('.ReactModalPortal div[class$=dropdownContainer]', {
        hidden: true,
    });
};
export const expectToClickSignInMethodAuthnOption = async (page, { method, option }) => {
    const methodItem = await expect(page).toMatchElement('div[class$=signInMethodItem]:has(div[class$=identifier])', {
        text: method,
    });
    await expect(methodItem).toClick('div[class*=authentication] span[class$=label]', {
        text: option,
    });
    // Wait for the config to update
    await page.waitForTimeout(500);
};
export const expectToSwapSignInMethodAuthnOption = async (page, method) => {
    const methodItem = await expect(page).toMatchElement('div[class$=signInMethodItem]:has(div[class$=identifier])', {
        text: method,
    });
    await expect(methodItem).toClick('div[class*=authentication] div[class$=swapButton] button');
};
export const expectToRemoveSignInMethod = async (page, method) => {
    const methodItem = await expect(page).toMatchElement('div[class$=signInMethodItem]:has(div[class$=identifier])', {
        text: method,
    });
    await expect(methodItem).toClick('div[class$=anchor] button:last-of-type');
    // Wait for the config to update
    await page.waitForTimeout(500);
};
export const expectSignInMethodError = async (page, method) => {
    await expect(page).toMatchElement('div[class$=signInMethodItem] div[class$=error] div[class$=identifier]', {
        text: method,
    });
};
export const expectNotificationInFiled = async (page, { field, content }) => {
    const signInMethodsField = await expect(page).toMatchElement('div[class$=field]:has(div[class$=headline] > div[class$=title])', {
        text: field,
    });
    await expect(signInMethodsField).toMatchElement('div[class*=inlineNotification] div[class$=content]', {
        text: content,
    });
};
export const expectSignUpIdentifierSelectorError = async (page) => {
    const signUpIdentifierField = await expect(page).toMatchElement('div[class$=field]:has(div[class$=headline] > div[class$=title])', {
        text: 'Sign-up identifier',
    });
    await expect(signUpIdentifierField).toMatchElement('div[class*=select][class*=error]');
};
export const expectToResetSignUpAndSignInConfig = async (page, needSave = true) => {
    // Select 'Email address or phone number' first to ensure the sign-in method contains phone and email
    await expectToSelectSignUpIdentifier(page, 'Email address or phone number');
    await expectToSelectSignUpIdentifier(page, 'Username');
    await expectToRemoveSignInMethod(page, 'Email address');
    await expectToRemoveSignInMethod(page, 'Phone number');
    if (needSave) {
        await expectToSaveSignInExperience(page, { needToConfirmChanges: true });
    }
};
export const expectToAddSocialSignInConnector = async (page, name) => {
    const socialSignInField = await expect(page).toMatchElement('div[class$=field]:has(div[class$=headline] > div[class$=title])', {
        text: 'Social sign-in',
    });
    await expect(socialSignInField).toClick('button span', {
        text: 'Add Social Connector',
    });
    // Wait for the dropdown to be rendered in the correct position
    await page.waitForTimeout(500);
    await expect(page).toClick('.ReactModalPortal div[class$=dropdownContainer] div[role=menuitem] span[class$=name]', {
        text: name,
    });
    await page.waitForSelector('.ReactModalPortal div[class$=dropdownContainer]', {
        hidden: true,
    });
};
export const expectToRemoveSocialSignInConnector = async (page, name) => {
    const socialSignInField = await expect(page).toMatchElement('div[class$=field]:has(div[class$=headline] > div[class$=title])', {
        text: 'Social sign-in',
    });
    const connectorItem = await expect(socialSignInField).toMatchElement('div[class$=item]:has(span[class$=name])', {
        text: name,
    });
    await expect(connectorItem).toClick('button:last-of-type');
};
export const expectErrorsOnNavTab = async (page, { tab, error }) => {
    const signUpAndSignInTab = await expect(page).toMatchElement('nav div[class$=item]:has(a)', {
        text: tab,
    });
    await expect(signUpAndSignInTab).toMatchElement('div[class$=errors]', {
        text: error,
    });
};
//# sourceMappingURL=helpers.js.map