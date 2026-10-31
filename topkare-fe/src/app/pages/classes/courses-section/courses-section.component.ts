import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../Services/DataService/data.service';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrl: './courses-section.component.css'
})
export class CoursesSectionComponent implements OnInit{
  items: any[] = [];
  constructor(private dataService : DataService){
    this.dataService.getCourses().subscribe(data => {
      this.items = data;});
    }

  ngOnInit(): void {

  }
}
