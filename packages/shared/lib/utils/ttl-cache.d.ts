export declare class TtlCache<Key, Value> {
    #private;
    readonly ttl: number;
    data: Map<Key, Value>;
    expiration: Map<Key, number>;
    constructor(ttl?: number);
    set(key: Key, value: Value, ttl?: number): void;
    get(key: Key): Value | undefined;
    has(key: Key): boolean;
    delete(key: Key): boolean;
    clear(): void;
}
