import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-desc',
  templateUrl: './cards-desc.component.html',
  styleUrl: './cards-desc.component.css'
})
export class CardsDescComponent {
  rows = [
    { id: 1, badge: 'Lash artistry', title: 'Make better lashes',
      text: 'Learn lash mapping, isolation and application from working artists. Small groups and plenty of hands-on practice, so you leave confident.',
      img: 'assets/img/services/service-2.jpg', alt: 'Lash extension being applied' },
    { id: 2, badge: 'Nail design', title: 'Make better nails',
      text: 'From flawless prep to intricate nail art, build the skills behind a manicure that lasts. Beginners and professionals are welcome.',
      img: 'assets/img/services/service-3.jpg', alt: 'Manicure with nail polish bottles on marble' },
    { id: 3, badge: 'Laser and skin', title: 'Make better skin',
      text: 'Understand the science and safety behind laser treatments and practise on modern equipment under expert guidance.',
      img: 'assets/img/services/service-1.jpg', alt: 'Laser hair removal treatment' },
  ];
}
