import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SliderItemComponent } from "./components/slider-item/slider-item.component";

@Component({
  selector: 'app-product',
  imports: [SliderItemComponent],
  templateUrl: './product.component.html',
  styles: ``
})
export class ProductComponent {

  elementos = ['Leche de almendra', 'Leche regular', 'Leche de coco'];
  elementosPresentacion = ['Frappe', 'En las rocas', 'Caliente'];

  constructor(public dialogRef: MatDialogRef<ProductComponent>, private dialog: MatDialog) {}

  enviarADomicilio = false

  pasoPorEl = false;

  paso = 0;

  cerrar(): void {
    this.dialogRef.close();
  }

  abrirCheckout(){
    this.dialog.open(ProductComponent, {
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
