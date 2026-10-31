import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrl: './courses-section.component.css'
})
export class CoursesSectionComponent {
  classItems = [
    {id: 1, title: 'Test',},
    {id: 2, title: 'Poo',},
    {id: 3, title: 'Pee',},
    {id: 4, title: 'Damn',},
  ]
}
