import { createAction, props } from '@ngrx/store';
import { TutorDetail, TutorRegistrationDto } from '../../models/tutor-detail.model';
import { LoginTutorDto } from '../../models/tutor-login-dto.model';
import { Course } from '../../models/course.model';
import { BookingDetail, Student, StudentDetail, TimeSlot } from '../../../student/models/studet-details.model';

export const loadTutors = createAction('[TutorDetail] Load Tutors');

export const loadTutorsSuccess = createAction(
  '[TutorDetail] Load Tutors Success',
  props<{ tutors: TutorDetail[] }>()
);

export const loadTutorsFailure = createAction(
  '[TutorDetail] Load Tutors Failure',
  props<{ error: string }>()
);

export const addTutor = createAction(
  '[TutorDetail] Add Tutor',
  props<{ tutor: TutorRegistrationDto }>()
);

export const addTutorSuccess = createAction(
  '[TutorDetail] Add Tutor Success',
);

export const addTutorFailure = createAction(
  '[TutorDetail] Add Tutor Failure',
  props<{ error: string }>()
);

export const updateTutor = createAction(
  '[TutorDetail] Update Tutor',
  props<{ tutor: TutorDetail }>()
);

export const updateTutorSuccess = createAction(
  '[TutorDetail] Update Tutor Success',
  props<{ tutor: TutorDetail }>()
);

export const updateTutorFailure = createAction(
  '[TutorDetail] Update Tutor Failure',
  props<{ error: string }>()
);

export const deleteTutor = createAction(
  '[TutorDetail] Delete Tutor',
  props<{ id: number }>()
);

export const deleteTutorSuccess = createAction(
  '[TutorDetail] Delete Tutor Success',
  props<{ id: number }>()
);

export const deleteTutorFailure = createAction(
  '[TutorDetail] Delete Tutor Failure',
  props<{ error: string }>()
);


export const tutorLogin = createAction(
  '[Tutor Login] Login',
  props< {loginDetails:LoginTutorDto} >()
);

export const tutorLoginSuccess = createAction(
  '[Tutor Login] Login Success',
  props<{ token: string; userDetails:TutorDetail | StudentDetail }>()
);

export const tutorLoginFailure = createAction(
  '[Tutor Login] Login Failure',
  props<{ error: string }>()
);

export const createCourse = createAction(
  '[Course] Create Course',
  props<{ course: Omit<Course, 'id'> }>()   // id excluded on creation
);

export const createCourseSuccess = createAction(
  '[Course] Create Course Success',
);

export const createCourseFailure = createAction(
  '[Course] Create Course Failure',
  props<{ error: any }>()
);

export const loadCourses = createAction('[Course] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: any }>()
);


export const loadAllStudents = createAction('[Tutor] Load All Students');
export const loadAllStudentsSuccess = createAction(
  '[Tutor] Load All Students Success',
  props<{ students: Student[] }>()
);
export const loadAllStudentsFailure = createAction(
  '[Tutor] Load All Students Failure',
  props<{ error: any }>()
);

export const loadAllBookings = createAction('[Tutor] Load All Bookings');
export const loadAllBookingsSuccess = createAction(
  '[Tutor] Load All Bookings Success',
  props<{ bookings: BookingDetail[] }>()
);
export const loadAllBookingsFailure = createAction(
  '[Tutor] Load All Bookings Failure',
  props<{ error: any }>()
);


export const loadTimeSlots = createAction('[TimeSlot] Load TimeSlots');
export const loadTimeSlotsSuccess = createAction('[TimeSlot] Load TimeSlots Success', props<{ timeSlots: TimeSlot[] }>());
export const loadTimeSlotsFailure = createAction('[TimeSlot] Load TimeSlots Failure', props<{ error: any }>());

export const updateStudentCourses = createAction(
  '[Students] Update Student Courses',
  props<{ studentId: number; courses: any[] }>()
);

export const updateStudentCoursesSuccess = createAction(
  '[Students] Update Student Courses Success',
  props<{ studentId: number; courses: any[] }>()
);

export const updateStudentCoursesFailure = createAction(
  '[Students] Update Student Courses Failure',
  props<{ error: any }>()
);