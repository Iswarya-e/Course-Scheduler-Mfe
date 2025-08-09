import { createAction, props } from '@ngrx/store';
import { AttendanceRecord, Student, Tutor } from '../../model/attendance.model';

// Load Students
export const loadStudents = createAction('[Attendance] Load Students');
export const loadStudentsSuccess = createAction(
  '[Attendance] Load Students Success',
  props<{ students: Student[] }>()
);
export const loadStudentsFailure = createAction(
  '[Attendance] Load Students Failure',
  props<{ error: string }>()
);

// Load Tutors
export const loadTutors = createAction('[Attendance] Load Tutors');
export const loadTutorsSuccess = createAction(
  '[Attendance] Load Tutors Success',
  props<{ tutors: Tutor[] }>()
);
export const loadTutorsFailure = createAction(
  '[Attendance] Load Tutors Failure',
  props<{ error: string }>()
);
// Mark login
export const markLogin = createAction(
  '[Attendance] Mark Login',
  props<{ userId: number; courseId?: number }>()
);

export const markLoginSuccess = createAction(
  '[Attendance] Mark Login Success',
  props<{ record: AttendanceRecord }>()
);

export const markLoginFailure = createAction(
  '[Attendance] Mark Login Failure',
  props<{ error: string }>()
);

// Mark logout
export const markLogout = createAction(
  '[Attendance] Mark Logout',
  props<{ userId: number }>()
);

export const markLogoutSuccess = createAction(
  '[Attendance] Mark Logout Success',
  props<{ record: AttendanceRecord }>()
);

export const markLogoutFailure = createAction(
  '[Attendance] Mark Logout Failure',
  props<{ error: string }>()
);
