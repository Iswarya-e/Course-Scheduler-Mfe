import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AttendanceActions from '../actions/attendance.action';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AttendanceService } from '../../service/attendance.service';

@Injectable()
export class AttendanceEffects {
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AttendanceActions.loadStudents),
      mergeMap(() =>
        this.attendanceService.getAllStudents().pipe(
          map((students) =>
            AttendanceActions.loadStudentsSuccess({ students })
          ),
          catchError((error) =>
            of(AttendanceActions.loadStudentsFailure({ error: error.message }))
          )
        )
      )
    )
  );

  loadTutors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AttendanceActions.loadTutors),
      mergeMap(() =>
        this.attendanceService.getAllTutors().pipe(
          map((tutors) => AttendanceActions.loadTutorsSuccess({ tutors })),
          catchError((error) =>
            of(AttendanceActions.loadTutorsFailure({ error: error.message }))
          )
        )
      )
    )
  );

    markLogin$ = createEffect(() =>
    this.actions$.pipe(
        ofType(AttendanceActions.markLogin),
        mergeMap(({ userId, courseId }) =>
        this.attendanceService.login(userId, courseId).pipe(
            mergeMap((record) => {
            return [
                AttendanceActions.markLoginSuccess({ record }),
            ];
            }),
            catchError((error) =>
            of(AttendanceActions.markLoginFailure({ error: error.message }))
            )
        )
        )
    )
    );

    markLogout$ = createEffect(() =>
    this.actions$.pipe(
        ofType(AttendanceActions.markLogout),
        mergeMap(({ userId }) =>
        this.attendanceService.logout(userId).pipe(
            mergeMap((record) => {
            return [
                AttendanceActions.markLogoutSuccess({ record }),
            ];
            }),
            catchError((error) =>
            of(AttendanceActions.markLogoutFailure({ error: error.message }))
            )
        )
        )
    )
    );


  constructor(
    private actions$: Actions,
    private attendanceService: AttendanceService
  ) {}
}
