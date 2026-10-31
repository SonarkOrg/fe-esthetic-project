// loading.service.ts
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private readonly isBrowser: boolean;
  private _isLoading = new BehaviorSubject<boolean>(false);
  public readonly isLoading = this._isLoading.asObservable();
  private stopTimer: ReturnType<typeof setTimeout> | null = null;

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
        this.startLoading();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.stopLoading();
      }
    });
  }

  startLoading() {
    if (!this.isBrowser) {
      return;
    }
    this.clearStopTimer();
    this._isLoading.next(true);
  }

  stopLoading() {
    if (!this.isBrowser) {
      return;
    }
    this.clearStopTimer();
    this.stopTimer = setTimeout(() => {
      this.stopTimer = null;
      this._isLoading.next(false);
    }, 250); // Short delay so the overlay does not flicker off instantly
  }

  private clearStopTimer() {
    if (this.stopTimer !== null) {
      clearTimeout(this.stopTimer);
      this.stopTimer = null;
    }
  }
}
