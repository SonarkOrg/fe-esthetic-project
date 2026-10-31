import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DataService } from '../../Services/DataService/data.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.css'
})
export class BookNowComponent implements OnInit {
  service: any;

  constructor(
    private titleService: Title,
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
    this.titleService.setTitle('Book now | Topkare');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!Number.isFinite(id)) return;
      this.dataService.getServicesById(id).subscribe(service => {
        this.service = service;
        if (service?.title) {
          this.titleService.setTitle(`${this.toTitleCase(service.title)} | Topkare`);
        }
      });
    });
  }

  private toTitleCase(v: string): string {
    return v.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  }
}
