import { Injectable, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

/**
 * Shared IntersectionObserver for [appReveal]. Browser-only.
 * The `js` class (which enables the hidden pre-reveal state in styles.css) is
 * added here, before any element is observed.
 */
@Injectable({ providedIn: 'root' })
export class RevealService {
  private readonly zone = inject(NgZone);
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private io?: IntersectionObserver;
  private reduce = false;
  private ready = false;
  /** true only during the first synchronous batch after hydration */
  private initialPass = false;

  observe(el: HTMLElement): void {
    if (!this.isBrowser) return;
    this.setup();

    if (this.reduce || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-revealed');
      return;
    }

    if (this.initialPass) {
      // Content that is already on screen right after hydration must not flash:
      // mark it revealed before the hidden state exists.
      const r = el.getBoundingClientRect();
      const visible = (r.width > 0 || r.height > 0) && r.top < window.innerHeight * 0.95 && r.bottom > 0;
      if (visible) {
        el.classList.add('is-revealed');
        return;
      }
    }
    this.io!.observe(el);
    this.doc.documentElement.classList.add('js');
  }

  unobserve(el: HTMLElement): void {
    this.io?.unobserve(el);
  }

  private setup(): void {
    if (this.ready) return;
    this.ready = true;
    this.initialPass = true;
    Promise.resolve().then(() => (this.initialPass = false));
    this.reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    if (this.reduce || typeof IntersectionObserver === 'undefined') return;
    this.zone.runOutsideAngular(() => {
      this.io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              (e.target as HTMLElement).classList.add('is-revealed');
              this.io!.unobserve(e.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
      );
    });
  }
}
