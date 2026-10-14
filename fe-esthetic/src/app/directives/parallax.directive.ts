import { DestroyRef, Directive, ElementRef, Input, afterNextRender, inject } from '@angular/core';
import { ParallaxService } from './parallax.service';

/** Usage: <div [appParallax]="0.3" [parallaxMouse]="20" parallaxMode="relative"> */
@Directive({ selector: '[appParallax]', standalone: true })
export class ParallaxDirective {
  @Input('appParallax') speed: number | string = 0.2;
  /** Mouse-move strength in px (desktop only). */
  @Input() parallaxMouse: number | string = 0;
  /** 'page' = scrollY * speed; 'relative' = offset from viewport centre of parent. */
  @Input() parallaxMode: 'page' | 'relative' = 'page';

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  constructor() {
    const service = inject(ParallaxService);
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const self = this;
      const off = service.register({
        el: this.el,
        get speed() { return Number(self.speed) || 0; },
        get mouse() { return Number(self.parallaxMouse) || 0; },
        get relative() { return self.parallaxMode === 'relative'; },
      });
      destroyRef.onDestroy(off);
    });
  }
}
