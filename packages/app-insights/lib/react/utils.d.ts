/**
 * **CAUTION:** This function takes the last two parts of the hostname which may cause issues for
 * some second-level domains, e.g. `.co.uk`.
 */
export declare const getPrimaryDomain: () => string;
