import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorDashboardComponent } from './pages/tutor-dashboard/tutor-dashboard.component';
import { TutorRegistrationComponent } from './components/tutor-registration/tutor-registration.component';
import { TutorLoginComponent } from './components/tutor-login/tutor-login.component';
import { ViewSchedulesComponent } from './components/view-schedules/view-schedules.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { ViewStudentsComponent } from './components/view-students/view-students.component';
import { ViewCoursesComponent } from './components/view-courses/view-courses.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { TutorGuard } from '../core/guards/tutor-guard.guard';
import { ViewDailyAttendanceComponent } from './components/view-daily-attendance/view-daily-attendance.component';

const routes: Routes = [
  { path: 'register', component: TutorRegistrationComponent }, // ✅ public route
  { path: 'login', component: TutorLoginComponent }, // ✅ public route
  {
    path: '',
    canActivate: [TutorGuard],  // <--- protect this route

    component: TutorDashboardComponent,
    children: [
      { path: 'create-course', component: CreateCourseComponent },
      { path: 'edit-course/:id', component: EditCourseComponent },
      { path: 'view-courses', component: ViewCoursesComponent },
      {
        path: 'schedules',
        component: ViewSchedulesComponent,
      },
      {
        path: 'students',
        component: ViewStudentsComponent,
      },
      { path: 'view-daily-attendance', component: ViewDailyAttendanceComponent },
      { path: '', redirectTo: 'schedules', pathMatch: 'full' },
    ],

  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorRoutingModule {}
