import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { ViewStudentBookingComponent } from './components/view-student-booking/view-student-booking.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';

const routes: Routes = [
  { path: 'register', component: StudentRegistrationComponent },
  { path: 'login', component: StudentLoginComponent },

  {
    path: '',
    component: StudentDashboardComponent,
    children: [
      { path: '', redirectTo: 'create-booking', pathMatch: 'full' },
      { path: 'create-booking', component: CreateBookingComponent },
      { path: 'view-student-bookings', component: ViewStudentBookingComponent },
      // Add more child pages here like profile, etc.
    ]
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
