import { createReducer, on } from '@ngrx/store';
import * as StudentActions from '../actions/student.actions';
import { RetrieveBookingDto, StudentDetail, TimeSlot } from '../../models/studet-details.model';
import { Course } from '../../../tutor/models/course.model';
import { TutorDetail } from '../../../tutor/models/tutor-detail.model';

export interface StudentState {
  profile: StudentDetail | null;
  bookings: RetrieveBookingDto[];
  loading: boolean;
  error: any;
  isLoggedIn: boolean
  loggedInUser: StudentDetail| undefined | TutorDetail,
  courses: Course[],
  timeSlots: TimeSlot[]
}

export const initialState: StudentState = {
  profile: null,
  bookings: [],
  loading: false,
  error: null,
  loggedInUser : undefined,
  isLoggedIn : false,
  courses: [],
  timeSlots: []
};

export const studentReducer = createReducer(
  initialState,

  on(StudentActions.registerStudent, StudentActions.loadStudentProfile, StudentActions.loadBookings, StudentActions.scheduleBooking, StudentActions.cancelBooking, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(StudentActions.registerStudentSuccess, StudentActions.scheduleBookingSuccess, (state) => ({
    ...state,
    loading: false
  })),

  on(StudentActions.registerStudentFailure, StudentActions.loadStudentProfileFailure, StudentActions.loadBookingsFailure, StudentActions.scheduleBookingFailure, StudentActions.cancelBookingFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(StudentActions.loadStudentProfileSuccess, (state, { profile }) => ({
    ...state,
    profile,
    loading: false
  })),

  on(StudentActions.loadBookingsSuccess, (state, { bookings }) => ({
    ...state,
    bookings,
    loading: false
  })),

  on(StudentActions.cancelBookingSuccess, (state, { bookingId }) => ({
    ...state,
    bookings: state.bookings.filter(b => b.id !== bookingId),
    loading: false
  })),

  on(StudentActions.loginStudent, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(StudentActions.loginStudentSuccess, (state, { userDetails }) => ({
    ...state,
    
    loading: false,
    isLoggedIn: true,
    loggedInUser: userDetails
  })),
  on(StudentActions.loginStudentFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

   on(StudentActions.loadCourses, state => ({ ...state, loading: true })),
  on(StudentActions.loadCoursesSuccess, (state, { courses }) => ({
    ...state,
    courses: courses,
    loading: false,
    error: null,
  })),
  on(StudentActions.loadCoursesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
   on(StudentActions.loadTimeSlots, state => ({ ...state, loading: true })),
  on(StudentActions.loadTimeSlotsSuccess, (state, { timeSlots }) => ({
    ...state,
    timeSlots,
    loading: false,
    timeSlot: timeSlots,
    error: null,
  })),
  on(StudentActions.loadTimeSlotsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
