import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/DataService/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  testimonyData: any[] = [];
  servicesData: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTestimony().subscribe(data => {
      this.testimonyData = data;
    });

    this.dataService.getServices().subscribe(data => {
      this.servicesData = data;
    });
  }

  topSlider = [
    {id: 1, img: 'assets/img/home/home-1.jpg', alt: 'Smiling woman wearing a crown of fresh flowers'},
    {id: 2, img: 'assets/img/home/home-2.jpg', alt: 'Woman relaxing in tall green grass'},
    {id: 3, img: 'assets/img/home/home-3.jpg', alt: 'Jade facial roller being used on skin'}
  ];
}
