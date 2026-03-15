import {Component, OnInit} from '@angular/core';
import {CarritoService} from '../services/carrito';
import { Carrito } from '../../models/carrito';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  templateUrl: 'carrito.html',
  styleUrls: ['carrito.css'],
  imports: [CommonModule]
})
export class CarritoComponent implements OnInit {

  carrito!: Carrito;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.cargarCarrito();
  }

  cargarCarrito() {
    this.carritoService.getCarrito().subscribe(data => {
      this.carrito = data;
    });
  }

  eliminar(productoId: number) {
    this.carritoService.eliminarProducto(productoId).subscribe(() => {
      this.cargarCarrito();
    });
  }

  vaciar() {
    this.carritoService.vaciarCarrito().subscribe(() => {
      this.cargarCarrito();
    });
  }
}
