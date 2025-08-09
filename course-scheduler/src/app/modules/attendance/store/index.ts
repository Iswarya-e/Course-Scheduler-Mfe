import { Student, Tutor } from "../model/attendance.model";
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AttendanceState {
  students: Student[];
  tutors: Tutor[];
  loading: boolean;
  error: string | null;
  successMessage?: string | null; // Optional success message for login/logout actions
}
export const selectAttendanceState = createFeatureSelector<AttendanceState>('attendance');

export const selectStudents = createSelector(
  selectAttendanceState,
  (state) => state.students
);

export const selectTutors = createSelector(
  selectAttendanceState,
  (state) => state.tutors
);

export const selectLoading = createSelector(
  selectAttendanceState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectAttendanceState,
  (state) => state.error
);


// Select success message
export const selectSuccessMessage = createSelector(
  selectAttendanceState,
  (state) => state.successMessage
);