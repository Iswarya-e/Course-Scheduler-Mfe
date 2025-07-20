import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class StudentGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const role = localStorage.getItem('userRole');
    if (role === 'student') {
      return true;
    }
    this.router.navigate(['/home']); // or login
    return false;
  }
}
