import { Component, DestroyRef, ElementRef, NgZone, afterNextRender, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuOpen = false;

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    // Browser only: toggles `is-scrolled` on the host without triggering change detection.
    afterNextRender(() => {
      const el = this.host.nativeElement;
      const update = () => el.classList.toggle('is-scrolled', window.scrollY > 8);
      update();
      this.zone.runOutsideAngular(() => window.addEventListener('scroll', update, { passive: true }));
      this.destroyRef.onDestroy(() => window.removeEventListener('scroll', update));
    });
  }
}
