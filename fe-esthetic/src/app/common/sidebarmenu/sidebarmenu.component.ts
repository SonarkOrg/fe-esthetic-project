import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebarmenu',
  standalone: true,
  imports: [NgIf],
  templateUrl: './sidebarmenu.component.html',
  styleUrl: './sidebarmenu.component.css'
})
export class SidebarmenuComponent {
  isOpen = true;

  toggleContainer() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }
}
