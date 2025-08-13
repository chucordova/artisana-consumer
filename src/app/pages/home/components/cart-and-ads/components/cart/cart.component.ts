import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CheckoutDialogComponent } from '../../../checkout/checkout-dialog/checkout-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent {

  constructor(private dialog: MatDialog) {}

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
  

}
