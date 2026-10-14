import { DestroyRef, Directive, ElementRef, Input, NgZone, Renderer2, afterNextRender, inject } from '@angular/core';

/** Fades/slides the host in once it enters the viewport. Hidden state only applies under `.js`. */
@Directive({ selector: '[appReveal]', standalone: true, host: { class: 'reveal' } })
export class RevealDirective {
  /** Delay in ms (use for staggering). */
  @Input('appReveal') delay: number | string = 0;

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly renderer = inject(Renderer2);

  constructor() {
    const zone = inject(NgZone);
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const d = Number(this.delay) || 0;
      if (d) this.renderer.setStyle(this.el, '--reveal-delay', `${d}ms`);
      if (typeof IntersectionObserver === 'undefined') {
        this.renderer.addClass(this.el, 'is-visible');
        return;
      }
      zone.runOutsideAngular(() => {
        const io = new IntersectionObserver(
          (entries) => {
            for (const e of entries) {
              if (e.isIntersecting) {
                this.renderer.addClass(this.el, 'is-visible');
                io.disconnect();
              }
            }
          },
          { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
        );
        io.observe(this.el);
        destroyRef.onDestroy(() => io.disconnect());
      });
    });
  }
}
