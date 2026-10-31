import { Directive, ElementRef, Input, OnDestroy, afterNextRender, inject } from '@angular/core';
import { RevealService } from './reveal.service';

/**
 * <div [appReveal]="120" revealVariant="zoom">  (delay in ms, optional)
 * Fades / slides the element in when it scrolls into view.
 * Do not put your own `transition`/`transform` hover rules on the same element:
 * wrap it and reveal the wrapper instead.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { '[attr.data-reveal]': 'variant' },
})
export class RevealDirective implements OnDestroy {
  @Input('appReveal') delay: number | string | null | undefined = 0;
  @Input() revealVariant: 'up' | 'fade' | 'zoom' | 'left' | 'right' = 'up';

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly service = inject(RevealService);

  get variant(): string {
    return this.revealVariant || 'up';
  }

  constructor() {
    afterNextRender(() => {
      const el = this.host.nativeElement;
      const d = Number(this.delay);
      if (Number.isFinite(d) && d > 0) el.style.setProperty('--reveal-delay', `${d}ms`);
      this.service.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.service.unobserve(this.host.nativeElement);
  }
}
