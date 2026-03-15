import { Routes } from '@angular/router';
import {CatalogoComponent } from  './components/catalogo/catalogo'
import { ProductDetails } from './components/productdetails/productdetails';
import { CarritoComponent } from '../app/carrito/carrito';
export const routes: Routes = [

  { path: '', component: CatalogoComponent },

  { path: 'producto/:id', component: ProductDetails },
  {
    path: 'carrito',
    component: CarritoComponent
  }
];
