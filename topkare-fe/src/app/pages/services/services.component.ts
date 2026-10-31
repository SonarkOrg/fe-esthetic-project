import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../../Services/DataService/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  itemData: any[] = [];
  serviceId: number | null = null; // You can convert this to number based on your needs
  imgUrl: any;

  constructor(
    private titleService: Title,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.dataService.getServices().subscribe({
        next: (data) => {
          this.itemData = data;},
        error: (error) => {
            console.error('Error fetching course data:', error);
          }
      });
  }
}

