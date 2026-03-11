import { Component, Input } from '@angular/core';
import { Producto } from '../../features/producto/producto';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class productcard {

  @Input() producto!: Producto;

}
