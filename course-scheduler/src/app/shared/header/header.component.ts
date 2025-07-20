import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../modules/core/service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;


  userName = 'John Doe'; // Replace with actual user data
  userAvatarUrl = 'https://i.pravatar.cc/150?img=3'; // Replace with actual avatar
  notificationCount = 3; // Replace with actual notification count
  searchQuery = '';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
