import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  TutorDetail,
  TutorRegistrationDto,
} from '../../models/tutor-detail.model';
import * as TutorDetailActions from '../actions/tutor.actions';
import * as fromTutorDetailSelectors from '../tutor.state';
import { TutorDetailState } from '../reducers/tutor.reducer';
import { LoginTutorDto } from '../../models/tutor-login-dto.model';
import { Course } from '../../models/course.model';
import {
  BookingDetail,
  Student,
  StudentDetail,
  TimeSlot,
} from '../../../student/models/studet-details.model';

@Injectable({
  providedIn: 'root',
})
export class TutorSandbox {
  tutors$: Observable<TutorDetail[]> = this.store.pipe(
    select(fromTutorDetailSelectors.selectAllTutors)
  );
  loading$: Observable<boolean> = this.store.pipe(
    select(fromTutorDetailSelectors.selectLoading)
  );
  error$: Observable<string | null> = this.store.pipe(
    select(fromTutorDetailSelectors.selectError)
  );
  loggedInUser$: Observable<TutorDetail | undefined | StudentDetail> =
    this.store.pipe(select(fromTutorDetailSelectors.selectLoggedInuser));
  isLoggedIn$: Observable<boolean | undefined> = this.store.pipe(
    select(fromTutorDetailSelectors.selectIsLoggedIn)
  );
  course$: Observable<Course[]> = this.store.select(
    fromTutorDetailSelectors.selectCourses
  );
  bookings$: Observable<BookingDetail[]> = this.store.select(
    fromTutorDetailSelectors.selectBookings
  );
  students$: Observable<Student[]> = this.store.select(
    fromTutorDetailSelectors.selectStudents
  );
  timeSlots$: Observable<TimeSlot[]> = this.store.select(
    fromTutorDetailSelectors.selectTimeSlots
  );
  constructor(private store: Store<{ tutorDetail: TutorDetailState }>) {}

  loadTutors(): void {
    this.store.dispatch(TutorDetailActions.loadTutors());
  }

  addTutor(tutor: TutorRegistrationDto): void {
    this.store.dispatch(TutorDetailActions.addTutor({ tutor }));
  }

  updateTutor(tutor: TutorDetail): void {
    this.store.dispatch(TutorDetailActions.updateTutor({ tutor }));
  }

  deleteTutor(id: number): void {
    this.store.dispatch(TutorDetailActions.deleteTutor({ id }));
  }
  login(loginDetails: LoginTutorDto): void {
    this.store.dispatch(TutorDetailActions.tutorLogin({ loginDetails }));
  }

  createCourse(course: Course) {
    this.store.dispatch(TutorDetailActions.createCourse({ course }));
  }
  loadCourses() {
    this.store.dispatch(TutorDetailActions.loadCourses());
  }

  loadAllStudents() {
    this.store.dispatch(TutorDetailActions.loadAllStudents());
  }

  loadAllBookings() {
    this.store.dispatch(TutorDetailActions.loadAllBookings());
  }

  loadTimeSlots() {
    this.store.dispatch(TutorDetailActions .loadTimeSlots());
  }
  updateStudentCourses(studentId: number, courses: any[]) {
    this.store.dispatch(TutorDetailActions.updateStudentCourses({ studentId, courses }));
  }
}
