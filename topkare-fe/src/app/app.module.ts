import { ErrorHandler, NgModule } from '@angular/core';
import { GlobalErrorHandler } from './global-error-handler';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './common/loader/loader.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { FooterTeamComponent } from './pages/team/footer-team/footer-team.component';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { UnderHeaderBookComponent } from './common/under-header-book/under-header-book.component';
import { UnderHeaderContactComponent } from './common/under-header-contact/under-header-contact.component';
import { UnderHeaderServicesComponent } from './pages/services/under-header-services/under-header-services.component';
import { DetailsSectionComponent } from './pages/book-now/details-section/details-section.component';
import { MasonryComponent } from './pages/book-now/masonry/masonry.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { CoursesSectionComponent } from './pages/classes/courses-section/courses-section.component';
import { CoursesAreaComponent } from './pages/home/courses-area/courses-area.component';
import { CardsDescComponent } from './pages/classes/cards-desc/cards-desc.component';
import { ContactAreaComponent } from './pages/home/contact-area/contact-area.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SliderImagesComponent } from './common/slider-images/slider-images.component';
import { DescriptionAreaComponent } from './pages/home/description-area/description-area.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { ServicesComponent } from './pages/services/services.component';
import { CarouselServicesComponent } from './pages/services/carousel-services/carousel-services.component';
import { SpecificClassComponent } from './pages/specific-class/specific-class.component';
import { PhilosophySectionComponent } from './pages/specific-class/philosophy-section/philosophy-section.component';
import { CardSectionComponent } from './pages/specific-class/card-section/card-section.component';
import { CardsSectionComponent } from './pages/services/cards-section/cards-section.component';
import { OverallDescComponent } from './pages/specific-class/overall-desc/overall-desc.component';
import { TeamComponent } from './pages/team/team.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestimonialSliderComponent } from './common/testimonial-slider/testimonial-slider.component';
import { LoadingInterceptor } from './Interceptor/loading.interceptor';
import { LoaderService } from './Services/LoaderService/loader.service';
import { ParallaxDirective } from './directives/parallax.directive';
import { RevealDirective } from './directives/reveal.directive';
import { SidebarmenuComponent } from './common/sidebarmenu/sidebarmenu.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrivacyComponent } from './pages/legal/privacy.component';
import { CookiesComponent } from './pages/legal/cookies.component';
import { DescriptionServicesComponent } from './pages/services/description-services/description-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    FooterTeamComponent,
    BookNowComponent,
    UnderHeaderBookComponent,
    UnderHeaderContactComponent,
    UnderHeaderServicesComponent,
    DetailsSectionComponent,
    MasonryComponent,
    ClassesComponent,
    CoursesSectionComponent,
    CoursesAreaComponent,
    CardsDescComponent,
    ContactAreaComponent,
    ContactComponent,
    SliderImagesComponent,
    DescriptionAreaComponent,
    CarouselComponent,
    ServicesComponent,
    CarouselServicesComponent,
    SpecificClassComponent,
    PhilosophySectionComponent,
    CardSectionComponent,
    CardsSectionComponent,
    OverallDescComponent,
    TeamComponent,
    TestimonialSliderComponent,
    DescriptionServicesComponent,
    NotFoundComponent,
    PrivacyComponent,
    CookiesComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ParallaxDirective,
    RevealDirective,
    SidebarmenuComponent,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    LoaderService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
