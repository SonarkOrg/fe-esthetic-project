import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';
import { ParallaxDirective } from '../../directives/parallax.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, RevealDirective, ParallaxDirective],
  template: `
    <section class="section contact" id="contact" aria-labelledby="contact-title">
      <div class="contact__bg" aria-hidden="true"><div class="orb orb--gold" [appParallax]="0.12" parallaxMode="relative"></div></div>
      <div class="container contact__grid">
        <div class="contact__copy">
          <p class="eyebrow" appReveal>Book your visit</p>
          <h2 id="contact-title" class="h2" [appReveal]="80">Begin your glow story</h2>
          <p [appReveal]="160">Tell us a little about your skin and we will reply within one working day to arrange your consultation.</p>
          <address class="contact__details" [appReveal]="240">
            <span>12 Linden Row, Suite 3</span>
            <a href="tel:+15550123456">+1 (555) 012-3456</a>
            <a href="mailto:hello@feesthetic.example">hello&#64;feesthetic.example</a>
            <span>Tue &ndash; Sat · 9am &ndash; 6pm</span>
          </address>
        </div>

        <div class="glass form-card" [appReveal]="120">
          @if (sent()) {
            <div class="success" role="status" aria-live="polite">
              <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M14 25l7 7 13-15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <h3>Thank you, {{ form.value.name }}!</h3>
              <p>Your request has been received. We will be in touch shortly.</p>
              <button class="btn btn--ghost" type="button" (click)="reset()">Send another request</button>
            </div>
          } @else {
            <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
              <div class="field">
                <label for="f-name">Full name</label>
                <input id="f-name" type="text" formControlName="name" autocomplete="name" [attr.aria-invalid]="invalid('name')" aria-describedby="e-name" />
                @if (invalid('name')) { <small id="e-name" class="error">Please enter your name (min. 2 characters).</small> }
              </div>
              <div class="field">
                <label for="f-email">Email</label>
                <input id="f-email" type="email" formControlName="email" autocomplete="email" [attr.aria-invalid]="invalid('email')" aria-describedby="e-email" />
                @if (invalid('email')) { <small id="e-email" class="error">Please enter a valid email address.</small> }
              </div>
              <div class="field">
                <label for="f-service">Treatment</label>
                <select id="f-service" formControlName="service" [attr.aria-invalid]="invalid('service')" aria-describedby="e-service">
                  <option value="">Choose a treatment</option>
                  @for (s of services; track s) { <option [value]="s">{{ s }}</option> }
                </select>
                @if (invalid('service')) { <small id="e-service" class="error">Please choose a treatment.</small> }
              </div>
              <div class="field">
                <label for="f-msg">Message <span class="muted">(optional)</span></label>
                <textarea id="f-msg" rows="4" formControlName="message"></textarea>
              </div>
              <button class="btn btn--block" type="submit">Request appointment</button>
            </form>
          }
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);
  sent = signal(false);
  services = ['Signature Facial', 'Hydra Renewal', 'Glow Peel', 'Lash & Brow Studio', 'Microneedling', 'Restorative Massage'];
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    service: ['', Validators.required],
    message: [''],
  });

  invalid(c: 'name' | 'email' | 'service'): boolean {
    const ctrl = this.form.controls[c];
    return ctrl.invalid && (ctrl.touched || ctrl.dirty);
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sent.set(true);
  }

  reset() {
    this.form.reset();
    this.sent.set(false);
  }
}
