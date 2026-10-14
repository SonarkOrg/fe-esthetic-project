import { DestroyRef, Directive, ElementRef, Input, NgZone, afterNextRender, inject } from '@angular/core';

/** Counts the host's text from 0 to the target when visible. SSR renders the final value. */
@Directive({ selector: '[appCountUp]', standalone: true })
export class CountUpDirective {
  @Input('appCountUp') target: number | string = 0;
  @Input() duration = 1800;

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  constructor() {
    const zone = inject(NgZone);
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const end = Number(this.target) || 0;
      if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      this.el.textContent = '0';
      zone.runOutsideAngular(() => {
        let raf = 0;
        const run = () => {
          const t0 = performance.now();
          const step = (now: number) => {
            const p = Math.min((now - t0) / this.duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            this.el.textContent = Math.round(end * eased).toLocaleString('en-US');
            if (p < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
        };
        const io = new IntersectionObserver((entries) => {
          if (entries.some((e) => e.isIntersecting)) { io.disconnect(); run(); }
        }, { threshold: 0.4 });
        io.observe(this.el);
        destroyRef.onDestroy(() => { io.disconnect(); cancelAnimationFrame(raf); });
      });
    });
  }
}
