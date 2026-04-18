import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pedido {
  id: number;
  estado: string;
  guia?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = 'http://localhost:8080/api/pedidos/mis-pedidos';

  constructor(private http: HttpClient) {}

  getMisPedidos() {
    return this.http.get<any[]>(
      'http://localhost:8080/api/pedidos/mis-pedidos'
    );
  }


  generarGuia(id: number) {
    return this.http.put(`http://localhost:8080/api/pedidos/${id}/guia`, {});
  }
  checkout() {
    return this.http.post('http://localhost:8080/api/pedidos/checkout', {});
  }

  cambiarEstado(pedidoId: number, estado: string, comentario?: string) {
    let url = `http://localhost:8080/api/pedidos/${pedidoId}/estado?estado=${estado}`;

    if (comentario) {
      url += `&comentario=${comentario}`;
    }

    return this.http.put(url, {});
  }
  getPedidos() {
    return this.http.get<any[]>(
      'http://localhost:8080/api/pedidos'
    );
  }
}
