import { Component } from '@angular/core';
import { ParallaxDirective } from '../../directives/parallax.directive';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [ParallaxDirective, RevealDirective],
  template: `
    <section class="quote" aria-label="Our promise">
      <div class="quote__bg" aria-hidden="true">
        <div class="quote__layer quote__layer--a" [appParallax]="0.35" parallaxMode="relative"></div>
        <div class="quote__layer quote__layer--b" [appParallax]="-0.2" parallaxMode="relative"></div>
        <svg class="quote__leaf" viewBox="0 0 240 360" [appParallax]="0.5" parallaxMode="relative"><g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M120 350C110 270 130 190 120 20"/><path d="M120 300c-40-10-62-40-66-76 38 4 62 30 66 76Z"/><path d="M120 200c40-10 64-42 66-80-40 6-64 36-66 80Z"/></g></svg>
      </div>
      <figure class="container quote__inner" appReveal>
        <blockquote>&ldquo;Beautiful skin is not about perfection. It is about care, consistency and feeling at home in your own face.&rdquo;</blockquote>
        <figcaption>The Fe Esthetic promise</figcaption>
      </figure>
    </section>
  `,
})
export class QuoteComponent {}
