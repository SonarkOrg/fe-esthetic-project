// loading.service.ts
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

/** The overlay only appears if loading is still in progress after this many ms. */
export const LOADER_SHOW_DELAY_MS = 300;

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private readonly isBrowser: boolean;
  private _isLoading = new BehaviorSubject<boolean>(false);
  public readonly isLoading = this._isLoading.asObservable();
  private showTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(private router: Router, @Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);

    // The router-driven overlay only makes sense in the browser. On the server
    // (SSR / prerender) the loader must never be switched on, so the overlay
    // is never serialized into the HTML.
    if (!this.isBrowser) {
      return;
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // The first navigation is the initial load, already painted by SSR: no overlay.
        if (event.id !== 1) this.startLoading();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.stopLoading();
      }
    });
  }

  /** Shows the overlay only if the work is still running after LOADER_SHOW_DELAY_MS. */
  startLoading() {
    if (!this.isBrowser) {
      return;
    }
    this.clearShowTimer();
    this.showTimer = setTimeout(() => {
      this.showTimer = null;
      this._isLoading.next(true);
    }, LOADER_SHOW_DELAY_MS);
  }

  stopLoading() {
    if (!this.isBrowser) {
      return;
    }
    this.clearShowTimer();
    this._isLoading.next(false);
  }

  private clearShowTimer() {
    if (this.showTimer !== null) {
      clearTimeout(this.showTimer);
      this.showTimer = null;
    }
  }
}
