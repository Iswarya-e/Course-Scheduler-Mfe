import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import * as TutorDetailActions from '../actions/tutor.actions';
import { TutorApiService } from '../../services/tutor-api.service';
import { LoginTutorDto } from '../../models/tutor-login-dto.model';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class TutorDetailEffects {
  loadTutors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TutorDetailActions.loadTutors),
      mergeMap(() =>
        this.tutorApiService.getAllTutors().pipe(
          map((tutors) => TutorDetailActions.loadTutorsSuccess({ tutors })),
          catchError((error) =>
            of(TutorDetailActions.loadTutorsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  addTutor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TutorDetailActions.addTutor),
      mergeMap(({ tutor }) =>
        this.tutorApiService.createTutor(tutor).pipe(
          map((newTutor) => TutorDetailActions.addTutorSuccess()),
          catchError((error) =>
            of(TutorDetailActions.addTutorFailure({ error: error.message }))
          )
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TutorDetailActions.tutorLogin),
      switchMap(({ loginDetails }) =>
        this.tutorApiService.loginTutor(loginDetails).pipe(
          map((response) =>
            TutorDetailActions.tutorLoginSuccess({
              token: response.token,
              userDetails: response.userDetails,
            })
          ),
          catchError((error) =>
            of(
              TutorDetailActions.tutorLoginFailure({
                error: error.message || 'Login failed',
              })
            )
          )
        )
      )
    )
  );
  
  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TutorDetailActions.createCourse),
      mergeMap(({ course }) =>
        this.tutorApiService.createCourse(course).pipe(
          map((createdCourse) => TutorDetailActions.createCourseSuccess()),
          catchError((error) =>
            of(TutorDetailActions.createCourseFailure({ error }))
          )
        )
      )
    )
  );

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TutorDetailActions.loadCourses),
      mergeMap(() =>
        this.tutorApiService.getCourses().pipe(
          map((courses) => TutorDetailActions.loadCoursesSuccess({ courses })),
          catchError((error) =>
            of(TutorDetailActions.loadCoursesFailure({ error }))
          )
        )
      )
    )
  );

  loadAllStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TutorDetailActions.loadAllStudents),
      switchMap(() =>
        this.tutorApiService.getAllStudents().pipe(
          map((students) =>
            TutorDetailActions.loadAllStudentsSuccess({ students })
          ),
          catchError((error) =>
            of(TutorDetailActions.loadAllStudentsFailure({ error }))
          )
        )
      )
    )
  );

  loadAllBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TutorDetailActions.loadAllBookings),
      switchMap(() =>
        this.tutorApiService.getAllBookings().pipe(
          map((bookings) =>
            TutorDetailActions.loadAllBookingsSuccess({ bookings })
          ),
          catchError((error) =>
            of(TutorDetailActions.loadAllBookingsFailure({ error }))
          )
        )
      )
    )
  );

  navigateAfterRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TutorDetailActions.addTutorSuccess),
        tap(() => {
          this.router.navigate(['/tutor/login']);
        })
      ),
    { dispatch: false }
  );

  navigateAfterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TutorDetailActions.tutorLoginSuccess),
        tap(({token}) => {
          localStorage.setItem('auth_token',token)
          this.router.navigate(['/tutor/']);
        })
      ),
    { dispatch: false }
  );

    navigateAfterCourseCreation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TutorDetailActions.createCourseSuccess),
        tap(() => {
          this.router.navigate(['/tutor/view-courses']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private tutorApiService: TutorApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
}
