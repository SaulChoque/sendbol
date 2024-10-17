import { Component, Inject, OnInit, inject} from '@angular/core';

import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

//CMMT EXPLN 1: Importar los componentes que se van a usar en el template


//CMMT EXPLN Animation Resources
import { routeTransition } from './animations/route-transition';
import { ActivatedRoute } from '@angular/router';


import
{
  RouterLink,
  RouterOutlet,
}
from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet,
    MatFormFieldModule, MatIconModule, MatInputModule,
    MatButtonModule, MatMenuModule],
  animations: [routeTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(protected route: ActivatedRoute){

  }

  title = 'angular-routing';
  footerUrl = 'https://www.ganatan.com';
  footerLink = 'www.ganatan.com';
}

