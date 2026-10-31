import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { RESPONSE } from '../../response.token';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DataService } from '../../Services/DataService/data.service';

@Component({
  selector: 'app-specific-class',
  templateUrl: './specific-class.component.html',
  styleUrls: ['./specific-class.component.css'] // Make sure this is styleUrls, not styleUrl
})
export class SpecificClassComponent implements OnInit {
  itemData: any;
  courseId: number | null = null; // You can convert this to number based on your needs
  imgUrl: any;
  notFound = false;

  constructor(
    private titleService: Title,
    private dataService: DataService,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: object,
    @Optional() @Inject(RESPONSE) private res: { status(code: number): unknown } | null
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.courseId = parseInt(id, 10); // Convert string parameter to a number
        this.notFound = false;
        this.dataService.getCourseById(this.courseId).subscribe({
          next: (data) => {
            this.itemData = data;
            if (!data) this.markNotFound();
            this.titleService.setTitle(data ? `${this.toTitleCase(data.service)} course | Topkare` : 'Class not found | Topkare');
           },
          error: (error) => {
             console.error('Error fetching course data:', error);
            }
        });

      }
    });
  }

  private markNotFound(): void {
    this.notFound = true;
    if (isPlatformServer(this.platformId) && this.res) this.res.status(404);
  }

  private toTitleCase(v: string): string {
    return (v ?? '').toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  }
}
