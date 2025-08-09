import { createReducer, on } from '@ngrx/store';
import * as AttendanceActions from '../actions/attendance.action';
import { AttendanceState } from '..';

export const initialState: AttendanceState = {
  students: [],
  tutors: [],
  loading: false,
  error: null,
};

export const attendanceReducer = createReducer(
  initialState,
  // Load students
  on(AttendanceActions.loadStudents, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AttendanceActions.loadStudentsSuccess, (state, { students }) => ({
    ...state,
    students,
    loading: false,
  })),
  on(AttendanceActions.loadStudentsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error || 'Failed to load students',
  })),

  // Load tutors
  on(AttendanceActions.loadTutors, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AttendanceActions.loadTutorsSuccess, (state, { tutors }) => ({
    ...state,
    tutors,
    loading: false,
  })),
  on(AttendanceActions.loadTutorsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error || 'Failed to load tutors',
  })),
  on(AttendanceActions.markLogin, (state) => ({
    ...state,
    loading: true,
    error: null,
    successMessage: null,
  })),
  on(AttendanceActions.markLoginSuccess, (state, { record }) => ({
    ...state,
    loading: false,
    successMessage: 'Login marked successfully!',
  })),
  on(AttendanceActions.markLoginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error || 'Login failed',
  })),

  // Mark Logout
  on(AttendanceActions.markLogout, (state) => ({
    ...state,
    loading: true,
    error: null,
    successMessage: null,
  })),
  on(AttendanceActions.markLogoutSuccess, (state, { record }) => ({
    ...state,
    loading: false,
    successMessage: 'Logout marked successfully!',
  })),
  on(AttendanceActions.markLogoutFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error || 'Logout failed',
  }))
);
