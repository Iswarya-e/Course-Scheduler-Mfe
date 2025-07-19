import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { studentReducer } from './store/reducers/student.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './store/effects/student.effect';
import { StudentLoginComponent } from './components/student-login/student-login.component';
import { CreateBookingComponent } from './components/create-booking/create-booking.component';
import { ViewStudentBookingComponent } from './components/view-student-booking/view-student-booking.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';


@NgModule({
  declarations: [StudentRegistrationComponent,StudentLoginComponent, CreateBookingComponent, ViewStudentBookingComponent, StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('student', studentReducer),
    EffectsModule.forFeature([StudentEffects]),
    AsyncPipe,
    DatePipe
  ]
})
export class StudentModule { }
