import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productdetails',
  imports: [CommonModule],
  templateUrl: './productdetails.html',
  styleUrls: ['./productdetails.css']
})
export class ProductDetails implements OnInit {

  producto: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.http.get(`http://localhost:8080/api/productos/${id}`)
      .subscribe({
        next: (data) => {
          this.producto = data;
        },
        error: (err) => {
          console.error("Error cargando producto", err);
        }
      });

  }

  pedirProducto() {
    alert("Producto pedido: " + this.producto.nombre);
  }

}
