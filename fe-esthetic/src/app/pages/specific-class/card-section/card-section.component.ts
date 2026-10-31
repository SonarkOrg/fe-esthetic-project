import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrl: './card-section.component.css'
})
export class CardSectionComponent {
  @Input() items: any[] = [];

}
