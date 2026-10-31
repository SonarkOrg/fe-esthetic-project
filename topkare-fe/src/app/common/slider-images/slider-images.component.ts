import { isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, Input, NgZone, PLATFORM_ID, afterNextRender, inject } from '@angular/core';

@Component({
  selector: 'app-slider-images',
  templateUrl: './slider-images.component.html',
  styleUrl: './slider-images.component.css',
})
export class SliderImagesComponent {
  @Input() items: any[] = [];
  @Input() indicator = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 6000;
  /** Optional call-to-action pill laid over the image. */
  @Input() ctaLabel = '';
  @Input() ctaLink: string | any[] = '/';

  selectedIndex = 0;
  private timer?: ReturnType<typeof setInterval>;
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    // Auto-advance only in the browser (never keep a timer alive during SSR/prerender),
    // and not for people who prefer reduced motion.
    afterNextRender(() => {
      if (!this.autoSlide || !this.isBrowser) return;
      if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
      this.start();
    });
    this.destroyRef.onDestroy(() => this.stop());
  }

  private start(): void {
    this.stop();
    this.zone.runOutsideAngular(() => {
      this.timer = setInterval(() => this.zone.run(() => this.onNext()), this.slideInterval);
    });
  }

  private stop(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = undefined;
  }

  private restart(): void {
    if (this.timer) this.start();
  }

  selectImg(index: number): void {
    this.selectedIndex = index;
    this.restart();
  }

  onPrev(): void {
    const n = this.items?.length ?? 0;
    if (!n) return;
    this.selectedIndex = (this.selectedIndex - 1 + n) % n;
    this.restart();
  }

  onNext(): void {
    const n = this.items?.length ?? 0;
    if (!n) return;
    this.selectedIndex = (this.selectedIndex + 1) % n;
  }
}
