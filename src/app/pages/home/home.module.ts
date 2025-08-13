import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CheckoutDialogComponent } from './components/checkout/checkout-dialog/checkout-dialog.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    CheckoutDialogComponent,
    HomeRoutingModule
  ]
})
export class HomeModule { }
