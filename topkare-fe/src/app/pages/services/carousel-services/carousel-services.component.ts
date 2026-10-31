import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-services',
  templateUrl: './carousel-services.component.html',
  styleUrl: './carousel-services.component.css'
})
export class CarouselServicesComponent {
  private _items: any[] = [];

  // The parent may bind undefined/null before its data has loaded.
  // Normalise to an array so the template and index math never see undefined.
  @Input()
  set items(value: any[] | null | undefined) {
    this._items = Array.isArray(value) ? value : [];
    this.clampActiveIndex();
  }
  get items(): any[] {
    return this._items;
  }

  activeIndex: number = 1;

  next() {
    if (this.items.length === 0) {
      return;
    }
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
  }

  prev() {
    if (this.items.length === 0) {
      return;
    }
    this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
  }

  moveAndScale() {
    if (this.items.length === 0) {
      return;
    }
    // Set the active item to be centered and larger
    this.activeIndex = Math.floor(this.items.length / 2);
  }

  private clampActiveIndex() {
    if (this._items.length === 0) {
      this.activeIndex = 0;
    } else if (this.activeIndex < 0 || this.activeIndex >= this._items.length) {
      this.activeIndex = this._items.length - 1;
    }
  }
}
