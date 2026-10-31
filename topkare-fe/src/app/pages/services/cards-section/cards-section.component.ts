import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrl: './cards-section.component.css'
})
export class CardsSectionComponent {
  cards = [
    { icon: 'assets/img/services/bank.svg', title: 'Price', more: 'More on price', link: '/contact',
      text: 'Pricing depends on the service, the time spent and where it is given. You always get a clear quote before we begin.' },
    { icon: 'assets/img/services/home.svg', title: 'Location', more: 'More on location', link: '/contact',
      text: 'Visit us at the studio or ask about a home visit. Either way we bring the same calm, careful and personal service.' },
    { icon: 'assets/img/services/lock.svg', title: 'Security', more: 'More on security', link: '/contact',
      text: 'Your details and client file are kept private. Preferences are saved so every refill is seamless and safe.' },
    { icon: 'assets/img/services/clock.svg', title: 'Cancellation', more: 'More on cancellation', link: '/contact',
      text: 'Plans change. Cancel or reschedule free of charge up to 24 hours before your appointment.' },
  ];
}
