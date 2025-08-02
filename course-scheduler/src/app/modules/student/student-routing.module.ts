import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { ViewStudentBookingComponent } from './components/view-student-booking/view-student-booking.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { StudentGuard } from '../core/guards/student-guard.guard';
import { EnrolledCoursesComponent } from './components/enrolled-courses/enrolled-courses.component';

const routes: Routes = [
  { path: 'register', component: StudentRegistrationComponent },
  { path: 'login', component: StudentLoginComponent },

  {
    path: '',
    canActivate: [StudentGuard],  // Protect this route
    component: StudentDashboardComponent,
    children: [
      { path: '', redirectTo: 'create-booking', pathMatch: 'full' },
      { path: 'create-booking', component: CreateBookingComponent },
      { path: 'view-student-bookings', component: ViewStudentBookingComponent },
      { path: 'enrolled-courses', component: EnrolledCoursesComponent },

      { path: '**', redirectTo: 'create-booking' },

      // Add more child pages here like profile, etc.
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
