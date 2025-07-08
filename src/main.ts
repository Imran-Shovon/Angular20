import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
    providers: [
    provideHttpClient(),  // <-- This line provides HttpClient service
    provideRouter(routes) 
  ]
})
  .catch((err) => console.error(err));
