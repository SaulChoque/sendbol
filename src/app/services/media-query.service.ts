import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MediaQueryService {
  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';
  widths: string[] = []; // Vector de widths para cada situación

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, 'min-width: 500px'])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpoint$.subscribe(() => this.breakpointChanged());
  }

  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = Breakpoints.Large;
      this.widths = ['1200px', '1400px', '1600px']; // Ejemplo de widths para Large
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
      this.widths = ['800px', '1000px', '1200px']; // Ejemplo de widths para Medium
    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.currentBreakpoint = Breakpoints.Small;
      this.widths = ['400px', '600px', '800px']; // Ejemplo de widths para Small
    } else if (this.breakpointObserver.isMatched('(min-width: 500px)')) {
      this.currentBreakpoint = '(min-width: 500px)';
      this.widths = ['500px', '600px', '700px']; // Ejemplo de widths para min-width: 500px
    } else if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      this.currentBreakpoint = Breakpoints.XSmall;
      this.widths = ['300px', '400px', '500px']; // Ejemplo de widths para Small
    }
  }

  returnWidth() {
    console.log("Width: " + this.widths[0]);
    return this.widths[0];
  }
  
  returnBreakpoint(){
    console.log("Breakpoint: " + this.currentBreakpoint);
    return this.currentBreakpoint;
  }
}