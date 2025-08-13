import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module'; // <-- Agregar esta línea
import { HomeComponent } from './pages/home/home.component';
import { UsuariosService } from './services/usuarios.service'; // <-- Importar el servicio
import { HttpClientModule } from '@angular/common/http'; // <-- Importar HttpClientModule
import {FormsModule } from '@angular/forms'; // <-- Importar FormsModule si es necesario
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
 ],
  imports: [
    BrowserModule,
    AppRoutingModule, // <-- Importar aquí
    HomeComponent ,
    HttpClientModule, // <-- Agregar HttpClientModule aquí
    FormsModule
  ],

})
export class AppModule { }
