import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  private API = 'http://localhost:8080/api/password';

  constructor(private http: HttpClient) {}

  solicitar(email: string): Observable<string> {

    return this.http.post<string>(`${this.API}/request`, { email }, { responseType: 'text' as 'json' });
  }

  verificar(email: string, codigo: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.API}/verify`, { email, codigo });
  }

  resetear(email: string, codigo: string, nuevaPassword: string): Observable<any> {
    return this.http.post(`${this.API}/reset`, {
      email,
      codigo,
      nuevaPassword
    });
  }
}
