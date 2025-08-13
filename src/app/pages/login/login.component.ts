import { Component, Host, HostBinding } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    imports: [FormsModule, CommonModule],
})
export class LoginComponent {

    @HostBinding('class') class = 'w-dvw h-dvh';

    correo = '';
    contrasena = '';
    error = '';

    constructor(private authService: AuthService, private router: Router) { }

    login() {
        this.authService.login(this.correo, this.contrasena).subscribe({
            next: () => this.router.navigate(['/home']),
            error: () => this.error = 'Correo o contraseña incorrectos'
        });
    }
}
