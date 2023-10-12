export declare const createDomain: (domain?: string) => Promise<{
    status: import("@logto/schemas").DomainStatus;
    id: string;
    domain: string;
    errorMessage: string | null;
    dnsRecords: {
        type: string;
        value: string;
        name: string;
    }[];
}>;
export declare const getDomains: () => Promise<{
    status: import("@logto/schemas").DomainStatus;
    id: string;
    domain: string;
    errorMessage: string | null;
    dnsRecords: {
        type: string;
        value: string;
        name: string;
    }[];
}[]>;
export declare const getDomain: (domainId: string) => Promise<{
    status: import("@logto/schemas").DomainStatus;
    id: string;
    domain: string;
    errorMessage: string | null;
    dnsRecords: {
        type: string;
        value: string;
        name: string;
    }[];
}>;
export declare const deleteDomain: (domainId: string) => Promise<import("got").Response<string>>;
