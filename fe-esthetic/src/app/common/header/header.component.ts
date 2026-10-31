import { ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, HostListener, NgZone, OnInit, ViewContainerRef } from '@angular/core';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { SidebarmenuComponent } from '../sidebarmenu/sidebarmenu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobile = false;
  sidebarRef: ComponentRef<SidebarmenuComponent> | null = null;

  constructor(private resolver: ComponentFactoryResolver,
     private viewContainerRef: ViewContainerRef,
      private ngZone: NgZone,
      private cdRef: ChangeDetectorRef
    ) {}

  ngOnInit() {
    this.checkMobile();
  }

  private checkMobile() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth < 1220;
      this.ngZone.run(() => {}); // Run change detection
      this.cdRef.detectChanges(); // Manually trigger change detection
    }
    console.log(this.isMobile)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkMobile();
  }

  toggleMobileMenu() {
      // Open the sidebar by creating a dynamic component
      const factory = this.resolver.resolveComponentFactory(SidebarmenuComponent);
      this.sidebarRef = this.viewContainerRef.createComponent(factory);
    }
}
