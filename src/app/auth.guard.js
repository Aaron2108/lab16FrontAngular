import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(@Inject(Router) router) {
    this.router = router;
  }

  canActivate() {
    const token = localStorage.getItem('token');
    if (token) {
      // El token existe, el usuario está autenticado
      return true;
    } else {
      // El token no existe, el usuario no está autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }
}
