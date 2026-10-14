import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer__inner">
        <a class="nav__brand" href="#home" aria-label="Back to top"><span>Fe <em>Esthetic</em></span></a>
        <nav aria-label="Footer">
          <a href="#about">About</a><a href="#services">Treatments</a><a href="#results">Results</a><a href="#contact">Contact</a>
        </nav>
        <p>&copy; {{ year }} Fe Esthetic. All rights reserved.</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  year = 2026;
}
