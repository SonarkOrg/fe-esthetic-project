import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { UnderHeaderServicesComponent } from './under-header-services/under-header-services.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { CarouselComponent } from '../../common/carousel/carousel.component';
import { CarouselServicesComponent } from './carousel-services/carousel-services.component';
import { DescriptionAreaComponent } from '../home/description-area/description-area.component';
import { CardsSectionComponent } from './cards-section/cards-section.component';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Services');
  }

  carouselItems = [
    { id: 1, imageUrl: 'assets/img/services/service-1.jpg', title: 'Laser' },
    { id: 2, imageUrl: 'assets/img/services/service-2.jpg', title: 'test2' },
    { id: 3, imageUrl: 'assets/img/services/service-3.jpg', title: 'test3' },
    { id: 4, imageUrl: 'assets/img/services/service-4.jpg', title: 'test4' },
    { id: 5, imageUrl: 'assets/img/services/service-5.jpg', title: 'test5' },
    // Add more items as needed
  ];
}
