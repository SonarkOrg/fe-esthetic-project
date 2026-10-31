import { InjectionToken } from '@angular/core';

/** Express response, provided by server.ts during SSR only (null/absent in the browser). */
export const RESPONSE = new InjectionToken<{ status(code: number): unknown }>('RESPONSE');
