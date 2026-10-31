import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SITE } from '../../site.config';
import { FORM_HEADERS, mailtoUrl } from '../../form-submit';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
  myForm: FormGroup;
  state: 'idle' | 'sending' | 'success' | 'error' | 'mailto' | 'unavailable' = 'idle';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.myForm = this.fb.group({
      userName: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    if (this.state === 'sending') return;
    const email: string = this.myForm.value.userName;

    if (SITE.forms.newsletterEndpoint) {
      this.state = 'sending';
      this.http
        .post(SITE.forms.newsletterEndpoint, { email }, { headers: FORM_HEADERS })
        .subscribe({
          next: () => {
            this.state = 'success';
            this.myForm.reset();
          },
          error: () => (this.state = 'error'),
        });
      return;
    }

    if (!SITE.email) {
      this.state = 'unavailable';
      return;
    }

    if (isPlatformBrowser(this.platformId)) {
      window.location.href = mailtoUrl(SITE.email, 'Newsletter sign-up', `Please add this email address to the ${SITE.name} newsletter: ${email}`);
    }
    this.state = 'mailto';
  }
}
