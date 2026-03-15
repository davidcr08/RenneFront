export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

export interface ItemCarrito {

  id: number;
  productoId: number;
  nombreProducto: string;
  precio: number;
  cantidad: number;

}

export interface Carrito {
  items: ItemCarrito[];
  total: number;
}
