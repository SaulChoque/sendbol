import { Component, Input } from '@angular/core';
import { BRANDSIZES } from '../../../../../models/constants';
import { SizesBrandAnimation } from '../../../../../models/sizesBrandAnimation';
import { MediaQueryService } from '../../../../../services/media-query.service';
import { Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-landing-brands-item-animation',
  standalone: true,
  imports: [],
  templateUrl: './landing-brands-item-animation.component.html',
  styleUrl: './landing-brands-item-animation.component.scss'
})
export class LandingBrandsItemAnimationComponent {

  brandsizes = [...BRANDSIZES];

  currentVariablesAMZ: String = "";
  currentVariablesEBAY: String = "";
  currentVariablesETSY: String = "";
  currentVariablesSHEIN: String = "";


  constructor(
    private mediaQueryService: MediaQueryService,
  ) {}



  @Input()
  breakpoints = Breakpoints;
  currentBreakpoint?: string;
  currentSizes = new SizesBrandAnimation();





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
    this.currentSizes = this.brandsizes[0];
    this.currentVariablesAMZ = "aos-amazon-pc";
    this.currentVariablesEBAY = "aos-ebay-pc";
    this.currentVariablesETSY = "aos-etsy-pc";
    this.currentVariablesSHEIN = "aos-shein-pc";
  }
  
  changeSizesCEL(){
    this.currentSizes = this.brandsizes[1];
    this.currentVariablesAMZ = "aos-amazon-cel";
    this.currentVariablesEBAY = "aos-ebay-cel";
    this.currentVariablesETSY = "aos-etsy-cel";
    this.currentVariablesSHEIN = "aos-shein-cel";
  }

}
