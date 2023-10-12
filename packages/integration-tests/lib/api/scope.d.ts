import type { Scope, CreateScope } from '@logto/schemas';
import type { OptionsOfTextResponseBody } from 'got';
export declare const getScopes: (resourceId: string, options?: OptionsOfTextResponseBody) => Promise<Scope[]>;
export declare const createScope: (resourceId: string, name?: string) => Promise<Scope>;
export declare const updateScope: (resourceId: string, scopeId: string, payload: Partial<Omit<CreateScope, 'id' | 'resourceId'>>) => Promise<Scope>;
export declare const deleteScope: (resourceId: string, scopeId: string) => Promise<import("got").Response<string>>;
