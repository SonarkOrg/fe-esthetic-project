import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { SpecificClassComponent } from './pages/specific-class/specific-class.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BookNowComponent } from './pages/book-now/book-now.component';
import { TeamComponent } from './pages/team/team.component';
import { ServicesComponent } from './pages/services/services.component';
import { PrivacyComponent } from './pages/legal/privacy.component';
import { CookiesComponent } from './pages/legal/cookies.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Topkare | Beauty Studio & Classes' },
  { path: 'classes', component: ClassesComponent, title: 'Classes | Topkare' },
  // Titles for the two dynamic routes are set in the components (they depend on the id).
  { path: 'specific-class/:id', component: SpecificClassComponent },
  { path: 'contact', component: ContactComponent, title: 'Contact | Topkare' },
  { path: 'specific-service/:id', component: BookNowComponent },
  { path: 'team', component: TeamComponent, title: 'About us | Topkare' },
  { path: 'services', component: ServicesComponent, title: 'Services | Topkare' },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
