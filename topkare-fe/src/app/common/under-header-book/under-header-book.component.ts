import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-under-header-book',
  templateUrl: './under-header-book.component.html',
  styleUrl: './under-header-book.component.css'
})
export class UnderHeaderBookComponent {
  /** Selected service (from services.json); falls back to generic wording. */
  @Input() service: any;
}
