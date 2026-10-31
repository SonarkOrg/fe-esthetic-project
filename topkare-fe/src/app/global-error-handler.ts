import { ErrorHandler, Injectable } from '@angular/core';

/** Logs unexpected runtime errors without breaking the rest of the UI. */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    try {
      console.error('Unhandled application error:', error);
    } catch {
      /* never throw from the error handler */
    }
  }
}

/** True for failed lazy-chunk / dynamic-import loads (typically after a new deploy). */
export function isChunkLoadError(error: unknown): boolean {
  const msg = String((error as { message?: string } | null)?.message ?? error ?? '');
  return /ChunkLoadError|Loading chunk|Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed/i.test(msg);
}
