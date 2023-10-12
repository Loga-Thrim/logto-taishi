import { GeneratedSchema } from './../foundations/index.js';
export type CreatePasscode = {
    tenantId?: string;
    id: string;
    interactionJti?: string | null;
    phone?: string | null;
    email?: string | null;
    type: string;
    code: string;
    consumed?: boolean;
    tryCount?: number;
    createdAt?: number;
};
export type Passcode = {
    tenantId: string;
    id: string;
    interactionJti: string | null;
    phone: string | null;
    email: string | null;
    type: string;
    code: string;
    consumed: boolean;
    tryCount: number;
    createdAt: number;
};
export declare const Passcodes: GeneratedSchema<CreatePasscode, Passcode>;
