import {Component, OnInit} from '@angular/core';
import {CarritoService} from '../services/carrito';
import { Carrito } from '../../models/carrito';
import { CommonModule } from '@angular/common';
import {PedidoService} from '../core/services/PedidoService';

@Component({
  selector: 'app-carrito',
  standalone: true,
  templateUrl: 'carrito.html',
  styleUrls: ['carrito.css'],
  imports: [CommonModule]
})
export class CarritoComponent implements OnInit {

  carrito!: Carrito;



  constructor(
    private carritoService: CarritoService,
    private pedidoService: PedidoService
  ) {}

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

  pedirProducto() {

    const resumen = this.carrito.items
      .map(item => item.nombreProducto + " x" + item.cantidad)
      .join(", ");

    alert("Carrito pedido por: " + resumen);

  }

  comprar() {
    this.pedidoService.checkout().subscribe({
      next: () => {
        alert('Pedido creado con éxito');
        this.cargarCarrito(); // refresca carrito
      },
      error: () => {
        alert('Error al crear el pedido');
      }
    });
  }

}
