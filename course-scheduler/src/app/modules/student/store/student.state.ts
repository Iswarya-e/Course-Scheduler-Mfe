import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState } from './reducers/student.reducer';

export const selectStudentState = createFeatureSelector<StudentState>('student');

export const selectStudentProfile = createSelector(
  selectStudentState,
  (state) => state.profile
);

export const selectStudentBookings = createSelector(
  selectStudentState,
  (state) => state.bookings
);

export const selectStudentLoading = createSelector(
  selectStudentState,
  (state) => state.loading
);

export const selectStudentError = createSelector(
  selectStudentState,
  (state) => state.error
);
export const selectIsLoggedIn = createSelector(
  selectStudentState,
  (state) => state.isLoggedIn
);

export const selectLoggedInuser = createSelector(
  selectStudentState,
  (state) => state.loggedInUser
);

export const selectCourses = createSelector(
  selectStudentState,
  (state) => state.courses
);

export const selectTimeSlots = createSelector(
  selectStudentState,
  (state) => state.timeSlots
);

export const selectMyCourses = createSelector(
  selectStudentState,
  (state) => state.myCourses
);