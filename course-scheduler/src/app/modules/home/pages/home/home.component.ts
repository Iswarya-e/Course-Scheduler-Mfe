import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();

    if (this.isLoggedIn) {
      // Redirect logged-in user to dashboard immediately
      //this.router.navigate(['/student/dashboard']);
    }
  }

  goTo(role: 'student' | 'tutor'): void {
    if (role === 'student') {
      this.router.navigate(['/student/login']); // or student login page
    } else {
      this.router.navigate(['/tutor/login']); // tutor login page
    }
  }
}
