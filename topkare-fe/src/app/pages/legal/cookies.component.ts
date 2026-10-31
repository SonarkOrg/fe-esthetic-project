import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SITE } from '../../site.config';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrl: './legal.component.css'
})
export class CookiesComponent {
  readonly site = SITE;
  constructor(title: Title) {
    title.setTitle('Cookie policy | Topkare');
  }
}
