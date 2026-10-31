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
import { DataService } from '../../Services/DataService/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  itemData: any;
  testimonyId: number | null = null;
  testimonyData : any[] =  [];
  servicesData : any [] = [];

  constructor(
    private titleService: Title,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataService.getTestimony().subscribe(data => {
      this.testimonyData = data;
    });

    this.dataService.getServices().subscribe(data => {
      this.servicesData = data;
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.testimonyId = parseInt(id, 10); // Convert string parameter to a number
        this.dataService.getCourseById(this.testimonyId).subscribe({
          next: (data) => {
            this.itemData = data;
           },
          error: (error) => {
             console.error('Error fetching course data:', error);
            }
        });

      }
    });
  }
  topSlider = [
    {id: 1, img: 'assets/img/home/home-1.jpg', alt: 'Smiling woman wearing a crown of fresh flowers'},
    {id: 2, img: 'assets/img/home/home-2.jpg', alt: 'Woman relaxing in tall green grass'},
    {id: 3, img: 'assets/img/home/home-3.jpg', alt: 'Jade facial roller being used on skin'}
  ]

  carouselItems = [
    { id: 1, imageUrl: 'assets/img/services/service-1.jpg', title: 'Laser' },
    { id: 2, imageUrl: 'assets/img/services/service-2.jpg', title: 'Lashes' },
    { id: 3, imageUrl: 'assets/img/services/service-3.jpg', title: 'Nails', },
    // Add more items as needed
  ];

}
