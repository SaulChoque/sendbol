import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Images } from '../../../../models/constants';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import * as AOS from 'aos';


@Component({
  selector: 'app-scr1',
  standalone: true,
  imports: [ImageModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './scr1.component.html',
  styleUrl: './scr1.component.css'
})
export class Scr1Component {
  constantes = Images;
  ngOnInit() {
    AOS.init()
    window.addEventListener('load',AOS.refresh)
    console.log(this.constantes.IMGBAN001);
  }
}
