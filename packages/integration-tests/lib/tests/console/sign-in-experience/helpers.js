import { expectToSaveChanges, expectConfirmModalAndAct, waitForToast, } from '#src/ui-helpers/index.js';
export const waitForFormCard = async (page, title) => {
    await expect(page).toMatchElement('div[class$=tabContent] div[class$=card] div[class$=title]', {
        text: title,
    });
};
export const expectToSelectColor = async (page, { field, color }) => {
    const colorField = await expect(page).toMatchElement('div[class$=field]:has(div[class$=headline] div[class$=title])', {
        text: field,
    });
    await expect(colorField).toClick('div[role=button]');
    await expect(page).toFill('input[id^=rc-editable-input]', color);
    // Close the color input
    await page.keyboard.press('Escape');
};
export const expectToSaveSignInExperience = async (page, options) => {
    const { needToConfirmChanges = false } = options ?? {};
    await expectToSaveChanges(page);
    if (needToConfirmChanges) {
        // Confirm changes
        await expectConfirmModalAndAct(page, {
            title: 'Reminder',
            actionText: 'Confirm',
        });
    }
    await waitForToast(page, {
        text: 'Saved',
    });
};
export const expectToSelectPreviewLanguage = async (page, language) => {
    // Click on the language selector
    await expect(page).toClick('div[class$=preview] div[class*=select][class*=language]');
    // Wait for the dropdown menu to render in the correct position
    await page.waitForTimeout(500);
    await expect(page).toClick('.ReactModalPortal div[class$=dropdownContainer] div[role=menuitem]', {
        text: language,
    });
    await page.waitForSelector('.ReactModalPortal div[class$=dropdownContainer]', {
        hidden: true,
    });
};
//# sourceMappingURL=helpers.js.map