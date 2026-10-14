import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="section testimonials" id="testimonials" aria-labelledby="testi-title">
      <div class="container">
        <header class="section__head">
          <p class="eyebrow" appReveal>Kind words</p>
          <h2 id="testi-title" class="h2" [appReveal]="80">Loved by our clients</h2>
        </header>
        <div class="cards cards--3">
          @for (t of items; track t.name; let i = $index) {
            <figure class="card glass quote-card" [appReveal]="i * 120">
              <div class="stars" role="img" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <blockquote>{{ t.text }}</blockquote>
              <figcaption><span class="avatar" aria-hidden="true">{{ t.name[0] }}</span><span><strong>{{ t.name }}</strong><small>{{ t.role }}</small></span></figcaption>
            </figure>
          }
        </div>
      </div>
    </section>
  `,
})
export class TestimonialsComponent {
  items = [
    { name: 'Amelia R.', role: 'Signature Facial', text: 'My skin has never looked calmer. The studio is serene and my therapist remembered every detail from my last visit.' },
    { name: 'Sofia M.', role: 'Glow Peel', text: 'Visible difference after just two sessions. Honest advice, no pressure, and a genuinely lovely experience.' },
    { name: 'Chloe T.', role: 'Hydra Renewal', text: 'I came in for a pre-wedding glow and left with a routine that I actually love. Absolutely worth it.' },
  ];
}
