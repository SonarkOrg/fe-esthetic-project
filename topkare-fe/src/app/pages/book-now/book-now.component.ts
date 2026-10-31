import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { RESPONSE } from '../../response.token';
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
  notFound = false;

  constructor(
    private titleService: Title,
    private dataService: DataService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: object,
    @Optional() @Inject(RESPONSE) private res: { status(code: number): unknown } | null
  ) {
    this.titleService.setTitle('Book now | Topkare');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.notFound = false;
      if (!Number.isFinite(id)) { this.markNotFound(); this.titleService.setTitle('Service not found | Topkare'); return; }
      this.dataService.getServicesById(id).subscribe(service => {
        this.service = service;
        if (!service) this.markNotFound();
        if (!service) this.titleService.setTitle('Service not found | Topkare');
        if (service?.title) {
          this.titleService.setTitle(`${this.toTitleCase(service.title)} | Topkare`);
        }
      });
    });
  }

  private markNotFound(): void {
    this.notFound = true;
    if (isPlatformServer(this.platformId) && this.res) this.res.status(404);
  }

  private toTitleCase(v: string): string {
    return v.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  }
}
