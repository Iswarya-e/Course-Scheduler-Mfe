import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorRoutingModule } from './tutor-routing.module';
import { TutorRegistrationComponent } from './components/tutor-registration/tutor-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { tutorDetailReducer } from './store/reducers/tutor.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TutorDetailEffects } from './store/effects/tutor.effects';
import { TutorLoginComponent } from './components/tutor-login/tutor-login.component';
import { ViewStudentsComponent } from './components/view-students/view-students.component';
import { ViewSchedulesComponent } from './components/view-schedules/view-schedules.component';
import { TutorDashboardComponent } from './pages/tutor-dashboard/tutor-dashboard.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { ViewCoursesComponent } from './components/view-courses/view-courses.component';


@NgModule({
  declarations: [
    TutorRegistrationComponent,
    TutorLoginComponent,
    ViewStudentsComponent,
    ViewSchedulesComponent,
    TutorDashboardComponent,
    EditCourseComponent,
    CreateCourseComponent,
    ViewCoursesComponent
  ],
  imports: [
    CommonModule,
    TutorRoutingModule,
    ReactiveFormsModule, 
    StoreModule.forFeature('tutorDetail', tutorDetailReducer),
    EffectsModule.forFeature([TutorDetailEffects]),
  ]
})
export class TutorModule { }
