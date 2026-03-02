import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Userregistrer} from  './features/auth/userregistrer/userregistrer';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'Register', component: Userregistrer },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
