import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';
// import { environment } from './environments/environment';


bootstrapApplication(App, {
    providers: [
    provideHttpClient(),  // <-- This line provides HttpClient service
    provideRouter(routes), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }) ,
    // environment.production ? provideServiceWorker('ngsw-worker.js') : [],
  ]
})
  .catch((err) => console.error(err));
