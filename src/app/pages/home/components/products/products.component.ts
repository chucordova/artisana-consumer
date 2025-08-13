import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
})
export class ProductsComponent {

  constructor(private dialog: MatDialog) {}

  abrirProducto(): void {
    console.log('Abrir checkout');
    this.dialog.open(ProductComponent, {
      disableClose: true,
    });
  }

    mostrarCarrito = false;
  
    cerrar() {
      this.mostrarCarrito = false;
    }  
}
