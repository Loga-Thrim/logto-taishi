export type PasswordlessConnectorCase = {
    factoryId: string;
    isEmailConnector: boolean;
    name: string;
    initialFormData: Record<string, string>;
    updateFormData: Record<string, string>;
    errorFormData: Record<string, string>;
};
export declare const passwordlessConnectorTestCases: PasswordlessConnectorCase[];
