import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationError, Router, Scroll } from '@angular/router';
import { LoaderService } from './Services/LoaderService/loader.service';
import { isChunkLoadError } from './global-error-handler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'topkare';
  constructor(public loaderService: LoaderService, router: Router, @Inject(PLATFORM_ID) platformId: object) {
    if (isPlatformBrowser(platformId)) {
      // The router restores scroll right at NavigationEnd, before the new page has rendered
      // (document still short), so back/forward ends up clamped to the top. Re-apply the
      // saved position / anchor once the page is tall enough.
      router.events.subscribe(e => {
        if (!(e instanceof Scroll)) return;
        const pos = e.position;
        const anchor = e.anchor;
        if (pos) {
          this.restore(
            () => document.documentElement.scrollHeight - window.innerHeight >= pos[1] - 2,
            () => window.scrollTo({ left: pos[0], top: pos[1], behavior: 'instant' }),
          );
        } else if (anchor) {
          this.restore(
            () => !!document.getElementById(anchor),
            () => document.getElementById(anchor)?.scrollIntoView({ behavior: 'instant' }),
          );
        }
      });
      // A failed chunk load (e.g. after a deploy) would leave the user on the old page:
      // reload the target URL once so they get the fresh build. The loader overlay is
      // already stopped by LoaderService on NavigationError.
      router.events.subscribe(e => {
        if (e instanceof NavigationError && isChunkLoadError(e.error)) {
          try {
            const last = Number(sessionStorage.getItem('chunk-reload') ?? 0);
            if (Date.now() - last < 10000) return; // avoid reload loops
            sessionStorage.setItem('chunk-reload', String(Date.now()));
          } catch { /* storage unavailable: still reload once below */ }
          window.location.assign(e.url);
        }
      });
    }
  }

  /** Poll briefly until the page is rendered enough (ready), then scroll (apply). */
  private restore(ready: () => boolean, apply: () => void): void {
    let tries = 0;
    const step = () => {
      if (ready() || tries++ >= 30) {
        apply();
        return;
      }
      setTimeout(step, 50);
    };
    setTimeout(step, 0);
  }
}
