export interface LoginRequest {
  correo: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  type: string; // "Bearer"
}

export interface PerfilResponse {
  id: number;
  nombre?: string;
  correo: string;
  tipoUsuario: string;
  tipoWorker?: string;

  ciudad?: string;
  departamento?: string;
  telefono?: string;
  direccion?: string;
}
