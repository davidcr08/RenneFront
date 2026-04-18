import { Component } from '@angular/core';
import {PedidoService} from '../../core/services/PedidoService';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-mipedido',
  imports: [
    NgClass,
    NgForOf,
    NgIf,
    DatePipe
  ],
  templateUrl: './mipedido.html',
  styleUrl: './mipedido.css',
})
export class Mipedido {


  pedidos: any[] = [];
  loading = true;
  clienteId!: number;



  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {

    const id = this.getUserIdFromToken();

    if (!id) {
      console.error('No hay usuario autenticado');
      return;
    }

    this.clienteId = id;
    this.cargarPedidos();
  }



  cargarPedidos() {
    this.pedidoService.getMisPedidos().subscribe({
      next: (data) => {
        this.pedidos = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }


  getEstadoLabel(estado: string): string {
    switch (estado) {
      case 'CREADO': return 'Pedido creado';
      case 'GUIA_GENERADA': return 'Guía generada';
      case 'EMPACADO': return 'Empacado';
      case 'ENVIADO': return 'En camino';
      case 'ENTREGADO': return 'Entregado';
      case 'NOVEDAD': return 'Novedad en la entrega';
      default: return estado;
    }
  }


  getUserIdFromToken(): number | null {
    const token = localStorage.getItem('token');

    if (!token) return null;

    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload));

    return Number(decoded.sub); // 👈 aquí está el userId
  }
}
