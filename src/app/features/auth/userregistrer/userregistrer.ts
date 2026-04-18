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
    console.log('CLICK REGISTRAR');
    console.log('FORM VALUE:', this.registerForm.value);
    console.log('FORM VALID:', this.registerForm.valid);

    if (this.registerForm.invalid) {
      console.log('FORM INVALIDO');
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.message = '';

    this.http.post(
      'http://localhost:8080/api/auth/register/cliente',
      this.registerForm.value
    ).subscribe({
      next: () => {
        console.log('REGISTRO OK');
        this.message = 'Registro exitoso';
        this.isError = false;
        this.loading = false;
        this.registerForm.reset();
      },
      error: (err) => {
        console.error('ERROR BACK:', err);
        this.message =
          err.error?.message || 'Error al registrar cliente';
        this.isError = true;
        this.loading = false;
      }
    });
  }
}
