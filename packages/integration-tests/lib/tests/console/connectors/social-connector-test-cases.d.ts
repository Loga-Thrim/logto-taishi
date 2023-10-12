export type SocialConnectorCase = {
    groupFactoryId?: string;
    factoryId: string;
    name: string;
    initialFormData: Record<string, string>;
    updateFormData: Record<string, string>;
    errorFormData: Record<string, string>;
    standardBasicFormData?: Record<string, string>;
};
export declare const socialConnectorTestCases: SocialConnectorCase[];
