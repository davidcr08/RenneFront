import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {AuthService} from '../../features/auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],

  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  rol: string = '';
  protected router = inject(Router);
  authService = inject(AuthService);


  ngOnInit() {
    this.authService.loggedIn$.subscribe(() => {
      this.rol = this.getRol();
    });
  }

  getRol(): string {
    const token = localStorage.getItem('token');
    if (!token) return '';

    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegister() {
    this.router.navigate(['/Register']);
  }

 /* goToProfile() {
    this.router.navigate(['/profile']);
  }
*/

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  esWorker(): boolean {
    const rol = this.getRol();
    return rol === 'JEFE_BODEGA' || rol === 'DOMICILIARIO';
  }

}
