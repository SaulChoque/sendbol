import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Images } from '../../../../models/constants';
import * as AOS from 'aos';

@Component({
  selector: 'app-scr2',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './scr2.component.html',
  styleUrl: './scr2.component.css'
})
export class Scr2Component {
  constantes = Images;
  ngOnInit() {
    AOS.init()
    window.addEventListener('load',AOS.refresh)
    console.log(this.constantes.IMGBAN001);
  }
}
