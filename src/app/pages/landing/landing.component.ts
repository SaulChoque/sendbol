import { Component, Input } from '@angular/core';
import { landingItem } from '../../models/landingItem';
import { LandingItemComponent } from "./landing-item/landing-item.component";
import { LANDINGITEMS } from '../../models/constants';
import { bootstrapApplication } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import { MediaQueryService } from '../../services/media-query.service';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LandingComponent, LandingItemComponent, RouterModule, MatIconModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  landingintems = [...LANDINGITEMS];
  constructor(
    private mediaQueryService: MediaQueryService,
  ) {}

  @Input()
  breakpoints = Breakpoints;
  currentBreakpoint?: string;
  currentWidth?: string;


  ngOnInit() {

    this.mediaQueryService.breakpoint$.subscribe(() => {
      this.mediaQueryService.triggerProcesses();
      this.currentBreakpoint = this.mediaQueryService.returnBreakpoint();
    });


    this.currentWidth = this.mediaQueryService.returnWidth();


    //console.log(this.constantes.IMGBAN001);
  }
}
