import { Component } from '@angular/core';
import { Scr1Component } from './screens/scr1/scr1.component';
import { Scr2Component } from './screens/scr2/scr2.component';
import { Scr3Component } from './screens/scr3/scr3.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Scr1Component, Scr2Component, Scr3Component],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
