import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductComponent } from './components/product/product.component';
import { ProductsService } from '../../../../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent {

  productos: any[] = [];

  categoriaSeleccionada: string = 'Todos';

  productoABuscar: string = '';

  constructor(private dialog: MatDialog, private productosService: ProductsService) { }

  abrirProducto(productoRecibido: any): void {
    productoRecibido = this.productosService.getProductById(productoRecibido.id);
    if (productoRecibido) {
      this.dialog.open(ProductComponent, {
        data: {
          id: productoRecibido.id,
          nombre: productoRecibido.nombre,
          descripcion: productoRecibido.descripcion,
          precio: productoRecibido.precio,
          imagen: productoRecibido.imagen,
          leche: productoRecibido.leche,
          presentacion: productoRecibido.presentacion,
          personalizables: productoRecibido.personalizables
        },
        disableClose: true,
      });
    }
  }

  getProductosPorCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    if (categoria === 'Todos') {
      this.productos = this.productosService.getProducts();
    } else {
      this.productos = this.productosService.getProducts().filter(producto => producto.categoria === categoria);
    }
  }

  buscarProductos(): void {

    this.productoABuscar = this.productoABuscar.trim().toLowerCase();
    if (this.productoABuscar) {

      this.productosService.searchProducts(this.productoABuscar)
      .subscribe(productosEncontrados => {
        this.productos = productosEncontrados;
        // if (this.productos.length === 0) {
        //   console.log('No se encontraron productos con ese nombre.');
        // }
      }
      );

    } else {
      this.productos = this.productosService.getProducts();
    }
  }

  mostrarCarrito = false;

  cerrar() {
    this.mostrarCarrito = false;
  }

  ngOnInit() {
    this.productos = this.productosService.getProducts();
  }

}
