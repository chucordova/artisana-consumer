import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutDialogComponent } from '../../../checkout/checkout-dialog/checkout-dialog.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent {

  constructor(private dialog: MatDialog, private cartService: CartService) {}

  productosEnCarrito: any[] = [];

  totalGeneral: number = 0;

  ngOnInit(): void {
    this.cartService.items$.subscribe(items => {
      this.productosEnCarrito = items;
      this.totalGeneral = this.calcularTotal();
    });
  }

  abrirCheckout(): void {
    console.log('Abrir checkout');
    this.dialog.open(CheckoutDialogComponent, {

      disableClose: true,
    });
  }

    mostrarCarrito = false;
  
    cerrar() {
      this.mostrarCarrito = false;
    }  
  
    private calcularTotal(): number {
      return this.productosEnCarrito.reduce((total, producto) => total + (producto.precioTotal * (producto.cantidad || 1)), 0);
    }

}
