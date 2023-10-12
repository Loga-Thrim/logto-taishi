import { authedAdminApi } from './api.js';
/**
 * We are using `id` and `connectorFactoryId` here:
 *
 * - `id` is used to identify connectors from the database.
 * - `connectorFactoryId` is used to identify connectors - more specifically, connector factories - in packages/connectors
 * that contain metadata (considered connectors' FIXED properties) and code implementation (which determines how connectors work).
 */
export const listConnectors = async () => authedAdminApi.get('connectors').json();
export const getConnector = async (id) => authedAdminApi.get(`connectors/${id}`).json();
export const listConnectorFactories = async () => authedAdminApi.get('connector-factories').json();
export const getConnectorFactory = async (connectorFactoryId) => authedAdminApi.get(`connector-factories/${connectorFactoryId}`).json();
export const postConnector = async (payload) => authedAdminApi
    .post({
    url: `connectors`,
    json: payload,
})
    .json();
export const deleteConnectorById = async (id) => authedAdminApi.delete({ url: `connectors/${id}` }).json();
export const updateConnectorConfig = async (id, config, metadata) => authedAdminApi
    .patch({
    url: `connectors/${id}`,
    json: { config, metadata },
})
    .json();
export const sendSmsTestMessage = async (connectorFactoryId, phone, config) => sendTestMessage(connectorFactoryId, 'phone', phone, config);
export const sendEmailTestMessage = async (connectorFactoryId, email, config) => sendTestMessage(connectorFactoryId, 'email', email, config);
const sendTestMessage = async (connectorFactoryId, receiverType, receiver, config) => authedAdminApi.post({
    url: `connectors/${connectorFactoryId}/test`,
    json: { [receiverType]: receiver, config },
});
export const getConnectorAuthorizationUri = async (connectorId, state, redirectUri) => authedAdminApi
    .post({
    url: `connectors/${connectorId}/authorization-uri`,
    json: { state, redirectUri },
})
    .json();
//# sourceMappingURL=connector.js.map