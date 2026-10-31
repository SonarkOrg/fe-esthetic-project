import { fakeAsync, tick } from '@angular/core/testing';
import { restoreWhenReady } from './scroll-restore';

describe('restoreWhenReady', () => {
  it('applies once the page is ready', fakeAsync(() => {
    let ready = false;
    const apply = jasmine.createSpy('apply');
    restoreWhenReady(() => ready, apply, () => true);
    tick(100);
    expect(apply).not.toHaveBeenCalled();
    ready = true;
    tick(100);
    expect(apply).toHaveBeenCalledTimes(1);
  }));

  it('aborts when a newer navigation makes it stale', fakeAsync(() => {
    let current = true;
    let ready = false;
    const apply = jasmine.createSpy('apply');
    restoreWhenReady(() => ready, apply, () => current);
    tick(60);
    current = false;
    ready = true;
    tick(500);
    expect(apply).not.toHaveBeenCalled();
  }));

  it('aborts when the user scrolls (wheel/touch/key)', fakeAsync(() => {
    let ready = false;
    const apply = jasmine.createSpy('apply');
    restoreWhenReady(() => ready, apply, () => true);
    tick(60);
    window.dispatchEvent(new Event('wheel'));
    ready = true;
    tick(500);
    expect(apply).not.toHaveBeenCalled();
  }));

  it('does nothing if the page never becomes ready, and removes its listeners', fakeAsync(() => {
    const apply = jasmine.createSpy('apply');
    const target = jasmine.createSpyObj<Window>('win', ['addEventListener', 'removeEventListener']);
    restoreWhenReady(() => false, apply, () => true, 5, 10, target);
    tick(1000);
    expect(apply).not.toHaveBeenCalled();
    expect(target.addEventListener).toHaveBeenCalledTimes(3);
    expect(target.removeEventListener).toHaveBeenCalledTimes(3);
  }));
});
