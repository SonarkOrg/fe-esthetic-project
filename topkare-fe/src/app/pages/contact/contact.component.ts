import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SITE, phoneHref } from '../../site.config';
import { FORM_HEADERS, formContext, mailtoUrl } from '../../form-submit';

type FormState = 'idle' | 'sending' | 'success' | 'error' | 'mailto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  readonly site = SITE;
  readonly telHref = phoneHref(SITE.phone);
  myForm: FormGroup;
  state: FormState = 'idle';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    if (this.state === 'sending') return;
    const { name, email, message } = this.myForm.value;

    if (SITE.forms.contactEndpoint) {
      this.state = 'sending';
      this.http
        .post(SITE.forms.contactEndpoint, { name, email, message }, { headers: FORM_HEADERS, context: formContext() })
        .subscribe({
          next: () => {
            this.state = 'success';
            this.myForm.reset();
          },
          error: () => (this.state = 'error'),
        });
      return;
    }

    const body = `${message}\n\nReply to: ${email}`;
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = mailtoUrl(SITE.email, `Enquiry from ${name}`, body);
    }
    this.state = 'mailto';
  }
}
