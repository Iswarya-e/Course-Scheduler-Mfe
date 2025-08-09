import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AttendanceActions from '../actions/attendance.action';
import * as AttendanceSelectors from '../index'
import { Observable } from 'rxjs';
import { Student, Tutor } from '../../model/attendance.model';

@Injectable({ providedIn: 'root' })
export class AttendanceSandbox {
  students$: Observable<Student[]> = this.store.select(AttendanceSelectors.selectStudents);
  tutors$: Observable<Tutor[]> = this.store.select(AttendanceSelectors.selectTutors);
  loading$: Observable<boolean> = this.store.select(AttendanceSelectors.selectLoading);
  error$: Observable<string | null> = this.store.select(AttendanceSelectors.selectError);
  successMessage$: Observable<string | null | undefined> = this.store.select(AttendanceSelectors.selectSuccessMessage);

  constructor(private store: Store) {}

  loadStudents() {
    this.store.dispatch(AttendanceActions.loadStudents());
  }

  loadTutors() {
    this.store.dispatch(AttendanceActions.loadTutors());
  }

  markLogin(userId: number, courseId?: number) {
    this.store.dispatch(AttendanceActions.markLogin({ userId, courseId }));
  }

  markLogout(userId: number) {
    this.store.dispatch(AttendanceActions.markLogout({ userId }));
  }
}
