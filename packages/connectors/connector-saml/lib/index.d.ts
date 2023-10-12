import type { SocialConnector, CreateConnector, GetConnectorConfig, ValidateSamlAssertion } from '@logto/connector-kit';
export declare const validateSamlAssertion: (getConfig: GetConnectorConfig) => ValidateSamlAssertion;
declare const createSamlConnector: CreateConnector<SocialConnector>;
export default createSamlConnector;
