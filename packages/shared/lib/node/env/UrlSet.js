import { deduplicate, getEnv, trySafe, yes } from '@silverhand/essentials';
/**
 * A class to store a set of URLs which may include a localhost URL and/or a custom domain URL.
 *
 * It's useful for aggregating URLs for the same purpose, e.g. to serve the core service.
 */
export default class UrlSet {
    #port;
    #endpoint;
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
    constructor(isHttpsEnabled, defaultPort, envPrefix = '') {
        this.isHttpsEnabled = isHttpsEnabled;
        this.defaultPort = defaultPort;
        this.envPrefix = envPrefix;
        this.isLocalhostDisabled = yes(getEnv(this.envPrefix + 'DISABLE_LOCALHOST'));
        this.#port = Number(getEnv(this.envPrefix + 'PORT') || this.defaultPort);
        this.#endpoint = getEnv(this.envPrefix + 'ENDPOINT');
    }
    deduplicated() {
        return deduplicate([trySafe(() => this.localhostUrl.toString()), trySafe(() => this.endpoint.toString())].filter((value) => typeof value === 'string')).map((value) => new URL(value));
    }
    get origins() {
        return this.deduplicated().map((url) => url.origin);
    }
    get port() {
        if (this.isLocalhostDisabled) {
            throw new Error('Localhost has been disabled in this URL Set.');
        }
        return this.#port;
    }
    get localhostUrl() {
        return new URL(`${this.isHttpsEnabled ? 'https' : 'http'}://localhost:${this.port}`);
    }
    get endpoint() {
        if (!this.#endpoint) {
            if (this.isLocalhostDisabled) {
                throw new Error('No available endpoint in this URL Set.');
            }
            return this.localhostUrl;
        }
        return new URL(this.#endpoint);
    }
}
