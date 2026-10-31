import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-philosophy-section',
  templateUrl: './philosophy-section.component.html',
  styleUrl: './philosophy-section.component.css'
})
export class PhilosophySectionComponent {
  @Input() items: any[] = [];
}
