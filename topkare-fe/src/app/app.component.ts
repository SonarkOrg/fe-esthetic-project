import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationError, NavigationStart, Router, Scroll } from '@angular/router';
import { LoaderService } from './Services/LoaderService/loader.service';
import { restoreWhenReady } from './scroll-restore';
import { isChunkLoadError } from './global-error-handler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'topkare';
  /** Bumped on every NavigationStart / Scroll event; a pending restore aborts when it changes. */
  private restoreToken = 0;
  constructor(public loaderService: LoaderService, router: Router, @Inject(PLATFORM_ID) platformId: object) {
    if (isPlatformBrowser(platformId)) {
      // The router restores scroll right at NavigationEnd, before the new page has rendered
      // (document still short), so back/forward ends up clamped to the top. Re-apply the
      // saved position / anchor once the page is tall enough.
      router.events.subscribe(e => {
        if (e instanceof NavigationStart) this.restoreToken++;
        if (!(e instanceof Scroll)) return;
        const token = ++this.restoreToken;
        const pos = e.position;
        const anchor = e.anchor;
        // New page: jump to the top instantly (the router's own scrollTo would honour
        // `scroll-behavior: smooth` and animate down from wherever the old page was).
        if (!pos && !anchor) window.scrollTo({ left: 0, top: 0, behavior: 'instant' });
        if (pos) {
          restoreWhenReady(
            () => document.documentElement.scrollHeight - window.innerHeight >= pos[1] - 2,
            () => window.scrollTo({ left: pos[0], top: pos[1], behavior: 'instant' }),
            () => token === this.restoreToken,
          );
        } else if (anchor) {
          restoreWhenReady(
            () => !!document.getElementById(anchor),
            () => document.getElementById(anchor)?.scrollIntoView({ behavior: 'instant' }),
            () => token === this.restoreToken,
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
}
