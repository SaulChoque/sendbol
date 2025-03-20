import { Component, Input } from '@angular/core';
import { WELCOMESIZES } from '../../../../../models/constants';
import { SizesWelcomeAnimation } from '../../../../../models/sizesWelcomeAnimation';
import { MediaQueryService } from '../../../../../services/media-query.service';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing-welcome-item-animation',
  standalone: true,
  imports: [],
  templateUrl: './landing-welcome-item-animation.component.html',
  styleUrl: './landing-welcome-item-animation.component.scss'
})
export class LandingWelcomeItemAnimationComponent {
  welcomesizes = [...WELCOMESIZES];
  currentVariablesLNDWEL: String = "";

  constructor(
    private mediaQueryService: MediaQueryService,
  ) {}



  @Input()
  breakpoints = Breakpoints;
  currentBreakpoint?: string;
  currentSizes = new SizesWelcomeAnimation();





  ngOnInit() {

    this.mediaQueryService.breakpoint$.subscribe(() => {
      this.mediaQueryService.triggerProcesses();
      this.currentBreakpoint = this.mediaQueryService.returnBreakpoint();
      this.changeSizes();
    });


    //console.log(this.constantes.IMGBAN001);
  }

  changeSizes(){

    //CMMT welcomesizes[0]: COMPU
    //CMMT welcomesizes[1]: CELULAR

    switch(this.currentBreakpoint){

      case Breakpoints.XLarge:
        this.changeSizesPC();

        break;
      case Breakpoints.Large:
        this.changeSizesPC();

        break;
      case Breakpoints.Medium:
        this.changeSizesPC();
        break;

      case Breakpoints.Small:
        this.changeSizesCEL();

        break;

      case Breakpoints.XSmall:
        this.changeSizesCEL();

        break;
    }

  }

  changeSizesPC(){
    this.currentSizes = this.welcomesizes[0];
    this.currentVariablesLNDWEL = "lndwelPc";
  }

  changeSizesCEL(){
    this.currentSizes = this.welcomesizes[1];
    this.currentVariablesLNDWEL = "lndwelCel";

  }



}
