export const expectToCreateWebhook = async (page) => {
    await expect(page).toClick('div[class$=main] div[class$=headline] > button');
    await expect(page).toClick('span[class$=label]', { text: 'Create new account' });
    await expect(page).toClick('span[class$=label]', { text: 'Sign in' });
    await expect(page).toFill('input[name=name]', 'hook_name');
    await expect(page).toFill('input[name=url]', 'https://example.com/webhook');
    await expect(page).toClick('button[type=submit]');
    await page.waitForSelector('div[class$=header] div[class$=metadata] div[class$=title]');
};
//# sourceMappingURL=helpers.js.map