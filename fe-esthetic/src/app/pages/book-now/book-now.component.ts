import { Component } from '@angular/core';
import { UnderHeaderBookComponent } from '../../common/under-header-book/under-header-book.component';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { MasonryComponent } from './masonry/masonry.component';
import { DetailsSectionComponent } from './details-section/details-section.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.css'
})
export class BookNowComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Book Now');
  }
}
