import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentAttendanceComponent } from './components/student-attendance/student-attendance.component';
import { StoreModule } from '@ngrx/store';
import { attendanceReducer } from './store/reducers/attendance.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AttendanceEffects } from './store/effects/attendance.effect';
import { TutorAttendanceComponent } from './components/tutor-attendance/tutor-attendance.component';


@NgModule({
  declarations: [StudentAttendanceComponent, TutorAttendanceComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('attendance', attendanceReducer),
    EffectsModule.forFeature([AttendanceEffects]),
  ]
})
export class AttendanceModule { }
