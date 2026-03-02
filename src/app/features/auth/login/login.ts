import { Component, inject } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service'; // ajusta si cambia ruta

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  errorMessage: string | null = null;
  loading = false;

  form = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  onSubmit(): void {
    if (this.form.invalid) return;

    this.loading = true;
    this.errorMessage = null;

    this.authService.login(this.form.value as any).subscribe({
      next: () => {
        this.router.navigate(['/home']); // cuando lo tengas
      },
      error: (err) => {
        this.loading = false;

        if (err.status === 401) {
          this.errorMessage = 'Credenciales inválidas';
        } else {
          this.errorMessage = 'Error del servidor';
        }
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
