import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-cliente',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './userregistrer.html',
  styleUrl: './userregistrer.css',
})
export class RegisterCliente {

  registerForm!: FormGroup;

  loading = false;
  message = '';
  isError = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      ciudad: ['', Validators.required],
      departamento: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
    });


  }

  submit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.message = '';

    this.http.post(
      '/api/auth/register/cliente',
      this.registerForm.value
    ).subscribe({
      next: () => {
        this.message = 'Registro exitoso';
        this.isError = false;
        this.loading = false;
        this.registerForm.reset();
      },
      error: (err) => {
        this.message =
          err.error?.message || 'Error al registrar cliente';
        this.isError = true;
        this.loading = false;
      }
    });
  }
}
