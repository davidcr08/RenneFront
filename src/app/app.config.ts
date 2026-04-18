import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { RegisterCliente} from  './features/auth/userregistrer/userregistrer';
import { Home} from './features/auth/home/home';
import { ProfileData} from './components/profile-data/profile-data';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import  { productcard }  from './components/productcard/product-card';
import { ProductDetails } from './components/productdetails/productdetails';
import {CatalogoComponent } from  './components/catalogo/catalogo'
import {CarritoComponent} from './carrito/carrito';
import {RecuperarPasswordComponent} from './components/recuperarcontrasena/recuperarcontrasena';
import {Mipedido} from './components/mipedido/mipedido';
import {Logistica} from './components/logistica/logistica';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'Register', component: RegisterCliente },
  { path: 'Home', component: Home },
  { path: 'CatalogoComponent', component: CatalogoComponent },
  { path: 'ProfileData', component: ProfileData },
  { path: 'productcard', component: productcard },
  { path: 'ProductDetails', component: ProductDetails },
  { path: 'producto/:id', component: ProductDetails },
  { path: 'carrito', component: CarritoComponent },
  { path: 'Recuperarcontrasena', component: RecuperarPasswordComponent },
  {path: 'Mipedido', component: Mipedido },
  {path: 'Logistica', component:Logistica  },

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
