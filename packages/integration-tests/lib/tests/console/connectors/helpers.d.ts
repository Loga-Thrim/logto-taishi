import { ConnectorType } from '@logto/connector-kit';
import { type Page } from 'puppeteer';
import { type PasswordlessConnectorCase } from './passwordless-connector-test-cases.js';
/**
 * Finds the next connector of the same type adjacent to the current connector, which will be selected
 * as the new connector when changing the current connector.
 */
export declare const findNextCompatibleConnector: (currentConnector: PasswordlessConnectorCase) => PasswordlessConnectorCase | undefined;
type SelectConnectorOption = {
    groupFactoryId?: string;
    factoryId: string;
    connectorType: ConnectorType;
};
export declare const expectToSelectConnector: (page: Page, { groupFactoryId, factoryId, connectorType }: SelectConnectorOption) => Promise<void>;
export declare const waitForConnectorCreationGuide: (page: Page, connectorName: string) => Promise<void>;
export declare const expectToConfirmConnectorDeletion: (page: Page, redirectUri: string) => Promise<void>;
export {};
