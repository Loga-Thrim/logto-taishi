import type { Storage, StorageKey } from '@logto/node';
import type { Nullable } from '@silverhand/essentials';
export declare class MemoryStorage implements Storage {
    private storage;
    getItem(key: StorageKey): Promise<Nullable<string>>;
    setItem(key: StorageKey, value: string): Promise<void>;
    removeItem(key: StorageKey): Promise<void>;
}
