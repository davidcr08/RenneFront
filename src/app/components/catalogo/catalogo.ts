import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../features/producto/product.service';
import { Producto } from '../../features/producto/producto';
import { productcard} from '../productcard/product-card';
import {CarritoService} from '../../services/carrito';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    CommonModule,
    productcard,
    FormsModule
  ],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class CatalogoComponent implements OnInit {

  productos: Producto[] = [];
  loading = true;
  precioMin: number | null = null;
  precioMax: number | null = null;
  productosFiltrados: Producto[] = [];

  constructor(
    private productService: ProductService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {

    this.productService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.productosFiltrados = data;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error cargando productos", err);
        this.loading = false;
      }
    });

  }

  limpiarFiltros() {

    this.precioMin = null;
    this.precioMax = null;

    this.productosFiltrados = this.productos;

  }


  agregarAlCarrito(productoId: number) {
    this.carritoService.agregarProducto(productoId).subscribe({
      next: () => {
        alert("Producto agregado al carrito");
      },
      error: () => {
        alert("Error al agregar producto");
      }
    });
  }
  filtrarProductos() {

    this.productosFiltrados = this.productos.filter(producto => {

      const cumpleMin = this.precioMin == null || producto.precio >= this.precioMin;
      const cumpleMax = this.precioMax == null || producto.precio <= this.precioMax;

      return cumpleMin && cumpleMax;

    });

  }

}
