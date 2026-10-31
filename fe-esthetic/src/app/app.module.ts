import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataService } from './Services/DataService/data.service';
import { LoaderComponent } from './common/loader/loader.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule
import { RouterLink, RouterModule } from '@angular/router';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { UnderHeaderBookComponent } from './common/under-header-book/under-header-book.component';
import { DetailsSectionComponent } from './pages/book-now/details-section/details-section.component';
import { MasonryComponent } from './pages/book-now/masonry/masonry.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { CoursesSectionComponent } from './pages/classes/courses-section/courses-section.component';
import { CoursesAreaComponent } from './pages/home/courses-area/courses-area.component';
import { CardsDescComponent } from './pages/classes/cards-desc/cards-desc.component';
import { ContactAreaComponent } from './pages/home/contact-area/contact-area.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UnderHeaderContactComponent } from './common/under-header-contact/under-header-contact.component';
import { UnderHeaderServicesComponent } from './pages/services/under-header-services/under-header-services.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderImagesComponent } from './common/slider-images/slider-images.component';
import { DescriptionAreaComponent } from './pages/home/description-area/description-area.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { TestimoniesAreaComponent } from './pages/home/testimonies-area/testimonies-area.component';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { ServicesComponent } from './pages/services/services.component';
import { CarouselServicesComponent } from './pages/services/carousel-services/carousel-services.component';
import { SpecificClassComponent } from './pages/specific-class/specific-class.component';
import { PhilosophySectionComponent } from './pages/specific-class/philosophy-section/philosophy-section.component';
import { CardSectionComponent } from './pages/specific-class/card-section/card-section.component';
import { CardsSectionComponent } from './pages/services/cards-section/cards-section.component';
import { OverallDescComponent } from './pages/specific-class/overall-desc/overall-desc.component';
import { FooterTeamComponent } from './pages/team/footer-team/footer-team.component';
import { ModalTeamComponent } from './pages/team/modal-team/modal-team.component';
import { ModalService } from './Services/ModalService/modal.service';
import { TeamComponent } from './pages/team/team.component';

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
    TestimoniesAreaComponent,
    ServicesComponent,
    CarouselComponent,
    CarouselServicesComponent,
    SpecificClassComponent,
    CardsDescComponent,
    PhilosophySectionComponent,
    CardSectionComponent,
    CardsSectionComponent,
    OverallDescComponent,
    ModalTeamComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, // Import FormsModule
    ReactiveFormsModule, // Import ReactiveFormsModule
    HttpClientModule,
    RouterLink,
    NgClass,
    NgIf,
    NgStyle,
    RouterModule.forRoot([]), // Add your routes here, use empty array if there are none
  ],
  providers: [
    DataService,
    ModalService // Include your services here
  ],
  bootstrap: [AppComponent] // Ensure AppComponent is listed here
})
export class AppModule {}
