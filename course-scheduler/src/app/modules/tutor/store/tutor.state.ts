import { Tutor } from './models/tutor.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TutorDetailState } from './reducers/tutor.reducer';




export const selectTutorDetailState = createFeatureSelector<TutorDetailState>('tutorDetail');

export const selectAllTutors = createSelector(
  selectTutorDetailState,
  (state) => state.tutors
);

export const selectLoading = createSelector(
  selectTutorDetailState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectTutorDetailState,
  (state) => state.error
);

export const selectLoggedInuser = createSelector(
  selectTutorDetailState,
  (state) => state.loggedInUser
);
export const selectIsLoggedIn = createSelector(
  selectTutorDetailState,
  (state) => state.isLoggedIn
);

export const selectCourses = createSelector(
  selectTutorDetailState,
  (state) => state.courses
);

export const selectStudents = createSelector(
  selectTutorDetailState,
  (state) => state.students
);
export const selectBookings = createSelector(
  selectTutorDetailState,
  (state) => state.bookings
);


export const selectTimeSlots = createSelector(
  selectTutorDetailState,
  (state) => state.timeSlots
);
