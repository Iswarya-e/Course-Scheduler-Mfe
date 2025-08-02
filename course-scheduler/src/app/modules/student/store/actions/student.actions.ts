import { createAction, props } from '@ngrx/store';
import { RegisterStudentDto, StudentDetail, RetrieveBookingDto, BookingDto, LoginDto, TimeSlot } from '../../models/studet-details.model';
import { Course } from '../../../tutor/models/course.model';
import { TutorDetail } from '../../../tutor/models/tutor-detail.model';

// Register
export const registerStudent = createAction(
  '[Student] Register',
  props<{ payload: RegisterStudentDto }>()
);
export const registerStudentSuccess = createAction(
  '[Student] Register Success'
);
export const registerStudentFailure = createAction(
  '[Student] Register Failure',
  props<{ error: any }>()
);

// Load Profile
export const loadStudentProfile = createAction(
  '[Student] Load Profile',
  props<{ studentId: number }>()
);
export const loadStudentProfileSuccess = createAction(
  '[Student] Load Profile Success',
  props<{ profile: StudentDetail }>()
);
export const loadStudentProfileFailure = createAction(
  '[Student] Load Profile Failure',
  props<{ error: any }>()
);

// Load Bookings
export const loadBookings = createAction(
  '[Student] Load Bookings',
  props<{ studentId: number }>()
);
export const loadBookingsSuccess = createAction(
  '[Student] Load Bookings Success',
  props<{ bookings: RetrieveBookingDto[] }>()
);
export const loadBookingsFailure = createAction(
  '[Student] Load Bookings Failure',
  props<{ error: any }>()
);

// Schedule Booking
export const scheduleBooking = createAction(
  '[Student] Schedule Booking',
  props<{ studentId: number; booking: BookingDto }>()
);
export const scheduleBookingSuccess = createAction(
  '[Student] Schedule Booking Success'
);
export const scheduleBookingFailure = createAction(
  '[Student] Schedule Booking Failure',
  props<{ error: any }>()
);

// Cancel Booking
export const cancelBooking = createAction(
  '[Student] Cancel Booking',
  props<{ studentId: number; bookingId: number }>()
);
export const cancelBookingSuccess = createAction(
  '[Student] Cancel Booking Success',
  props<{ bookingId: number }>()
);
export const cancelBookingFailure = createAction(
  '[Student] Cancel Booking Failure',
  props<{ error: any }>()
);


export const loginStudent = createAction(
  '[Student] Login Student',
  props<{ payload: LoginDto }>()
);

export const loginStudentSuccess = createAction(
  '[Student] Login Student Success',
  props<{ token: string; userDetails:StudentDetail | TutorDetail }>()
);

export const loginStudentFailure = createAction(
  '[Student] Login Student Failure',
  props<{ error: any }>()
);


export const loadMyCourses = createAction(
  '[Student] Load My Courses',
);

export const loadMyCoursesSuccess = createAction(
  '[Student] Login My Courses Success',
  props<{ courses: Course[] }>()
);

export const loadMyCoursesFailure = createAction(
  '[Student] Login My Courses Failure',
  props<{ error: any }>()
);

export const loadCourses = createAction('[Course] Load Courses');
export const loadCoursesSuccess = createAction('[Course] Load Courses Success', props<{ courses: Course[] }>());
export const loadCoursesFailure = createAction('[Course] Load Courses Failure', props<{ error: any }>());

export const loadTimeSlots = createAction('[TimeSlot] Load TimeSlots');
export const loadTimeSlotsSuccess = createAction('[TimeSlot] Load TimeSlots Success', props<{ timeSlots: TimeSlot[] }>());
export const loadTimeSlotsFailure = createAction('[TimeSlot] Load TimeSlots Failure', props<{ error: any }>());
