import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-section',
  templateUrl: './details-section.component.html',
  styleUrl: './details-section.component.css'
})
export class DetailsSectionComponent {
  @Input() service: any;
  details = [
    { img: 'assets/img/services/service-2.jpg', alt: 'Lash treatment in progress', title: 'This is what we offer',
      text: 'Every visit starts with a conversation about what you want. We take the time to understand your style, then tailor each treatment to bring out your natural features.' },
    { img: 'assets/img/services/service-3.jpg', alt: 'Manicure with polish on marble', title: 'Care that lasts',
      text: 'Premium products, careful technique and honest advice mean results you will love for weeks. Your preferences are saved so every return visit is seamless.' },
  ];
}
