import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-philosophy-section',
  templateUrl: './philosophy-section.component.html',
  styleUrl: './philosophy-section.component.css'
})
export class PhilosophySectionComponent implements OnInit {
  @Input() item: any;
  showMoreInfo : boolean = false;

  private readonly photos: Record<number, { src: string; alt: string }> = {
    1: { src: 'assets/img/services/service-5.jpg', alt: 'Client with soft, defined lashes and a glowing complexion' },
    2: { src: 'assets/img/home/home-3.jpg', alt: 'Hand with a fresh manicure holding a jade facial roller' },
    3: { src: 'assets/img/home/home-2.jpg', alt: 'Client relaxing with calm, radiant skin' },
  };

  get photo(): { src: string; alt: string } {
    return this.photos[this.item?.id] ?? { src: 'assets/img/home/home-2.jpg', alt: 'Client relaxing during a treatment' };
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //console.log(this.item);
  }

  toggleMoreInfo(): void { // Add this method
    this.showMoreInfo = !this.showMoreInfo;
  }
}
