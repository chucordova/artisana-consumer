import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checkout-dialog',
  imports: [MatDialogModule, MatButtonModule,CommonModule],
  templateUrl: './checkout-dialog.component.html',
  styleUrl: './checkout-dialog.component.css'
})
export class CheckoutDialogComponent {
  
  constructor(public dialogRef: MatDialogRef<CheckoutDialogComponent>, private dialog: MatDialog) {}

  enviarADomicilio = false

  pasoPorEl = false;

  paso = 0;

  cerrar(): void {
    this.dialogRef.close();
  }

  abrirCheckout(){
    this.dialog.open(CheckoutDialogComponent, {
      disableClose: true,
    });
  }

  pasoPorel(){
    this.pasoPorEl = true;
    this.incrementarPaso();
  }

  incrementarPaso() {
    this.paso++;
  }
  
}
