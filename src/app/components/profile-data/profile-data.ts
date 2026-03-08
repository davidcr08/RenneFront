import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from '../../features/auth/auth.service';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-profile-data',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-data.html',
  styleUrl: './profile-data.css',
})
export class ProfileData implements OnInit {

  private authService = inject(AuthService);

  perfil: any = null;
  loading = true;
  editMode = false;

  ngOnInit(): void {

    this.authService.getPerfil().subscribe({
      next: (data) => {
        this.perfil = data;
        this.loading = false;
      },
      error: (err) => {
        console.error("Error cargando perfil", err);
        this.loading = false;
      }
    });

  }

  activarEdicion() {
    this.editMode = true;
  }

  guardarCambios() {
    this.authService.actualizarPerfil(this.perfil).subscribe({
      next: () => {
        this.editMode = false;
        alert("Perfil actualizado correctamente");
      },
      error: (err) => {
        console.error("Error actualizando perfil", err);
      }
    });
  }

}
