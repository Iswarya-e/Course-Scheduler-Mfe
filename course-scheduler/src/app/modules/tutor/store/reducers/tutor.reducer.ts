import { createReducer, on } from '@ngrx/store';
import { TutorDetail } from '../../models/tutor-detail.model';
import * as TutorDetailActions from '../actions/tutor.actions'
import { Course } from '../../models/course.model';
import { BookingDetail, Student, StudentDetail } from '../../../student/models/studet-details.model';
export interface TutorDetailState {
  tutors: TutorDetail[];
  loading: boolean;
  error: string | null;
  token: string | null;
  loggedInUser: TutorDetail | undefined;
  isLoggedIn : boolean
  courses: Course[];
  students: Student[],
  bookings: BookingDetail[],

}

export const initialTutorDetailState: TutorDetailState = {
  tutors: [],
  loading: false,
  error: null,
  token: null,
  isLoggedIn: false,
  loggedInUser: undefined,
  courses: [],
  students: [],
  bookings: []
};

export const tutorDetailReducer = createReducer(
  initialTutorDetailState,

  on(TutorDetailActions.loadTutors, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(TutorDetailActions.loadTutorsSuccess, (state, { tutors }) => ({
    ...state,
    loading: false,
    tutors,
  })),

  on(TutorDetailActions.loadTutorsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(TutorDetailActions.addTutor, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(TutorDetailActions.addTutorSuccess, (state) => ({
    ...state,
    loading: false,
  })),

  on(TutorDetailActions.addTutorFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(TutorDetailActions.updateTutor, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(TutorDetailActions.updateTutorSuccess, (state, { tutor }) => ({
    ...state,
    loading: false,
    tutors: state.tutors.map((t) => (t.id === tutor.id ? tutor : t)),
  })),

  on(TutorDetailActions.updateTutorFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(TutorDetailActions.deleteTutor, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(TutorDetailActions.deleteTutorSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    tutors: state.tutors.filter((t) => t.id !== id),
  })),

  on(TutorDetailActions.deleteTutorFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(TutorDetailActions.tutorLogin, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(TutorDetailActions.tutorLoginSuccess, (state, { token, userDetails }) => ({
    ...state,
    loading: false,
    token,
    loggedInUser: userDetails,
    isLoggedIn: true,
    error: null,
  })),

  on(TutorDetailActions.tutorLoginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(TutorDetailActions.createCourse, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(TutorDetailActions.createCourseSuccess, (state) => ({
    ...state,
    loading: false,
  })),

  on(TutorDetailActions.createCourseFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(TutorDetailActions.loadCourses, state => ({ ...state, loading: true, error: null })),
  on(TutorDetailActions.loadCoursesSuccess, 
    (state, { courses }) => ({
       ...state, courses: courses, loading: false 
      })),
  on(TutorDetailActions.loadCoursesFailure, 
    (state, { error }) => 
      ({ ...state, error, loading: false })),

  on(TutorDetailActions.loadAllStudents, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TutorDetailActions.loadAllStudentsSuccess, (state, { students }) => ({
    ...state,
    students: students,
    loading: false,
  })),
  on(TutorDetailActions.loadAllStudentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),

  on(TutorDetailActions.loadAllBookings, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(TutorDetailActions.loadAllBookingsSuccess, (state, { bookings }) => ({
    ...state,
    bookings: bookings,
    loading: false,
  })),
  on(TutorDetailActions.loadAllBookingsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),

);
