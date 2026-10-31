import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { SpecificClassComponent } from './pages/specific-class/specific-class.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { TeamComponent } from './pages/team/team.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
                                { path: '', component: HomeComponent },
                                { path: 'classes', component: ClassesComponent },
                                { path: 'specific-class/:id', component: SpecificClassComponent },
                                { path: 'contact', component: ContactComponent },
                                { path: 'book-now/:id', component: BookNowComponent },
                                { path: 'book', component: BookNowComponent },
                                { path: 'team', component: TeamComponent },
                                { path: 'services', component: ServicesComponent },
                                ];
