import { Component } from '@angular/core';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrl: './masonry.component.css'
})
export class MasonryComponent {
  tiles = [
    { url: 'assets/img/services/service-2.jpg', cls: 'tall', alt: 'Lash treatment in progress' },
    { url: 'assets/img/services/service-3.jpg', cls: '', alt: 'Manicure with nail polish on marble' },
    { url: 'assets/img/home/home-1.jpg', cls: 'big', alt: 'Smiling woman wearing a crown of fresh flowers' },
    { url: 'assets/img/services/service-1.jpg', cls: '', alt: 'Laser treatment in progress' },
    { url: 'assets/img/home/home-2.jpg', cls: 'big', alt: 'Woman relaxing in tall green grass' },
    { url: 'assets/img/services/service-5.jpg', cls: 'tall', alt: 'Woman with glowing skin and soft make-up' },
    { url: 'assets/img/home/home-3.jpg', cls: 'tall', alt: 'Jade facial roller being used on skin' },
  ];
}
