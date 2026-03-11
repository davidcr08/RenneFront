import { Routes } from '@angular/router';
import {CatalogoComponent } from  './components/catalogo/catalogo'
import { ProductDetails } from './components/productdetails/productdetails';

export const routes: Routes = [

  { path: '', component: CatalogoComponent },

  { path: 'producto/:id', component: ProductDetails }
];
