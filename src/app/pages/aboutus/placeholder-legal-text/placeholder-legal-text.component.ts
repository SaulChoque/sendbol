import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TextTreeItemComponent } from '../items/text-tree-item/text-tree-item.component';
import { SplitterModule } from 'primeng/splitter';
import { ActivatedRoute } from '@angular/router';

//CMMT Importacion de modelos
import { ARTICLES } from '../../../models/constants';
import { Article } from '../../../models/article';



//CMMT Importacion de servicios

import { MediaQueryService } from '../../../services/media-query.service';
import { Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-placeholder-legal-text',
  standalone: true,
  imports: [MatButtonModule, SplitterModule, TextTreeItemComponent],
  templateUrl: './placeholder-legal-text.component.html',
  styleUrl: './placeholder-legal-text.component.css'
})


export class PlaceholderLegalTextComponent {

  constructor(
    private mediaQueryService: MediaQueryService,
    private activatedRoute: ActivatedRoute // Inyecta ActivatedRoute aquí
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

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      // Aquí puedes usar los parámetros id y guid según sea necesario
      if (id == "ToS") {
        this.article = ARTICLES[0];
        // Aquí puedes agregar la lógica que desees ejecutar cuando se reciba el parámetro id
      }else if (id == "PP") {
        this.article = ARTICLES[1];
        // Aquí puedes agregar la lógica que desees ejecutar cuando se reciba el parámetro id
      }

      // Realiza el desplazamiento suave hasta el principio de la página
      this.scrollToTop();

    });


    this.currentWidth = this.mediaQueryService.returnWidth();
  }


  article = ARTICLES[0];


  showFiller = false;

  Navigate(elem: HTMLElement) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
