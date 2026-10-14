import { Component } from '@angular/core';
import { ParallaxDirective } from '../../directives/parallax.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ParallaxDirective],
  template: `
    <section class="hero" id="home" aria-labelledby="hero-title">
      <div class="hero__bg" aria-hidden="true">
        <div class="layer" [appParallax]="0.35" [parallaxMouse]="28"><div class="orb orb--blush float"></div></div>
        <div class="layer" [appParallax]="0.18" [parallaxMouse]="-20"><div class="orb orb--gold float float--b"></div></div>
        <div class="layer" [appParallax]="-0.08" [parallaxMouse]="14"><div class="orb orb--sage float float--c"></div></div>
        <div class="layer hero__ring" [appParallax]="0.5" [parallaxMouse]="-36">
          <svg viewBox="0 0 200 200" class="spin"><circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" stroke-width="0.6" stroke-dasharray="2 7"/><circle cx="100" cy="100" r="72" fill="none" stroke="currentColor" stroke-width="0.6"/></svg>
        </div>
      </div>

      <div class="container hero__grid">
        <div class="hero__copy" [appParallax]="0.06">
          <p class="eyebrow hero-in" style="--i:0">Skin &amp; beauty studio</p>
          <h1 id="hero-title" class="hero__title">
            <span class="word"><span style="--i:1">Radiance,</span></span>
            <span class="word"><span style="--i:2">gently</span></span>
            <span class="word"><span style="--i:3"><em>revealed.</em></span></span>
          </h1>
          <p class="lead hero-in" style="--i:4">Personalised facials, advanced skin therapies and quiet, restorative rituals, crafted to bring out the healthiest version of your skin.</p>
          <div class="hero__cta hero-in" style="--i:5">
            <a class="btn" href="#contact">Book a consultation</a>
            <a class="btn btn--ghost" href="#services">Explore treatments</a>
          </div>
        </div>

        <div class="hero__art" aria-hidden="true">
          <div class="layer" [appParallax]="0.12" [parallaxMouse]="12">
            <div class="arch hero-in" style="--i:2"></div>
          </div>
          <div class="layer art-leaf" [appParallax]="0.26" [parallaxMouse]="-18">
            <svg viewBox="0 0 240 360" class="sway">
              <g fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
                <path d="M120 350C110 270 130 190 120 20"/>
                <path d="M120 300c-40-10-62-40-66-76 38 4 62 30 66 76Z"/>
                <path d="M120 240c40-10 64-42 66-80-40 6-64 36-66 80Z"/>
                <path d="M120 170c-34-8-54-34-58-64 32 4 54 26 58 64Z"/>
                <path d="M120 110c30-8 48-30 50-56-30 4-48 24-50 56Z"/>
              </g>
            </svg>
          </div>
          <div class="layer art-card" [appParallax]="0.4" [parallaxMouse]="-30">
            <div class="glass badge hero-in" style="--i:6">
              <strong>4.9</strong><span>Rated by 1,200+ clients</span>
            </div>
          </div>
          <div class="layer art-card art-card--b" [appParallax]="0.08" [parallaxMouse]="22">
            <div class="glass badge hero-in" style="--i:7">
              <strong>12 yrs</strong><span>of skin expertise</span>
            </div>
          </div>
        </div>
      </div>

      <a class="scroll-cue" href="#about" aria-label="Scroll to about section"><span></span></a>
    </section>
  `,
})
export class HeroComponent {}
