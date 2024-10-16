import { Component, Inject, OnInit, inject} from '@angular/core';

import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { distinctUntilChanged, tap } from 'rxjs';

//CMMT EXPLN 1: Importar los componentes que se van a usar en el template
import { landingItem } from './models/landingItem';
import { Images } from './models/constants';
import { slideInAnimation } from './animations/animations';

//CMMT EXPLN Animation Resources
import { routeTransition } from './animations/route-transition';
import { ActivatedRoute } from '@angular/router';


import 
{ 
  ChildrenOutletContexts, 
  provideRouter,
  RouterLink, 
  RouterOutlet,
  Router,
  withViewTransitions,
  Routes,
} 
from '@angular/router';
import { routes } from './app.routes';

import { bootstrapApplication } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet,
    MatFormFieldModule, MatIconModule, MatInputModule,
    MatButtonModule, MatMenuModule],
  animations: [slideInAnimation, routeTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
  constructor(protected route: ActivatedRoute){
    
  }


  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';
  widths: string[] = []; // Vector de widths para cada situación



  title = 'angular-routing';
  footerUrl = 'https://www.ganatan.com';
  footerLink = 'www.ganatan.com';
}

