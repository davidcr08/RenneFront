import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private apiUrl = 'http://localhost:8080/api/carrito';

  constructor(private http: HttpClient) {}

  agregarProducto(productoId: number, cantidad: number = 1): Observable<any> {

    const body = {
      productoId: productoId,
      cantidad: cantidad
    };

    return this.http.post(`${this.apiUrl}/items`, body);
  }
}

