import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

//CMMT Breakpoints services
import { MediaQueryService } from '../../services/media-query.service';
import { Breakpoints } from '@angular/cdk/layout';

//CMMT Importacion de constantes
import { LANDINGITEMS } from '../../models/constants';

//CMMT Importacion de componentes
import { LandingItemComponent } from "./landing-item/landing-item.component";
import { LandingFlagsItemAnimationComponent } from './canvas/animated/landing-flags-item-animation/landing-flags-item-animation.component';
import { LandingBrandsItemAnimationComponent } from './canvas/animated/landing-brands-item-animation/landing-brands-item-animation.component';
import { LandingWelcomeItemAnimationComponent } from './canvas/animated/landing-welcome-item-animation/landing-welcome-item-animation.component';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    LandingItemComponent,
    LandingFlagsItemAnimationComponent,
    LandingBrandsItemAnimationComponent,
    LandingWelcomeItemAnimationComponent,
    RouterModule,
    MatIconModule,
  ],
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
