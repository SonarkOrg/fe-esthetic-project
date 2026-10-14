import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  function render() {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    return fixture;
  }

  it('creates the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it(`has the 'fe-esthetic' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.title).toEqual('fe-esthetic');
  });

  it('renders the hero headline', () => {
    const el: HTMLElement = render().nativeElement;
    const heading = el.querySelector('h1#hero-title')?.textContent ?? '';
    expect(heading.replace(/\s+/g, ' ').trim()).toContain('Radiance, gently revealed.');
  });

  it('renders 6 treatment cards', () => {
    const el: HTMLElement = render().nativeElement;
    expect(el.querySelectorAll('article.card').length).toBe(6);
  });

  it('renders 3 testimonial quote cards', () => {
    const el: HTMLElement = render().nativeElement;
    expect(el.querySelectorAll('figure.quote-card').length).toBe(3);
  });

  it('renders all six page sections', () => {
    const el: HTMLElement = render().nativeElement;
    for (const id of ['home', 'about', 'services', 'results', 'testimonials', 'contact']) {
      expect(el.querySelector(`section#${id}`)).withContext(`section#${id}`).not.toBeNull();
    }
  });

  it('expands the mobile nav when the toggle is clicked', () => {
    const fixture = render();
    const el: HTMLElement = fixture.nativeElement;
    const toggle = el.querySelector<HTMLButtonElement>('button.nav__toggle');
    expect(toggle).not.toBeNull();
    toggle!.click();
    fixture.detectChanges();
    expect(toggle!.getAttribute('aria-expanded')).toBe('true');
  });
});
