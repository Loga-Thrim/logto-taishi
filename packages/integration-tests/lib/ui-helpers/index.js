import { ConnectorType } from '@logto/connector-kit';
import { SignInMode, SignInIdentifier } from '@logto/schemas';
import { updateSignInExperience } from '#src/api/sign-in-experience.js';
import { consolePassword, consoleUsername, logtoConsoleUrl as logtoConsoleUrlString, } from '#src/constants.js';
import { clearConnectorsByTypes, setEmailConnector } from '#src/helpers/connector.js';
import { expectNavigation, waitFor } from '#src/utils.js';
export const goToAdminConsole = async () => {
    const logtoConsoleUrl = new URL(logtoConsoleUrlString);
    await expectNavigation(page.goto(logtoConsoleUrl.href));
    if (page.url() === new URL('sign-in', logtoConsoleUrl).href) {
        await expect(page).toFillForm('form', {
            identifier: consoleUsername,
            password: consolePassword,
        });
        await expectNavigation(expect(page).toClick('button[name=submit]'));
    }
};
export const waitForToast = async (page, { text, type = 'success' }) => {
    const toast = await expect(page).toMatchElement(`div[class*=toast][class*=${type}]:has(div[class$=message])`, { text });
    // Remove immediately to prevent waiting for the toast to disappear and matching the same toast again
    await toast.evaluate((element) => {
        element.remove();
    });
};
export const expectUnsavedChangesAlert = async (page) => {
    // Unsaved changes alert
    await page.goBack();
    await page.waitForSelector('.ReactModalPortal div[class$=content]::-p-text(You have made some changes. Are you sure you want to leave this page?)');
    await expectToClickModalAction(page, 'Stay on Page');
};
export const expectToSaveChanges = async (page) => {
    // Wait for the action bar to finish animating
    await waitFor(500);
    await expect(page).toClick('div[class$=actionBar] button span', { text: 'Save Changes' });
};
export const expectToDiscardChanges = async (page) => {
    // Wait for the action bar to finish animating
    await waitFor(500);
    await expect(page).toClick('div[class$=actionBar] button span', { text: 'Discard' });
};
export const expectToClickDetailsPageOption = async (page, optionText) => {
    await expect(page).toClick('div[class$=header] button[class$=withIcon]:last-of-type span[class$=icon]:has(svg)');
    await expect(page).toMatchElement('.ReactModalPortal div[class$=dropdownContainer] div[class$=dropdownTitle]', {
        text: 'MORE OPTIONS',
    });
    // Wait for the dropdown menu to be rendered in the correct position
    await waitFor(500);
    await expect(page).toClick('.ReactModalPortal div[class$=dropdownContainer] div[role=menuitem]', {
        text: optionText,
    });
    await page.waitForSelector('.ReactModalPortal div[class$=dropdownContainer] div[class$=dropdownTitle]', {
        hidden: true,
    });
};
export const expectModalWithTitle = async (page, title) => {
    await expect(page).toMatchElement('.ReactModalPortal div[class$=header] div[class$=titleEllipsis]', {
        text: title,
    });
};
export const expectToClickModalAction = async (page, actionText) => {
    await expect(page).toClick('.ReactModalPortal div[class$=footer] button span', {
        text: actionText,
    });
};
export const expectConfirmModalAndAct = async (page, { title, actionText }) => {
    await expectModalWithTitle(page, title);
    await expectToClickModalAction(page, actionText);
};
export const expectToClickNavTab = async (page, tab) => {
    await expect(page).toClick('nav div[class$=item] div[class$=link] a', {
        text: tab,
    });
};
export const expectToOpenNewPage = async (browser, url) => {
    const target = await browser.waitForTarget((target) => target.url() === url);
    const newPage = await target.page();
    expect(newPage).toBeTruthy();
    await newPage?.close();
};
export const expectMainPageWithTitle = async (page, title) => {
    await expect(page).toMatchElement('div[class$=main] div[class$=titleEllipsis]', {
        text: title,
        timeout: 2000,
    });
};
export const expectToClickSidebarMenu = async (page, menuText) => {
    await expect(page).toClick('div[class$=sidebar] a div[class$=title]', {
        text: menuText,
    });
};
export const getInputValue = async (input) => {
    return input.evaluate((element) => element.value);
};
/**
 * Setup the email connector and update the sign-in experience to the following:
 *
 * - Sign-in and register mode
 * - Use username and password to sign-up
 * - Use username or email to sign-in
 * - Email sign-in can use verification code
 *
 * @param passwordPolicy The password policy to partially update the existing one.
 */
export const setupUsernameAndEmailExperience = async (passwordPolicy) => {
    await clearConnectorsByTypes([ConnectorType.Email, ConnectorType.Sms]);
    await setEmailConnector();
    await updateSignInExperience({
        signInMode: SignInMode.SignInAndRegister,
        signUp: {
            identifiers: [SignInIdentifier.Username],
            password: true,
            verify: false,
        },
        signIn: {
            methods: [
                {
                    identifier: SignInIdentifier.Username,
                    password: true,
                    verificationCode: false,
                    isPasswordPrimary: true,
                },
                {
                    identifier: SignInIdentifier.Email,
                    password: true,
                    verificationCode: true,
                    isPasswordPrimary: true,
                },
            ],
        },
        passwordPolicy,
    });
};
//# sourceMappingURL=index.js.map