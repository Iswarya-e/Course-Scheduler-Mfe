import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
})
export class StudentDashboardComponent {
  constructor(private router: Router) {}

  goToCreateBooking() {
    this.router.navigate(['/student/create-booking']);
  }

  goToViewBookings() {
    this.router.navigate(['/student/view-student-bookings']);
  }

  goToProfile() {
    this.router.navigate(['/student/profile']); // if you have this route
  }
}
