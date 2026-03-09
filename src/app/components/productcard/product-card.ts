import { Component, Input } from '@angular/core';
import { Producto } from '../../features/producto/producto';

@Component({
  selector: 'app-productcard',
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class productcard {

  @Input() producto!: Producto;

}
