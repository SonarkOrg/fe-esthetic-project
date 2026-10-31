import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, Output, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebarmenu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebarmenu.component.html',
  styleUrl: './sidebarmenu.component.css',
})
export class SidebarmenuComponent implements OnChanges, OnDestroy {
  @Input() open = false;
  @Output() closed = new EventEmitter<void>();

  private readonly doc = inject(DOCUMENT);

  ngOnChanges(): void {
    // lock the window scroll while the drawer is open
    this.doc.documentElement.classList.toggle('menu-open', this.open);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open) this.close();
  }

  close(): void {
    this.closed.emit();
  }

  ngOnDestroy(): void {
    this.doc.documentElement.classList.remove('menu-open');
  }
}
