import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';

import { MediaQueryService } from './services/media-query.service';
import { bootstrapApplication } from '@angular/platform-browser';




export const appConfig: ApplicationConfig = {
  providers:
  [
    provideZoneChangeDetection({ eventCoalescing: false }),
    provideRouter(routes, withViewTransitions()),
    //provideClientHydration(),
    provideAnimationsAsync(),
    provideAnimations()

  ]

};

