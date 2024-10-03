import { Component, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Images } from '../../../../models/constants';

@Component({
  selector: 'app-scr3',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './scr3.component.html',
  styleUrl: './scr3.component.css'
})
export class Scr3Component {
  constantes = Images;
  ngOnInit() {
    console.log(this.constantes.IMGBAN001);
  }
}
