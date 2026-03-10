import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../features/producto/product.service';
import { Producto } from '../../features/producto/producto';
import { productcard} from '../productcard/product-card';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    CommonModule,
    productcard
  ],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class CatalogoComponent implements OnInit {

  productos: Producto[] = [];
  loading = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {

    this.productService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error cargando productos", err);
        this.loading = false;
      }
    });

  }

}
