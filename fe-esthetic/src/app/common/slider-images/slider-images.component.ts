import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-images',
  templateUrl: './slider-images.component.html',
  styleUrl: './slider-images.component.css'
})
export class SliderImagesComponent {
  @Input() items: any[] = [];
  activeIndex: number = 0;
  direction: 'prev' | 'next' = 'next'; // Direction property for the slide
  animate: boolean = false;

  next() {
    this.direction = 'next';
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
    console.log('Next Clicked. Active Index:', this.activeIndex);

  }

  prev() {
    this.direction = 'prev';
    this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
    console.log('Previous Clicked. Active Index:', this.activeIndex);
  }

  setAnimation(direction: 'prev' | 'next') {
    this.animate = true;
    console.log(direction)
    // Explicitly set direction to a different value and then back to the original value
    this.direction = direction === 'next' ? 'prev' : 'next';
    console.log(direction)
    console.log('The new direction is ' + this.direction)
    setTimeout(() => {
      this.direction = direction;
      this.animate = false;
    }, 0); // Adjust the timeout based on your animation duration
  }

  getIndex(index: number): number {
    const lastIndex = this.items.length - 1;
    return (index + lastIndex) % this.items.length;
  }
}
