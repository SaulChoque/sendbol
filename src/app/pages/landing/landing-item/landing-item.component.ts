import { Component, input, Input, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Images } from '../../../models/constants';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import { SizesConstants } from '../../../models/constants';
import { landingItem } from '../../../models/landingItem';
import { MediaQueryService } from '../../../services/media-query.service';
import { Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import * as AOS from 'aos';


@Component({
  selector: 'app-landing-item',
  standalone: true,
  imports: [ImageModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './landing-item.component.html',
  styleUrl: './landing-item.component.css'
})
export class LandingItemComponent {

  constructor(
    private mediaQueryService: MediaQueryService,
    private router: Router
  ) {}

  ImagesSizes = SizesConstants.LANDINGIMAGES;


  @Input()
  item?: landingItem;

  @Input()
  breakpoints = Breakpoints;
  currentBreakpoint?: string;
  currentWidth?: string;
  fontSize = "0px";



  ngOnInit() {

    AOS.init()
    window.addEventListener('load',AOS.refresh)

    this.mediaQueryService.breakpoint$.subscribe(() => {
      this.mediaQueryService.triggerProcesses();
      this.currentBreakpoint = this.mediaQueryService.returnBreakpoint();
    });


    this.currentWidth = this.mediaQueryService.returnWidth();


    //console.log(this.constantes.IMGBAN001);
  }
  navigateToAnother() {
    this.router.navigate(['/cotizacion']);
  }

}
