import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { 
    path: 'home', 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) 
  },

  { 
    path: 'student', 
    loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule) 
  },

  { 
    path: 'tutor', 
    loadChildren: () => import('./modules/tutor/tutor.module').then(m => m.TutorModule) 
  },
  {
    path: 'attendance',
    loadChildren: () =>import('./modules/attendance/attendance.module').then(m => m.AttendanceModule),
  },

  { path: '**', redirectTo: 'home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
