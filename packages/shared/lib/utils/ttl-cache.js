export class TtlCache {
    constructor(ttl = Number.POSITIVE_INFINITY) {
        this.ttl = ttl;
        this.data = new Map();
        this.expiration = new Map();
    }
    set(key, value, ttl = this.ttl) {
        if (value === undefined) {
            throw new TypeError('Value cannot be undefined');
        }
        this.expiration.set(key, Date.now() + ttl);
        this.data.set(key, value);
    }
    get(key) {
        this.#purge(key);
        return this.data.get(key);
    }
    has(key) {
        this.#purge(key);
        return this.data.has(key);
    }
    delete(key) {
        this.expiration.delete(key);
        return this.data.delete(key);
    }
    clear() {
        this.expiration.clear();
        this.data.clear();
    }
    #purge(key) {
        const expiration = this.expiration.get(key);
        if (expiration !== undefined && expiration < Date.now()) {
            this.delete(key);
        }
    }
}
