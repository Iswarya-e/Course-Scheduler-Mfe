import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAttendanceComponent } from './components/student-attendance/student-attendance.component';
import { TutorAttendanceComponent } from './components/tutor-attendance/tutor-attendance.component';

const routes: Routes = [
  { path: 'student', component: StudentAttendanceComponent },
  { path: 'tutor', component: TutorAttendanceComponent },
  { path: '', component: TutorAttendanceComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutingModule {}
