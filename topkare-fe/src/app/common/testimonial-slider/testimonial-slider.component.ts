import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrl: './testimonial-slider.component.css'
})
export class TestimonialSliderComponent implements OnInit, OnDestroy {
  @Input() testimonies: any[] = []

  @Input() indicator = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 2000;

  selectedIndex = 0;
  private slideTimer: ReturnType<typeof setInterval> | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    // Timers must not run during SSR / prerender, or rendering never settles.
    if (this.autoSlide && isPlatformBrowser(this.platformId)) {
      this.autoSlideImages();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  // Change image every slideInterval ms
  autoSlideImages(): void{
    this.stopAutoSlide();
    this.slideTimer = setInterval(() =>{
      this.onNext();
    }, this.slideInterval);
  }

  private stopAutoSlide(): void {
    if (this.slideTimer !== null) {
      clearInterval(this.slideTimer);
      this.slideTimer = null;
    }
  }

  /** Two-letter monogram from a full name, e.g. "Sophia Johnson" -> "SJ". */
  initials(name: string | null | undefined): string {
    const parts = (name ?? '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '';
    const first = parts[0][0];
    const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (first + last).toUpperCase();
  }

  selectImg(index : number): void{
    this.selectedIndex = index;
  }

  onPrev(): void{
    const count = this.testimonies?.length ?? 0;
    if (count === 0) {
      return;
    }
    if(this.selectedIndex === 0){
      this.selectedIndex = count - 1;
    } else {
      this.selectedIndex --;
    }
  }

  onNext(): void{
    const count = this.testimonies?.length ?? 0;
    if (count === 0) {
      return;
    }
    if(this.selectedIndex === count - 1){
      this.selectedIndex = 0;
    } else {
      this.selectedIndex ++;
    }
  }

}
