import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SITE } from '../../site.config';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrl: './legal.component.css'
})
export class PrivacyComponent {
  readonly site = SITE;
  constructor(title: Title) {
    title.setTitle('Privacy policy | Topkare');
  }
}
