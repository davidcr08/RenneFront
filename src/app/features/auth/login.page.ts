import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Iniciar Sesión</h2>

    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div>
        <label>Correo</label>
        <input type="email" formControlName="correo" />
      </div>

      <div>
        <label>Password</label>
        <input type="password" formControlName="password" />
      </div>

      <button type="submit" [disabled]="form.invalid">Ingresar</button>

      <p *ngIf="errorMessage" style="color:red;">
        {{ errorMessage }}
      </p>
    </form>
  `
})
export class LoginPage {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  errorMessage: string | null = null;

  form = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  onSubmit(): void {
    if (this.form.invalid) return;

    this.authService.login(this.form.value as any).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        if (err.status === 401) {
          this.errorMessage = 'Credenciales inválidas';
        } else {
          this.errorMessage = 'Error del servidor';
        }
      }
    });
  }
}
