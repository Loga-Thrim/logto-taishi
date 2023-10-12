import type { Resource, CreateResource } from '@logto/schemas';
import type { OptionsOfTextResponseBody } from 'got';
export declare const createResource: (name?: string, indicator?: string) => Promise<Resource>;
export declare const getResources: () => Promise<Resource[]>;
export declare const getResource: (resourceId: string, options?: OptionsOfTextResponseBody) => Promise<Resource>;
export declare const updateResource: (resourceId: string, payload: Partial<Omit<CreateResource, 'id'>>) => Promise<Resource>;
export declare const deleteResource: (resourceId: string) => Promise<import("got").Response<string>>;
export declare const setDefaultResource: (resourceId: string, isDefault?: boolean) => Promise<Resource>;
