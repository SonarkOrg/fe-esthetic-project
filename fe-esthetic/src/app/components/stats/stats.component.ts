import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { CountUpDirective } from '../../directives/count-up.directive';
import { ParallaxDirective } from '../../directives/parallax.directive';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [RevealDirective, CountUpDirective, ParallaxDirective],
  template: `
    <section class="section stats" id="results" aria-labelledby="stats-title">
      <div class="stats__bg" aria-hidden="true"><div class="orb orb--blush" [appParallax]="0.1" parallaxMode="relative"></div></div>
      <div class="container">
        <header class="section__head">
          <p class="eyebrow" appReveal>Results</p>
          <h2 id="stats-title" class="h2" [appReveal]="80">Care you can see and feel</h2>
        </header>
        <dl class="stats__grid">
          @for (s of stats; track s.label; let i = $index) {
            <div class="stat glass" [appReveal]="i * 100">
              <dt>{{ s.label }}</dt>
              <dd><span class="stat__num" [appCountUp]="s.value">{{ s.value }}</span><span class="stat__suffix">{{ s.suffix }}</span></dd>
            </div>
          }
        </dl>
        <ol class="steps">
          @for (st of steps; track st.title; let i = $index) {
            <li class="step" [appReveal]="i * 140">
              <span class="step__n" aria-hidden="true">0{{ i + 1 }}</span>
              <h3>{{ st.title }}</h3>
              <p>{{ st.text }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class StatsComponent {
  stats = [
    { value: 1200, suffix: '+', label: 'Happy clients' },
    { value: 12, suffix: '', label: 'Years of experience' },
    { value: 98, suffix: '%', label: 'Would recommend us' },
    { value: 15, suffix: '', label: 'Signature treatments' },
  ];
  steps = [
    { title: 'Consult', text: 'A relaxed skin analysis and conversation about your goals.' },
    { title: 'Treat', text: 'A bespoke treatment delivered in a calm, private room.' },
    { title: 'Glow', text: 'A take-home ritual and follow-up to keep your results lasting.' },
  ];
}
