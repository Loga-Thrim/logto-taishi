import { z } from 'zod';
export const logtoUiCookieGuard = z.object({ appId: z.string() }).partial();
