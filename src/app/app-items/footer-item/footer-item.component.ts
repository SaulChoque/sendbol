import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

//CMMT: Importacion de constantes
import { SVGS } from '../../models/constants';
import { SOCIALMEDIA } from '../../models/constants';

@Component({
  selector: 'app-footer-item',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatGridListModule, MatListModule],
  templateUrl: './footer-item.component.html',
  styleUrl: './footer-item.component.css'
})
export class FooterItemComponent {
  svgs = [...SVGS];
  socialmedia = [...SOCIALMEDIA];
}
