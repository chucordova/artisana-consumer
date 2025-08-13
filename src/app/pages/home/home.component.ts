import { Component } from '@angular/core';
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { AppComponent } from "../../app.component";
import { ProductsComponent } from "./components/products/products.component";
import { CartAndAdsComponent } from "./components/cart-and-ads/cart-and-ads.component";
import { Usuario, UsuariosService } from '../../services/usuarios.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [WelcomeComponent, ProductsComponent, CartAndAdsComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  usuario: Usuario = {
    correo: '',
    contrasena: '',
    tipo_usuario: 'cliente'
  };

  constructor(private usuariosService: UsuariosService) {}

  registrar() {
    this.usuariosService.crearUsuario(this.usuario).subscribe({
      next: res => console.log('Usuario creado:', res),
      error: err => console.error('Error al crear usuario:', err)
    });
  }

}
