import { ErrorHandler, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

/**
 * Browser: logs unexpected runtime errors without breaking the rest of the UI.
 * Server: logs and rethrows so a failed SSR render reaches server.ts and becomes the 500 page.
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private readonly isServer: boolean;
  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isServer = isPlatformServer(platformId);
  }

  handleError(error: unknown): void {
    try {
      console.error('Unhandled application error:', error);
    } catch {
      /* never throw from logging */
    }
    if (this.isServer) throw error;
  }
}

/** True for failed lazy-chunk / dynamic-import loads (typically after a new deploy). */
export function isChunkLoadError(error: unknown): boolean {
  const msg = String((error as { message?: string } | null)?.message ?? error ?? '');
  return /ChunkLoadError|Loading chunk|Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed/i.test(msg);
}
