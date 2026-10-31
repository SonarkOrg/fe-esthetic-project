import { Injectable, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface ParallaxItem {
  /** the moving layer (oversized by CSS so it never exposes gaps) */
  el: HTMLElement;
  /** the clipping box the layer lives in */
  container: HTMLElement;
  speed: number;
}

/**
 * One shared, rAF-throttled, passive window scroll listener for every
 * [appParallax] element. Everything runs outside Angular's zone and is
 * browser-only, so it is safe for SSR / prerender.
 */
@Injectable({ providedIn: 'root' })
export class ParallaxService {
  private readonly zone = inject(NgZone);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly items = new Set<ParallaxItem>();
  private started = false;
  private enabled = false;
  private ticking = false;

  private readonly onScroll = () => this.schedule();

  register(item: ParallaxItem): void {
    if (!this.isBrowser) return;
    this.start();
    if (!this.enabled) return;
    this.items.add(item);
    this.schedule();
  }

  unregister(item: ParallaxItem): void {
    this.items.delete(item);
    if (this.items.size === 0 && this.started && this.enabled) {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onScroll);
      this.started = false;
    }
  }

  private start(): void {
    if (this.started) return;
    this.started = true;
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    this.enabled = !reduce;
    if (!this.enabled) return;
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll, { passive: true });
    });
  }

  private schedule(): void {
    if (this.ticking) return;
    this.ticking = true;
    requestAnimationFrame(() => {
      this.ticking = false;
      this.update();
    });
  }

  private update(): void {
    const vh = window.innerHeight;
    const frames: { item: ParallaxItem; offset: number }[] = [];

    // read phase
    this.items.forEach((item) => {
      const r = item.container.getBoundingClientRect();
      if (r.bottom < -150 || r.top > vh + 150) return; // off-screen, skip
      const overhang = Math.max(0, (item.el.offsetHeight - r.height) / 2);
      const raw = (vh / 2 - (r.top + r.height / 2)) * item.speed;
      frames.push({ item, offset: Math.max(-overhang, Math.min(overhang, raw)) });
    });

    // write phase
    for (const f of frames) {
      f.item.el.style.transform = `translate3d(0, ${f.offset.toFixed(2)}px, 0)`;
    }
  }
}
