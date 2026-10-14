import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { ParallaxDirective } from '../../directives/parallax.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective, ParallaxDirective],
  template: `
    <section class="section about" id="about" aria-labelledby="about-title">
      <div class="container about__grid">
        <div class="about__visual" appReveal aria-hidden="true">
          <div class="about__frame" [appParallax]="0.04" parallaxMode="relative">
            <div class="about__blob"></div>
            <svg viewBox="0 0 200 200" class="about__svg"><g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M100 180c-6-50 6-100 0-150"/><path d="M100 140c-30-6-46-26-50-52 28 4 46 22 50 52Z"/><path d="M100 110c28-6 44-24 46-48-28 4-44 20-46 48Z"/><circle cx="100" cy="24" r="6"/></g></svg>
          </div>
          <div class="glass about__note" [appParallax]="0.1" parallaxMode="relative"><span>Est. 2013</span>Slow, science-led skincare</div>
        </div>
        <div class="about__copy">
          <p class="eyebrow" appReveal>Our philosophy</p>
          <h2 id="about-title" class="h2" [appReveal]="80">Skin health is a quiet kind of luxury.</h2>
          <p [appReveal]="160">Fe Esthetic is a calm, light-filled studio where every visit begins with listening. We map your skin, understand your routine and build a plan that is entirely yours, never a one-size-fits-all menu.</p>
          <p [appReveal]="240">Our therapists combine clinical-grade actives, gentle technology and the restorative power of touch, so results feel as good as they look.</p>
          <ul class="ticks" [appReveal]="320">
            <li>Personalised skin analysis at every visit</li>
            <li>Cruelty-free, dermatologist-trusted products</li>
            <li>Private treatment rooms and unhurried appointments</li>
          </ul>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
