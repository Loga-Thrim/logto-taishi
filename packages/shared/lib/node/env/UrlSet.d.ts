/**
 * A class to store a set of URLs which may include a localhost URL and/or a custom domain URL.
 *
 * It's useful for aggregating URLs for the same purpose, e.g. to serve the core service.
 */
export default class UrlSet {
    #private;
    readonly isHttpsEnabled: boolean;
    protected readonly defaultPort: number;
    protected readonly envPrefix: string;
    readonly isLocalhostDisabled: boolean;
    /**
     * Construct a new UrlSet instance by reading the following env variables:
     *
     * - `${envPrefix}PORT` for getting the port number to listen; fall back to `defaultPort` if not found.
     * - `${envPrefix}ENDPOINT` for the custom endpoint. The value keeps raw and does not affected by `isHttpEnabled` or `envPrefix`.
     * - `${envPrefix}DISABLE_LOCALHOST` for disabling (or removing) localhost in the UrlSet if it's truthy (`1`, `true`, `yes`).
     *
     * Note: The constructor will take the parameters and read all corresponding env variables instantly,
     * thus instance properties will NOT change afterwards.
     *
     * @param isHttpsEnabled Indicates if Node-based HTTPS is enabled. It ONLY affects localhost URL protocol.
     * @param defaultPort The port number to fall back if no env variable found for specifying the port to listen.
     * @param envPrefix The prefix to add for all env variables, i.e. `PORT`, `ENDPOINT`, and `DISABLE_LOCALHOST`.
     */
    constructor(isHttpsEnabled: boolean, defaultPort: number, envPrefix?: string);
    deduplicated(): URL[];
    get origins(): string[];
    get port(): number;
    get localhostUrl(): URL;
    get endpoint(): URL;
}
