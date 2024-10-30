import { Component } from '@angular/core';
import { landingItem } from '../../models/landingItem';
import { MediaQueryService } from '../../services/media-query.service';
import { LandingItemComponent } from "./landing-item/landing-item.component";
import { LANDINGITEMS } from '../../models/constants';
import { bootstrapApplication } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LandingComponent, LandingItemComponent, RouterModule, MatIconModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  landingintems = [...LANDINGITEMS];



  #mediaQueryService: MediaQueryService;

  constructor(mediaQueryService: MediaQueryService) {
    this.#mediaQueryService = mediaQueryService;
  }
}
