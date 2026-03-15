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

  protected router = inject(Router);
  authService = inject(AuthService);

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

 /* goToProfile() {
    this.router.navigate(['/profile']);
  }
*/

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
