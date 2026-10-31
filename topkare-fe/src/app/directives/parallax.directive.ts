import { Directive, ElementRef, Input, OnDestroy, afterNextRender, inject } from '@angular/core';
import { ParallaxItem, ParallaxService } from './parallax.service';

/**
 * <div class="plx"><div class="plx__layer" [appParallax]="0.2"><img ...></div></div>
 * The directive element is the moving layer; its parent is the clipping box.
 * Positive speed => the layer lags behind the page scroll.
 */
@Directive({ selector: '[appParallax]', standalone: true })
export class ParallaxDirective implements OnDestroy {
  @Input('appParallax') set speedInput(v: number | string | null | undefined) {
    const n = Number(v);
    this.speed = Number.isFinite(n) && v !== '' ? n : 0.2;
    if (this.item) this.item.speed = this.speed;
  }
  private speed = 0.2;
  private item?: ParallaxItem;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly service = inject(ParallaxService);

  constructor() {
    afterNextRender(() => {
      const el = this.host.nativeElement;
      const container = el.parentElement;
      if (!container) return;
      this.item = { el, container, speed: this.speed };
      this.service.register(this.item);
    });
  }

  ngOnDestroy(): void {
    if (this.item) this.service.unregister(this.item);
  }
}
