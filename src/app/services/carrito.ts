import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


export interface AddToCartRequest {
  productoId: number;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private api = 'http://localhost:8080/api/carrito';

  constructor(private http: HttpClient) {}

  getCarrito(): Observable<any> {
    return this.http.get(this.api);
  }

  agregarProducto(productoId: number, cantidad: number = 1): Observable<any> {
    return this.http.post(`${this.api}/items`, {
      productoId,
      cantidad
    });
  }

  actualizarCantidad(productoId: number, cantidad: number): Observable<any> {
    return this.http.put(`${this.api}/items/${productoId}`, {
      cantidad
    });
  }

  eliminarProducto(productoId: number): Observable<any> {
    return this.http.delete(`${this.api}/items/${productoId}`);
  }

  vaciarCarrito(): Observable<any> {
    return this.http.delete(this.api);
  }
}
