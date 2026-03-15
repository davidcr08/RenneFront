import {Component, OnInit} from '@angular/core';
import {CarritoService} from '../services/carrito';
import { Carrito } from '../../models/carrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
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
