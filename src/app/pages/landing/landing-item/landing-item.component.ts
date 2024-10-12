import { Component, input, Input, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Images } from '../../../models/constants';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { landingItem } from '../../../models/landingItem';
import { MediaQueryService } from '../../../services/media-query.service';
import * as AOS from 'aos';


@Component({
  selector: 'app-landing-item',
  standalone: true,
  imports: [ImageModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './landing-item.component.html',
  styleUrl: './landing-item.component.css'
})
export class LandingItemComponent {
  #mediaQueryService: MediaQueryService;

  constructor(mediaQueryService: MediaQueryService) {
    this.#mediaQueryService = mediaQueryService;
  }

  @Input()
  item?: landingItem;
  
  @Input()
  
  currentBreakpoint?: string;
  currentWidth?: string;
  fontSize = "0px";
  
  
  
  ngOnInit() {
    
    AOS.init()
    window.addEventListener('load',AOS.refresh)
    this.currentWidth = this.#mediaQueryService.returnWidth();
    this.currentBreakpoint = this.#mediaQueryService.returnBreakpoint();
    
    if (this.currentWidth = "300px") {
      this.fontSize = "2em";
    }

    //console.log(this.constantes.IMGBAN001);
  }
}
