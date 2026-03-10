import { Component } from '@angular/core';
import {Banner} from '../../../components/banner/banner';
import {CatalogoComponent} from '../../../components/catalogo/catalogo';

@Component({
  selector: 'app-home',
  imports: [
    Banner,
    CatalogoComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
