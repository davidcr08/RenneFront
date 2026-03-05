import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from './ auth.models';
import { Observable, tap, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:8080/api/auth';

  //Encargado del cambio del navbar
  private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
  loggedIn$ = this.loggedInSubject.asObservable();

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, data)
      .pipe(
        tap(response => {
          localStorage.setItem('token', response.token);
          this.loggedInSubject.next(true);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedInSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
