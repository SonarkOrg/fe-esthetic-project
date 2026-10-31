// carousel.component.ts
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() items: any[] = [];
  activeIndex: number = 2;

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
  }

  moveAndScale() {
    // Set the active item to be centered and larger
    this.activeIndex = Math.floor(this.items.length / 2);
  }
}
