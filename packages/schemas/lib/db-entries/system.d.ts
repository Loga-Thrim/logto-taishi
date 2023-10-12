import { JsonObject, GeneratedSchema } from './../foundations/index.js';
export type CreateSystem = {
    key: string;
    value?: JsonObject;
};
export type System = {
    key: string;
    value: JsonObject;
};
export declare const Systems: GeneratedSchema<CreateSystem, System>;
