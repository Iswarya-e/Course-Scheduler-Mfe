import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class TutorGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const role = localStorage.getItem('userRole');
    if (role === 'tutor') {
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
