export class MemoryStorage {
    constructor() {
        this.storage = {
            idToken: null,
            refreshToken: null,
            accessToken: null,
            signInSession: null,
        };
    }
    async getItem(key) {
        return this.storage[key];
    }
    async setItem(key, value) {
        this.storage[key] = value;
    }
    async removeItem(key) {
        this.storage[key] = null;
    }
}
//# sourceMappingURL=storage.js.map