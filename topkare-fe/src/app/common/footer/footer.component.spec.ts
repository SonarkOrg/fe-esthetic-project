import { NO_ERRORS_SCHEMA, PLATFORM_ID } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SITE } from '../../site.config';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('newsletter submit', () => {
    const original = { ...SITE.forms };
    const originalEmail = SITE.email;
    afterEach(() => {
      SITE.forms.newsletterEndpoint = original.newsletterEndpoint;
      SITE.email = originalEmail;
    });

    function make(platform: 'server' | 'browser' = 'server') {
      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        declarations: [FooterComponent],
        imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule],
        schemas: [NO_ERRORS_SCHEMA],
        providers: [{ provide: PLATFORM_ID, useValue: platform }],
      });
      const f = TestBed.createComponent(FooterComponent);
      f.detectChanges();
      return f.componentInstance;
    }

    it('does not submit an invalid email', () => {
      const c = make();
      c.myForm.setValue({ userName: 'nope' });
      c.onSubmit();
      expect(c.state).toBe('idle');
    });

    it('is unavailable with no endpoint and no email', () => {
      SITE.forms.newsletterEndpoint = '';
      SITE.email = '';
      const c = make();
      c.myForm.setValue({ userName: 'a@b.co' });
      c.onSubmit();
      expect(c.state).toBe('unavailable');
    });

    it('falls back to mailto when there is an email but no endpoint', () => {
      SITE.forms.newsletterEndpoint = '';
      SITE.email = 'hello@example.test';
      const c = make('server'); // server: state set, no navigation
      c.myForm.setValue({ userName: 'a@b.co' });
      c.onSubmit();
      expect(c.state).toBe('mailto');
    });

    it('posts JSON to the endpoint, shows sending, then success / error', () => {
      SITE.forms.newsletterEndpoint = 'https://forms.test/news';
      const c = make();
      const http = TestBed.inject(HttpTestingController);
      c.myForm.setValue({ userName: 'a@b.co' });
      c.onSubmit();
      expect(c.state).toBe('sending');
      const req = http.expectOne('https://forms.test/news');
      expect(req.request.method).toBe('POST');
      expect(req.request.headers.get('Accept')).toBe('application/json');
      expect(req.request.body).toEqual({ email: 'a@b.co' });
      req.flush({});
      expect(c.state).toBe('success');

      c.myForm.setValue({ userName: 'c@d.co' });
      c.onSubmit();
      http.expectOne('https://forms.test/news').flush('x', { status: 500, statusText: 'err' });
      expect(c.state).toBe('error');
    });
  });
});
