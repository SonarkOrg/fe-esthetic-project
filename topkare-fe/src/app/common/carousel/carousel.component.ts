import { Component, Input } from '@angular/core';

/** Service cards: 3-up grid on desktop, scroll-snap row on mobile. Items come from services.json. */
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  private _items: any[] = [];

  // The parent may bind undefined/null before its data has loaded.
  @Input()
  set items(value: any[] | null | undefined) {
    this._items = Array.isArray(value) ? value : [];
  }
  get items(): any[] {
    return this._items;
  }
}
