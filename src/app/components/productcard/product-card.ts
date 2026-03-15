import { Component, Input } from '@angular/core';
import { Producto } from '../../features/producto/producto';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {CarritoService} from '../../services/carrito';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class productcard {

  @Input() producto!: Producto;

  constructor(private carritoService: CarritoService) {}

  agregarAlCarrito() {

    this.carritoService.agregarProducto(this.producto.id, 1)
      .subscribe({
        next: () => {
          console.log('Producto agregado al carrito');
        },
        error: (err) => {
          console.error('Error agregando producto', err);
        }
      });

  }

}
