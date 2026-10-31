import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DataService } from '../../../Services/DataService/data.service';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-courses-area',
  templateUrl: './courses-area.component.html',
  styleUrl: './courses-area.component.css'
})
export class CoursesAreaComponent {
  constructor(private dataService: DataService) { }

  courses = [
    {id: 1, name: "Lashes", smallDesc: "Discover the art of luscious lashes with our specialized esthetic course, perfecting the fluttering eye-catching look.", url: "specific-class/lashes"},
    {id: 2, name: "Nails", smallDesc: "Unleash your creativity with our nail esthetic course, mastering the intricate designs for stunning manicures every time.", url: "specific-class/nails"},
    {id: 3, name: "laser", smallDesc: "Explore the science and precision behind laser treatments in our esthetic course, achieving flawless skin rejuvenation techniques.", url: "specific-class/laser"},
  ]

  setData(data: any): void {
    this.dataService.setItemData(data);
  }


}
