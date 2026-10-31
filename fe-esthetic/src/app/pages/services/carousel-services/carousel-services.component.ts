import { NgClass, NgFor, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-services',
  templateUrl: './carousel-services.component.html',
  styleUrl: './carousel-services.component.css'
})
export class CarouselServicesComponent {
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
