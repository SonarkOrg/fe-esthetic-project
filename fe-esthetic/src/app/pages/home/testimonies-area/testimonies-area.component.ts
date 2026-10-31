import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonies-area',
  templateUrl: './testimonies-area.component.html',
  styleUrl: './testimonies-area.component.css'
})
export class TestimoniesAreaComponent {
  @Input() testimonies: any[] = [];
  activeIndex: number = 3;
  direction: 'prev' | 'next' = 'next'; // Nouvelle propriété pour la direction du slide

  next() {
    this.direction = 'next';
    this.activeIndex = (this.activeIndex + 1) % this.testimonies.length;
  }

  prev() {
    this.direction = 'prev';
    this.activeIndex = (this.activeIndex - 1 + this.testimonies.length) % this.testimonies.length;
  }

  getIndex(index: number): number {
    const lastIndex = this.testimonies.length - 1;
    return (index + lastIndex) % this.testimonies.length;
  }

  getVisibleTestimonies(): any[] {
    const prevIndex = this.getIndex(this.activeIndex - 1);
    const nextIndex = this.getIndex(this.activeIndex + 1);

    return [
      this.testimonies[prevIndex],
      this.testimonies[this.activeIndex],
      this.testimonies[nextIndex]
    ];
  }
}
