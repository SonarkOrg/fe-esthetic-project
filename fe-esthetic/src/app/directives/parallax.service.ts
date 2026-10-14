import { Injectable, NgZone, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface ParallaxItem {
  el: HTMLElement;
  speed: number;
  mouse: number;
  relative: boolean;
}

/** One passive, rAF-throttled scroll listener shared by every [appParallax] element. */
@Injectable({ providedIn: 'root' })
export class ParallaxService {
  private readonly zone = inject(NgZone);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly items = new Set<ParallaxItem>();
  private running = false;
  private queued = false;
  private tx = 0;
  private ty = 0;
  private cx = 0;
  private cy = 0;
  private reduce = false;
  private fine = false;

  register(item: ParallaxItem): () => void {
    if (!this.browser) return () => {};
    this.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (this.reduce) return () => {};
    item.el.style.willChange = 'transform';
    this.items.add(item);
    this.start();
    this.schedule();
    return () => {
      this.items.delete(item);
      item.el.style.willChange = '';
      if (!this.items.size) this.stop();
    };
  }

  private readonly onScroll = () => this.schedule();
  private readonly onMouse = (e: MouseEvent) => {
    this.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    this.ty = (e.clientY / window.innerHeight - 0.5) * 2;
    this.schedule();
  };

  private start(): void {
    if (this.running) return;
    this.running = true;
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onScroll, { passive: true });
      if (this.fine) window.addEventListener('mousemove', this.onMouse, { passive: true });
    });
  }

  private stop(): void {
    this.running = false;
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
    window.removeEventListener('mousemove', this.onMouse);
  }

  private schedule(): void {
    if (this.queued) return;
    this.queued = true;
    this.zone.runOutsideAngular(() => requestAnimationFrame(() => this.frame()));
  }

  private frame(): void {
    this.queued = false;
    this.cx += (this.tx - this.cx) * 0.08;
    this.cy += (this.ty - this.cy) * 0.08;
    const settling = Math.abs(this.tx - this.cx) > 0.002 || Math.abs(this.ty - this.cy) > 0.002;
    const sy = window.scrollY;
    const vh = window.innerHeight;
    for (const it of this.items) {
      let y: number;
      if (it.relative && it.el.parentElement) {
        const r = it.el.parentElement.getBoundingClientRect();
        y = -(r.top + r.height / 2 - vh / 2) * it.speed;
      } else {
        y = sy * it.speed;
      }
      const x = this.cx * it.mouse;
      y += this.cy * it.mouse;
      it.el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
    }
    if (settling) this.schedule();
  }
}
