import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';

import { SanctuaryPreset } from '../theme/sanctuary-preset';

import { authInterceptor } from './core/interceptors/auth.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        authInterceptor
      ])
    ),
    providePrimeNG({
      theme: {
        preset: SanctuaryPreset,
        options: {
          darkModeSelector: false,
        }
      },
      ripple: true
    })
  ]
};
