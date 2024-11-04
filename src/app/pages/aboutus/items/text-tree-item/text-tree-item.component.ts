import { Component, Input } from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { ARTICLES } from '../../../../models/constants';


import { Article } from '../../../../models/article';
import { ButtonModule } from 'primeng/button';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */


/**
 * @title Tree with nested nodes (childrenAccessor)
 */


@Component({
  selector: 'app-text-tree-item',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTreeModule, ButtonModule],
  templateUrl: './text-tree-item.component.html',
  styleUrl: './text-tree-item.component.css'
})
export class TextTreeItemComponent {


  //CMMT EXPLN Objeto Articulo necesario que se mostrara en el arbol
  @Input( {
    required: true,
  } )
  articulo: Article = { titulo: '', subtitulos: [], contenido: '' }; // Inicializar con un valor por defecto

  datasource = this.articulo.subtitulos;



  //dataSource = ARTICLES;

  childrenAccessor = (node: Article) => node.subtitulos ?? [];

  hasChild = (_: number, node: Article) => !!node.subtitulos && node.subtitulos.length > 0;

  handleClick(node: Article) {
    console.log('Button clicked:', node);
    // Aquí puedes agregar la lógica que desees ejecutar cuando se haga clic en el botón
    this.scrollToSubtitulo(node);
  }

  scrollToSubtitulo(node: Article) {
    const element = document.getElementById(node.titulo);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
