import { mockEmailConnectorConfig, mockEmailConnectorId, mockSmsConnectorConfig, mockSmsConnectorId, mockSocialConnectorId, mockSocialConnectorConfig, } from '#src/__mocks__/connectors-mock.js';
import { listConnectors, deleteConnectorById, postConnector } from '#src/api/index.js';
export const clearConnectorsByTypes = async (types) => {
    const connectors = await listConnectors();
    const targetConnectors = connectors.filter((connector) => types.includes(connector.type));
    await Promise.all(targetConnectors.map(async (connector) => deleteConnectorById(connector.id)));
};
export const clearConnectorById = async (id) => deleteConnectorById(id);
export const setEmailConnector = async () => postConnector({
    connectorId: mockEmailConnectorId,
    config: mockEmailConnectorConfig,
});
export const setSmsConnector = async () => postConnector({
    connectorId: mockSmsConnectorId,
    config: mockSmsConnectorConfig,
});
export const setSocialConnector = async () => postConnector({
    connectorId: mockSocialConnectorId,
    config: mockSocialConnectorConfig,
});
//# sourceMappingURL=connector.js.map