import { Component, Input } from '@angular/core';
import { FLAGSIZES } from '../../../../../models/constants';
import { SizesFlagAnimation } from '../../../../../models/sizesFlagAnimation';
import { MediaQueryService } from '../../../../../services/media-query.service';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing-flags-item-animation',
  standalone: true,
  imports: [],
  templateUrl: './landing-flags-item-animation.component.html',
  styleUrl: './landing-flags-item-animation.component.scss'
})






export class LandingFlagsItemAnimationComponent {
  currentSizes = new SizesFlagAnimation();
  constructor(
    private mediaQueryService: MediaQueryService,
  ) {}


  flagsizes = [...FLAGSIZES];

  @Input()
  breakpoints = Breakpoints;
  currentBreakpoint?: string;





  ngOnInit() {

    this.mediaQueryService.breakpoint$.subscribe(() => {
      this.mediaQueryService.triggerProcesses();
      this.currentBreakpoint = this.mediaQueryService.returnBreakpoint();
      this.changeSizes();
    });


    //console.log(this.constantes.IMGBAN001);
  }

  changeSizes(){

    //CMMT flagSizes[0]: COMPU
    //CMMT flagSizes[1]: CELULAR

    switch(this.currentBreakpoint){
      case Breakpoints.Large || Breakpoints.Medium:
        this.currentSizes = this.flagsizes[0];
        break;
      case Breakpoints.Small || Breakpoints.XSmall:
        this.currentSizes = this.flagsizes[1];
        console.log("Celular");
        break;
    }

  }




}
