import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Usuario {
  id_usuario?: number;
  correo: string;
  contrasena: string;
  tipo_usuario: string;
}

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private apiUrl = 'http://localhost:3000/usuarios'; // URL del backend NestJS

  constructor(private http: HttpClient) {}

  crearUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }
}
