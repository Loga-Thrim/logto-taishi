export type GrantAccessTokenParameters = {
    tokenEndpoint: string;
    resource: string;
    appId: string;
    appSecret: string;
};
export declare const grantAccessToken: ({ tokenEndpoint, resource, appId, appSecret, }: GrantAccessTokenParameters) => Promise<{
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
}>;
