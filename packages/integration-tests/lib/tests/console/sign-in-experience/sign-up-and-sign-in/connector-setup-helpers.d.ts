import { ConnectorType } from '@logto/schemas';
import { type Page } from 'puppeteer';
type TestConnector = {
    factoryId: string;
    name: string;
    connectorType: ConnectorType;
    data: Record<string, string>;
};
export declare const testSendgridConnector: TestConnector;
export declare const testTwilioConnector: TestConnector;
export declare const testAppleConnector: TestConnector;
export declare const expectToSetupPasswordlessConnector: (page: Page, { factoryId, name, connectorType, data }: TestConnector) => Promise<void>;
export declare const expectToSetupSocialConnector: (page: Page, { factoryId, name, connectorType, data }: TestConnector) => Promise<void>;
export declare const expectToDeletePasswordlessConnector: (page: Page, { name }: TestConnector) => Promise<void>;
export declare const expectToDeleteSocialConnector: (page: Page, { name }: TestConnector) => Promise<void>;
export {};
