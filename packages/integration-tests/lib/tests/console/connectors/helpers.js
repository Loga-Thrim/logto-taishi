import { ConnectorType } from '@logto/connector-kit';
import { expectConfirmModalAndAct, expectModalWithTitle, waitForToast, } from '#src/ui-helpers/index.js';
import { passwordlessConnectorTestCases, } from './passwordless-connector-test-cases.js';
/**
 * Finds the next connector of the same type adjacent to the current connector, which will be selected
 * as the new connector when changing the current connector.
 */
export const findNextCompatibleConnector = (currentConnector) => {
    const sameTypeConnectors = passwordlessConnectorTestCases.filter((connector) => connector.isEmailConnector === currentConnector.isEmailConnector);
    const currentIndex = sameTypeConnectors.findIndex((connector) => connector.factoryId === currentConnector.factoryId);
    if (currentIndex === -1) {
        return;
    }
    return sameTypeConnectors[(currentIndex + 1) % sameTypeConnectors.length];
};
export const expectToSelectConnector = async (page, { groupFactoryId, factoryId, connectorType }) => {
    await expectModalWithTitle(page, connectorType === ConnectorType.Email
        ? 'Set up email connector'
        : connectorType === ConnectorType.Sms
            ? 'Set up SMS connector'
            : 'Add Social Connector');
    if (groupFactoryId) {
        // Platform selector
        await page.click(`.ReactModalPortal div[role=radio]:has(input[name=group][value=${groupFactoryId}])`);
        await page.waitForSelector('.ReactModalPortal div[class$=platforms] div[class$=radioGroup]');
        await page.click(`.ReactModalPortal div[class$=platforms] div[role=radio]:has(input[name=connector][value=${factoryId}])`);
    }
    else {
        await page.click(`.ReactModalPortal div[role=radio]:has(input[name=group][value=${factoryId}])`);
    }
    await expect(page).toClick('.ReactModalPortal div[class$=footer] button:not(disabled) span', {
        text: 'Next',
    });
};
export const waitForConnectorCreationGuide = async (page, connectorName) => {
    await expect(page).toMatchElement('.ReactModalPortal div[class$=titleEllipsis] span', {
        text: connectorName,
    });
    await expect(page).toMatchElement('.ReactModalPortal div[class$=subtitle] span', {
        text: 'A step by step guide to configure your connector',
    });
};
export const expectToConfirmConnectorDeletion = async (page, redirectUri) => {
    await expectConfirmModalAndAct(page, {
        title: 'Reminder',
        actionText: 'Delete',
    });
    // Wait to navigate to the connector list page
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    expect(page.url()).toBe(redirectUri);
    await waitForToast(page, { text: 'The connector has been successfully deleted' });
};
//# sourceMappingURL=helpers.js.map