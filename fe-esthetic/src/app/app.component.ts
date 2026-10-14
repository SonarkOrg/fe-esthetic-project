import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { QuoteComponent } from './components/quote/quote.component';
import { StatsComponent } from './components/stats/stats.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, NavComponent, HeroComponent, AboutComponent, ServicesComponent,
    QuoteComponent, StatsComponent, TestimonialsComponent, ContactComponent, FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'fe-esthetic';
}
