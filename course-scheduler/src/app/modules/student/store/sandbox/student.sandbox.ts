import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as StudentActions from '../actions/student.actions';
import * as StudentSelectors from '../student.state';
import {
  BookingDto,
  LoginDto,
  RegisterStudentDto,
  StudentDetail,
  TimeSlot,
} from '../../models/studet-details.model';
import { Observable } from 'rxjs';
import { Course } from '../../../tutor/models/course.model';
import { TutorDetail } from '../../../tutor/models/tutor-detail.model';

@Injectable({ providedIn: 'root' })
export class StudentSandbox {
  profile$ = this.store.select(StudentSelectors.selectStudentProfile);
  bookings$ = this.store.select(StudentSelectors.selectStudentBookings);
  loading$ = this.store.select(StudentSelectors.selectStudentLoading);
  error$ = this.store.select(StudentSelectors.selectStudentError);
  user$: Observable<StudentDetail | undefined | TutorDetail> =
    this.store.select(StudentSelectors.selectLoggedInuser);
  isLoggedIn$: Observable<boolean> = this.store.select(
    StudentSelectors.selectIsLoggedIn
  );
  courses$: Observable<Course[]> = this.store.select(
    StudentSelectors.selectCourses
  );
  myCourses$: Observable<Course[]> = this.store.select(
    StudentSelectors.selectMyCourses
  );
  timeSlots$: Observable<TimeSlot[]> = this.store.select(
    StudentSelectors.selectTimeSlots
  );
  constructor(private store: Store) {}

  registerStudent(data: RegisterStudentDto) {
    this.store.dispatch(StudentActions.registerStudent({ payload: data }));
  }

  loadStudentProfile(studentId: number) {
    this.store.dispatch(StudentActions.loadStudentProfile({ studentId }));
  }

  loadBookings(studentId: number) {
    this.store.dispatch(StudentActions.loadBookings({ studentId }));
  }

  scheduleBooking(studentId: number, booking: BookingDto) {
    this.store.dispatch(StudentActions.scheduleBooking({ studentId, booking }));
  }

  cancelBooking(studentId: number, bookingId: number) {
    this.store.dispatch(StudentActions.cancelBooking({ studentId, bookingId }));
  }
  loginStudent(data: LoginDto): void {
    this.store.dispatch(StudentActions.loginStudent({ payload: data }));
  }
  loadCourses() {
    this.store.dispatch(StudentActions.loadCourses());
  }

  loadTimeSlots() {
    this.store.dispatch(StudentActions.loadTimeSlots());
  }
  loadMyCourses() {
    this.store.dispatch(StudentActions.loadMyCourses());
  }
}
