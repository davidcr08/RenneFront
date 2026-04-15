import { Component } from '@angular/core';
import { PasswordService } from '../../services/password.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperarcontrasena.html',
  imports: [
    FormsModule,

  ],
  styleUrls: ['./recuperarcontrasena.css']
})
export class RecuperarPasswordComponent {


  email = '';
  codigo = '';
  nuevaPassword = '';
  confirmPassword = '';

  step = 1;
  mensaje = '';

  constructor(private passwordService: PasswordService) {}

  enviarCodigo() {
    this.passwordService.solicitar(this.email).subscribe({
      next: () => {
        this.mensaje = 'Código enviado al correo';
        this.step = 2;
      },
      error: () => {
        this.mensaje = 'Error al enviar código';
      }
    });
  }

  verificarCodigo() {
    this.passwordService.verificar(this.email, this.codigo).subscribe({
      next: (res) => {
        if (res) {
          this.step = 3;
          this.mensaje = '';
        } else {
          this.mensaje = 'Código incorrecto';
        }
      },
      error: () => {
        this.mensaje = 'Error al verificar código';
      }
    });
  }
// a ver que pasa 
  resetearPassword() {

    if (this.nuevaPassword !== this.confirmPassword) {
      this.mensaje = 'Las contraseñas no coinciden';
      return;
    }

    this.passwordService.resetear(
      this.email,
      this.codigo,
      this.nuevaPassword
    ).subscribe({
      next: () => {
        this.mensaje = 'Contraseña actualizada';
        this.step = 1;

        this.codigo = '';
        this.nuevaPassword = '';
        this.confirmPassword = '';
      },
      error: () => {
        this.mensaje = 'Error al cambiar contraseña';
      }
    });
  }
}
