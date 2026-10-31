import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ModalService } from '../../Services/ModalService/modal.service';

interface Member {
  name: string;
  firstName: string;
  team: string;
  role: string;
  img: string;
  quote: string;
  fact: string;
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  filters = ['All', 'Lashes', 'Nails', 'Laser'];
  activeFilter = 'All';

  members: Member[] = [
    { name: 'Laluz', firstName: 'Leah', team: 'Lashes', role: 'Lead lash artist', img: 'assets/img/services/service-5.jpg',
      quote: '“I fell in love with lash artistry the first time I saw a client open her eyes to her new look. It is a privilege to help people feel confident, and I want to say thank you to every client who trusts me.”',
      fact: 'FUN FACT: I can map a full set of lashes in under ten minutes, and I have never needed a mirror.' },
    { name: 'Moreau', firstName: 'Camille', team: 'Nails', role: 'Nail technician and educator', img: 'assets/img/services/service-4.jpg',
      quote: '“Nail design is small-scale art. I love teaching our classes and watching a nervous beginner finish her first flawless manicure.”',
      fact: 'FUN FACT: My personal record is a 24-colour gradient on a single hand.' },
    { name: 'Okafor', firstName: 'Ada', team: 'Laser', role: 'Laser and skin specialist', img: 'assets/img/home/home-1.jpg',
      quote: '“Great skin starts with education. I explain every step so clients feel safe, informed and in control from the first consultation.”',
      fact: 'FUN FACT: I keep a houseplant for every year I have worked in skincare.' },
  ];

  constructor(private modalService: ModalService, private titleService: Title) {
    this.titleService.setTitle('About us');
  }

  get visible(): Member[] {
    return this.activeFilter === 'All' ? this.members : this.members.filter((m) => m.team === this.activeFilter);
  }

  setFilter(f: string): void {
    this.activeFilter = f;
  }

  openModal(m: Member): void {
    this.modalService.openModal(m.name, m.firstName, m.team + ', ', m.role, m.quote, m.fact, 'FUN FACT: Ask me about my favourite after-care tip!', m.img);
  }
}
