import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the loader and the router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('app-loader')).not.toBeNull();
    expect(el.querySelector('router-outlet')).not.toBeNull();
  });
});

import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler, isChunkLoadError } from './global-error-handler';
import { routes } from './app-routing.module';

describe('GlobalErrorHandler', () => {
  it('logs and does not throw', () => {
    const spy = spyOn(console, 'error');
    const h: ErrorHandler = new GlobalErrorHandler('browser' as unknown as object);
    expect(() => h.handleError(new Error('boom'))).not.toThrow();
    expect(spy).toHaveBeenCalled();
  });
  it('rethrows on the server so SSR failures reach the 500 page', () => {
    const spy = spyOn(console, 'error');
    const err = new Error('render failed');
    expect(() => new GlobalErrorHandler('server' as unknown as object).handleError(err)).toThrow(err);
    expect(spy).toHaveBeenCalled();
  });
  it('detects chunk load errors', () => {
    expect(isChunkLoadError(new Error('Loading chunk 7 failed'))).toBeTrue();
    expect(isChunkLoadError(new Error('Failed to fetch dynamically imported module: x'))).toBeTrue();
    expect(isChunkLoadError(new Error('other'))).toBeFalse();
  });
  it('has a wildcard route last', () => {
    expect(routes[routes.length - 1].path).toBe('**');
  });
});
