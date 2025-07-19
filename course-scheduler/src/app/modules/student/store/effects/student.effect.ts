import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as StudentActions from '../actions/student.actions';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { StudentApiService } from '../../services/student-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class StudentEffects {
  constructor(
    private actions$: Actions,
    private studentService: StudentApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.registerStudent),
      mergeMap((action) =>
        this.studentService.registerStudent(action.payload).pipe(
          map(() => StudentActions.registerStudentSuccess()),
          catchError((error) =>
            of(StudentActions.registerStudentFailure({ error }))
          )
        )
      )
    )
  );

  loadProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loadStudentProfile),
      mergeMap((action) =>
        this.studentService.getStudentProfile(action.studentId).pipe(
          map((profile) =>
            StudentActions.loadStudentProfileSuccess({ profile })
          ),
          catchError((error) =>
            of(StudentActions.loadStudentProfileFailure({ error }))
          )
        )
      )
    )
  );

  loadBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loadBookings),
      mergeMap((action) =>
        this.studentService.getBookings(action.studentId).pipe(
          map((bookings) => StudentActions.loadBookingsSuccess({ bookings })),
          catchError((error) =>
            of(StudentActions.loadBookingsFailure({ error }))
          )
        )
      )
    )
  );

  scheduleBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.scheduleBooking),
      mergeMap((action) =>
        this.studentService
          .scheduleBooking(action.studentId, action.booking)
          .pipe(
            map(() => StudentActions.scheduleBookingSuccess()),
            catchError((error) =>
              of(StudentActions.scheduleBookingFailure({ error }))
            )
          )
      )
    )
  );

  cancelBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.cancelBooking),
      mergeMap((action) =>
        this.studentService
          .cancelBooking(action.studentId, action.bookingId)
          .pipe(
            map(() =>
              StudentActions.cancelBookingSuccess({
                bookingId: action.bookingId,
              })
            ),
            catchError((error) =>
              of(StudentActions.cancelBookingFailure({ error }))
            )
          )
      )
    )
  );

  loginStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loginStudent),
      switchMap(({ payload }) =>
        this.studentService.login(payload).pipe(
          map((user) => StudentActions.loginStudentSuccess({ user })),
          catchError((error) =>
            of(StudentActions.loginStudentFailure({ error }))
          )
        )
      )
    )
  );

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loadCourses),
      switchMap(() =>
        this.studentService.getCourses().pipe(
          map((courses) => StudentActions.loadCoursesSuccess({ courses })),
          catchError((error) =>
            of(StudentActions.loadCoursesFailure({ error }))
          )
        )
      )
    )
  );
  loadTimeSlots$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loadTimeSlots),
      switchMap(() =>
        this.studentService.getTimeSlots().pipe(
          map((timeSlots) =>
            StudentActions.loadTimeSlotsSuccess({ timeSlots })
          ),
          catchError((error) =>
            of(StudentActions.loadTimeSlotsFailure({ error }))
          )
        )
      )
    )
  );

  navigateAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(StudentActions.registerStudentSuccess),
        tap(() => {
        this.router.navigate(['/student/login']);
        })
      ),
    { dispatch: false }
  );


  navigateAfterLOogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(StudentActions.loginStudentSuccess),
        tap(() => {
        this.router.navigate(['/student/']);
        })
      ),
    { dispatch: false }
  );
}
