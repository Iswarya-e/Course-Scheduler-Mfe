import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tutor } from '../../model/attendance.model';
import { AttendanceSandbox } from '../../store/sandbox/attendance.sandbox';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-tutor-attendance',
  templateUrl: './tutor-attendance.component.html',
})
export class TutorAttendanceComponent implements OnInit {
  attendanceForm: FormGroup;

  tutors: Tutor[] = [];
  canLogin = false;
  canLogout = false;

  message: string | null | undefined = null;
  error: string | null = null;
  currentTime: Date = new Date();
  private timerSubscription?: Subscription;
  constructor(
    private fb: FormBuilder,
    private attendanceSandbox: AttendanceSandbox
  ) {
    this.attendanceForm = this.fb.group({
      userId: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.timerSubscription = interval(1000).subscribe(() => {
          this.currentTime = new Date();
    });
    this.attendanceSandbox.loadTutors();
    this.attendanceSandbox.tutors$.subscribe((tutors) => {
      this.tutors = tutors;
    });

    this.attendanceSandbox.successMessage$.subscribe((msg) => {
      if (msg) {
        this.message = msg;
        this.error = null;
        this.attendanceForm.reset();
        this.canLogin = false;
        this.canLogout = false;
        this.attendanceSandbox.loadTutors(); // reload to update login status
      }
    });

    this.attendanceSandbox.error$.subscribe((err) => {
      this.error = err;
      if (err) {
        this.message = null;
      }
    });
  }

  onTutorChange() {
    const selectedId = this.attendanceForm.get('userId')?.value;
    const selectedTutor = this.tutors.find((t) => t.id === selectedId);

    if (selectedTutor) {
      if (selectedTutor.isLoggedInToday) {
        this.canLogin = false;
        this.canLogout = true;
      } else {
        this.canLogin = true;
        this.canLogout = false;
      }
    } else {
      this.canLogin = false;
      this.canLogout = false;
    }
  }

  markLogin() {
    if (this.attendanceForm.invalid) return;

    const userId = this.attendanceForm.value.userId;
    this.attendanceSandbox.markLogin(userId, undefined); // no courseId for tutor
  }

  markLogout() {
    const userId = this.attendanceForm.value.userId;
    if (!userId) return;

    this.attendanceSandbox.markLogout(userId);
  }
  ngOnDestroy() {
    // cleanup timer when component is destroyed
    this.timerSubscription?.unsubscribe();
  }
}
