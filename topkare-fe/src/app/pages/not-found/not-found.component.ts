import { Component, Inject, Optional, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { RESPONSE } from '../../response.token';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  constructor(
    title: Title,
    @Inject(PLATFORM_ID) platformId: object,
    @Optional() @Inject(RESPONSE) res: { status(code: number): unknown } | null,
  ) {
    title.setTitle('Page not found | Topkare');
    if (isPlatformServer(platformId) && res) {
      res.status(404);
    }
  }
}
