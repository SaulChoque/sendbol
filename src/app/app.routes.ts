import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ContactFormComponent } from './pages/forms/contact-form/contact-form.component';
//import { homecomponer } from './pages/general/home/home.component';
//import { NotFoundComponent } from './pages/general/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, },
  { path: 'cotizacion', component: ContactFormComponent, },
];
