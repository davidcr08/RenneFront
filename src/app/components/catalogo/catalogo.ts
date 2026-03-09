import {Component, OnInit} from '@angular/core';

import { ProductService } from '../../features/producto/product.service';
import { Producto } from '../../features/producto/producto';
import { productcard} from '../productcard/product-card';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.html',
  imports: [
    productcard
  ],
  styleUrls: ['./catalogo.css']
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
