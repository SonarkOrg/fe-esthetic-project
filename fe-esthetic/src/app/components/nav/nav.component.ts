import { Component, DestroyRef, ElementRef, NgZone, Renderer2, afterNextRender, inject, signal } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  template: `
    <header class="nav">
      <div class="container nav__inner">
        <a class="nav__brand" href="#home" (click)="close()" aria-label="Fe Esthetic home">
          <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true"><path d="M16 29C7 22 5 12 16 3c11 9 9 19 0 26Z" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M16 8v21M16 16l-5-4M16 21l6-5" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
          <span>Fe <em>Esthetic</em></span>
        </a>
        <button class="nav__toggle" type="button" [class.is-open]="open()" (click)="toggle()"
          [attr.aria-expanded]="open()" aria-controls="primary-nav" aria-label="Toggle navigation menu">
          <span></span><span></span><span></span>
        </button>
        <nav id="primary-nav" class="nav__links" [class.is-open]="open()" aria-label="Primary">
          @for (l of links; track l.href) {
            <a [href]="l.href" (click)="close()">{{ l.label }}</a>
          }
          <a class="btn btn--small" href="#contact" (click)="close()">Book a visit</a>
        </nav>
      </div>
    </header>
  `,
})
export class NavComponent {
  open = signal(false);
  links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Treatments' },
    { href: '#results', label: 'Results' },
    { href: '#testimonials', label: 'Stories' },
  ];

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly renderer = inject(Renderer2);

  constructor() {
    const zone = inject(NgZone);
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      let queued = false;
      const update = () => {
        queued = false;
        if (window.scrollY > 24) this.renderer.addClass(this.host, 'is-scrolled');
        else this.renderer.removeClass(this.host, 'is-scrolled');
      };
      const onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(update); } };
      const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && this.open()) zone.run(() => this.close()); };
      zone.runOutsideAngular(() => {
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('keydown', onKey);
      });
      update();
      destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('keydown', onKey);
      });
    });
  }

  toggle() { this.open.update((v) => !v); }
  close() { this.open.set(false); }
}
