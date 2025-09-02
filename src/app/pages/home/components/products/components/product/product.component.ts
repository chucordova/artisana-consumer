import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SliderItemComponent } from "./components/slider-item/slider-item.component";
import { CommonModule } from '@angular/common';
import { CartService } from '../../../../../../services/cart.service';


@Component({
  selector: 'app-product',
  imports: [SliderItemComponent, CommonModule],
  templateUrl: './product.component.html',
  styles: ``
})
export class ProductComponent {

  producto: any;
  precioBase: number;
  precioTotal: number = 0;

  presentaciones: any[] = [];
  leche: any[] = [];
  cubierta: any[] = [];
  endulzante: any[] = [];

  elementos = ['Leche de almendra', 'Leche regular', 'Leche de coco'];
  elementosPresentacion = ['Frappe', 'En las rocas', 'Caliente'];

  constructor(public dialogRef: MatDialogRef<ProductComponent>, private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any, private cartService: CartService
  ) {
    this.producto = data
    this.precioBase = this.producto.precio;
  }

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

  ngOnInit(): void {
    console.log(this.producto);
    this.precioTotal = this.precioBase;
    this.cargarPresentaciones();
    this.cargarLeches();
    this.cargarCubiertas();
    this.cargarEndulzantes();
  }

  cargarPresentaciones() {
    if (!this.producto.presentacion || this.producto.presentacion.length === 0) {
      this.presentaciones = [];
      return;
    }
  
    this.presentaciones = this.producto.presentacion.map((p: any) => ({
      nombre: p.nombrePresentacion, // 👈 corregí el typo "Presetnacion"
      precio: p.precio
    }));
  }
  
  cargarLeches() {
    if (!this.producto.personalizables?.leche || this.producto.personalizables.leche.length === 0) {
      this.leche = [];
      return;
    }
  
    this.leche = this.producto.personalizables.leche.map((l: any) => ({
      nombre: l.tipo,
      precio: l.precio
    }));
  }
  
  cargarCubiertas() {
    if (!this.producto.personalizables?.cubierta || this.producto.personalizables.cubierta.length === 0) {
      this.cubierta = [];
      return;
    }
  
    console.log("cubiertas", this.producto.personalizables.cubierta);
  
    this.cubierta = this.producto.personalizables.cubierta.map((c: any) => ({
      nombre: c.tipo,
      precio: c.precio
    }));
  }
  
  cargarEndulzantes() {
    if (!this.producto.personalizables?.endulzante || this.producto.personalizables.endulzante.length === 0) {
      this.endulzante = [];
      return;
    }
  
    this.endulzante = this.producto.personalizables.endulzante.map((e: any) => ({
      nombre: e.tipo,
      precio: e.precio
    }));
  }
  

  selectedIndex = 0;
  selectedIndexLeche = 0;
  selectedIndexCubierta = 0;
  selectedIndexEndulzante = 0;

onPresentacionChange(index: number) {
  this.selectedIndex = index;
  this.calcularPrecioTotal();
}

onLecheChange(index: number) {
  this.selectedIndexLeche = index;
  this.calcularPrecioTotal();
}
  
onCubiertaChange(index: number) {
  this.selectedIndexCubierta = index;
  this.calcularPrecioTotal();
}

onEndulzanteChange(index: number) {
  this.selectedIndexEndulzante = index; 
  this.calcularPrecioTotal();
}

calcularPrecioTotal(): number {

  let total = 0;

  if (this.presentaciones.length > 0) {
    total += this.presentaciones[this.selectedIndex]?.precio || 0;
  }

  if (this.leche.length > 0) {
    total += this.leche[this.selectedIndexLeche]?.precio || 0;
  }

  if (this.cubierta.length > 0) {
    total += this.cubierta[this.selectedIndexCubierta]?.precio || 0;
  }

  if (this.endulzante.length > 0) {
    total += this.endulzante[this.selectedIndexEndulzante]?.precio || 0;
  }

  this.precioTotal = total;

  return this.precioTotal;

}

cantidadProductos = 1;

incrementarCantidad() {
  this.cantidadProductos++;
}

decrementarCantidad() {
  if (this.cantidadProductos > 1) {
    this.cantidadProductos--;
  }
}

agregarAlCarrito() {

  const productoSeleccionado = {
    ...this.producto,
    cantidad: this.cantidadProductos,
    presentacion: this.presentaciones[this.selectedIndex] || null,
    leche: this.leche[this.selectedIndexLeche] || null,
    cubierta: this.cubierta[this.selectedIndexCubierta] || null,
    endulzante: this.endulzante[this.selectedIndexEndulzante] || null,
    precioTotal: this.precioTotal
  };

  this.cartService.addItem(productoSeleccionado);    

}

}
