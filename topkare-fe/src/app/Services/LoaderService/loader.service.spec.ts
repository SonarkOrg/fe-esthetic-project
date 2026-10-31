import { RouterTestingModule } from '@angular/router/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { Subject } from 'rxjs';

import { LOADER_SHOW_DELAY_MS, LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;
  let events: Subject<unknown>;
  let value: boolean;

  function setup(platform: 'browser' | 'server' = 'browser') {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{ provide: PLATFORM_ID, useValue: platform }],
    });
    events = TestBed.inject(Router).events as unknown as Subject<unknown>;
    service = TestBed.inject(LoaderService);
    value = false;
    service.isLoading.subscribe(v => (value = v));
  }

  it('should be created', () => {
    setup();
    expect(service).toBeTruthy();
  });

  it('does not show the overlay for quick loads', fakeAsync(() => {
    setup();
    service.startLoading();
    tick(LOADER_SHOW_DELAY_MS - 50);
    service.stopLoading();
    tick(1000);
    expect(value).toBeFalse();
  }));

  it('shows the overlay only after the delay, and hides it on stop', fakeAsync(() => {
    setup();
    service.startLoading();
    tick(LOADER_SHOW_DELAY_MS + 1);
    expect(value).toBeTrue();
    service.stopLoading();
    expect(value).toBeFalse();
  }));

  it('ignores the initial navigation but reacts to later ones', fakeAsync(() => {
    setup();
    events.next(new NavigationStart(1, '/'));
    tick(1000);
    expect(value).toBeFalse();
    events.next(new NavigationEnd(1, '/', '/'));
    events.next(new NavigationStart(2, '/team'));
    tick(LOADER_SHOW_DELAY_MS + 1);
    expect(value).toBeTrue();
    events.next(new NavigationEnd(2, '/team', '/team'));
    expect(value).toBeFalse();
  }));

  it('never shows on the server', fakeAsync(() => {
    setup('server');
    service.startLoading();
    tick(1000);
    expect(value).toBeFalse();
  }));
});
