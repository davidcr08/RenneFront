import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from '../../features/auth/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profile-data',
  imports: [CommonModule],
  templateUrl: './profile-data.html',
  styleUrl: './profile-data.css',
})
export class ProfileData implements OnInit {

  private authService = inject(AuthService);

  perfil: any = null;
  loading = true;

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

}
