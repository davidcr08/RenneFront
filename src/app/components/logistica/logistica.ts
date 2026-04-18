import {Component, OnInit} from '@angular/core';
import { PedidoService } from '../../core/services/PedidoService';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-logistica',
  imports: [CommonModule],
  templateUrl: './logistica.html',
  styleUrl: './logistica.css',
})

export class Logistica implements OnInit {

  rol: string = '';
  pedidos: any[] = [];

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.rol = this.getRol();
    this.cargarPedidos();
  }

  getRol(): string {
    const token = localStorage.getItem('token');
    if (!token) return '';

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role;
  }

  cargarPedidos() {
    this.pedidoService.getPedidos().subscribe({
      next: (data) => {

        // 🔥 filtro por rol
        if (this.rol === 'JEFE_BODEGA') {
          this.pedidos = data.filter((p: any) =>
            ['CREADO', 'GUIA_GENERADA', 'EMPACADO'].includes(p.estado)
          );
        }

        if (this.rol === 'DOMICILIARIO') {
          this.pedidos = data.filter((p: any) =>
            p.estado === 'ENVIADO'
          );
        }

      },
      error: () => {
        console.error('Error cargando pedidos');
      }
    });
  }

  generarGuia(id: number) {
    this.pedidoService.generarGuia(id).subscribe(() => {
      this.cargarPedidos();
    });
  }

  cambiarEstado(id: number, estado: string) {
    this.pedidoService.cambiarEstado(id, estado).subscribe(() => {
      this.cargarPedidos();
    });
  }

  abrirNovedad(id: number) {
    const comentario = prompt('Describe la novedad');

    if (!comentario) return;

    this.pedidoService
      .cambiarEstado(id, 'NOVEDAD', comentario)
      .subscribe(() => {
        this.cargarPedidos();
      });
  }
}
