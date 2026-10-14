import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="section services" id="services" aria-labelledby="services-title">
      <div class="container">
        <header class="section__head">
          <p class="eyebrow" appReveal>Treatments</p>
          <h2 id="services-title" class="h2" [appReveal]="80">Rituals for every skin story</h2>
          <p class="muted" [appReveal]="160">A curated menu of facials and therapies, each tailored on the day to what your skin needs.</p>
        </header>
        <div class="cards">
          @for (s of items; track s.title; let i = $index) {
            <article class="card glass" [appReveal]="i * 90">
              <svg class="card__icon" viewBox="0 0 48 48" width="44" height="44" aria-hidden="true"><path [attr.d]="s.icon" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <h3>{{ s.title }}</h3>
              <p>{{ s.text }}</p>
              <span class="card__meta">{{ s.meta }}</span>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class ServicesComponent {
  items = [
    { title: 'Signature Facial', text: 'Deep cleanse, gentle exfoliation, bespoke mask and lymphatic massage for an instant glow.', meta: '60 min · from $120', icon: 'M24 6C14 16 10 26 24 42 38 26 34 16 24 6ZM24 14v28' },
    { title: 'Hydra Renewal', text: 'Multi-step hydrodermabrasion that purifies pores and floods skin with hyaluronic moisture.', meta: '50 min · from $140', icon: 'M24 6c8 10 12 16 12 22a12 12 0 0 1-24 0c0-6 4-12 12-22ZM18 30a6 6 0 0 0 6 6' },
    { title: 'Glow Peel', text: 'Medical-grade botanical peels that refine texture, fade pigmentation and brighten tone.', meta: '45 min · from $110', icon: 'M24 8v6M24 34v6M8 24h6M34 24h6M13 13l4 4M31 31l4 4M35 13l-4 4M17 31l-4 4M24 18a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z' },
    { title: 'Lash & Brow Studio', text: 'Lifts, tints and shaping that frame the face with soft, natural definition.', meta: '45 min · from $75', icon: 'M6 28c8-12 28-12 36 0M10 30c6-7 22-7 28 0M24 24v-4M16 25l-2-4M32 25l2-4' },
    { title: 'Microneedling', text: 'Collagen-induction therapy to smooth fine lines, scars and uneven texture over time.', meta: '60 min · from $190', icon: 'M12 8l24 24M18 6l-6 6M36 32l-6 6M10 40h28M14 36l4 4M22 28l4 4' },
    { title: 'Restorative Massage', text: 'Sculpting face, neck and shoulder massage to release tension and restore calm.', meta: '40 min · from $90', icon: 'M8 30c6-4 10 4 16 0s10 4 16 0M8 20c6-4 10 4 16 0s10 4 16 0M8 40c6-4 10 4 16 0s10 4 16 0' },
  ];
}
