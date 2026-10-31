import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { SliderImagesComponent } from '../../common/slider-images/slider-images.component';
import { DescriptionAreaComponent } from './description-area/description-area.component';
import { CoursesAreaComponent } from './courses-area/courses-area.component';
import { ContactAreaComponent } from './contact-area/contact-area.component';
import { TestimoniesAreaComponent } from './testimonies-area/testimonies-area.component';
import { CarouselComponent } from '../../common/carousel/carousel.component';
import {Title} from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("HOME");
  }

  topSlider = [
    {id: 1, img: 'assets/img/home/home-1.jpg'},
    {id: 2, img: 'assets/img/home/home-2.jpg'},
    {id: 3, img: 'assets/img/home/home-3.jpg'}
  ]

  carouselItems = [
    { id: 1, imageUrl: 'assets/img/services/service-1.jpg', title: 'Laser' },
    { id: 2, imageUrl: 'assets/img/services/service-2.jpg', title: 'test2' },
    { id: 3, imageUrl: 'assets/img/services/service-3.jpg', title: 'test3' },
    { id: 4, imageUrl: 'assets/img/services/service-4.jpg', title: 'test4' },
    { id: 5, imageUrl: 'assets/img/services/service-5.jpg', title: 'test5' },
    // Add more items as needed
  ];

  clientFeedback = [
    { id: 1, service: 'Makeup' ,desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit. amet consectetur adipisicing elit.', name: 'Leah Laluz' },
    { id: 2, service: 'Makeup' ,desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', name: 'test2' },
    { id: 3, service: 'Makeup' ,desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', name: 'test3' },
    { id: 4, service: 'Makeup' ,desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', name: 'test4' },
    { id: 5, service: 'Makeup' ,desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', name: 'test5' },
    { id: 6, service: 'Makeup' ,desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.', name: 'test6' },
    // Add more items as needed
  ];
}
