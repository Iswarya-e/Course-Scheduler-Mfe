import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student, Course } from '../../model/attendance.model';
import { AttendanceSandbox } from '../../store/sandbox/attendance.sandbox'; // your ngrx sandbox service
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
})
export class StudentAttendanceComponent implements OnInit {
  attendanceForm: FormGroup;

  students: Student[] = [];
  selectedGrade: string = '';
  availableCourses: Course[] = [];
  selectedCourse: Course | null = null;
  canLogin = false;
  canLogout = false;

  message: string | null | undefined= null;
  error: string | null = null;
  currentTime: Date = new Date();
  private timerSubscription?: Subscription;
  constructor(
    private fb: FormBuilder,
    private attendanceSandbox: AttendanceSandbox
  ) {
    this.attendanceForm = this.fb.group({
      userId: [null, Validators.required],
      courseId: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.timerSubscription = interval(1000).subscribe(() => {
      this.currentTime = new Date();
    });
    this.attendanceSandbox.loadStudents();
    // Load all students from store/sandbox
    this.attendanceSandbox.students$.subscribe((students) => {
      this.students = students;
    });

    // Subscribe to success and error messages from store
    this.attendanceSandbox.successMessage$.subscribe((msg) => {
      if (msg) {
          this.message = msg;
          this.error = null;
          this.resetFormDetails();
          this.attendanceForm.reset();
          this.attendanceSandbox.loadStudents(); // Reload students to get updated login status
      }
    });

    this.attendanceSandbox.error$.subscribe((err) => {
      this.error = err;
      if (err) {
        this.message = null;
      }
    });
  }

  onStudentChange() {
    const selectedId = this.attendanceForm.get('userId')?.value;

    const selectedStudent = this.students.find((s) => s.id === selectedId);
    if (selectedStudent) {
      this.selectedGrade = selectedStudent.grade;
      this.availableCourses = selectedStudent.courses || [];
      this.attendanceForm.get('courseId')?.setValue(null);

      // Enable or disable login/logout buttons based on login status
      if (selectedStudent.isLoggedInToday) {
        this.canLogin = false;
        this.canLogout = true;
        this.selectedCourse = selectedStudent.loggedInCourse;
      } else {
        this.canLogin = true;
        this.canLogout = false;
        this.selectedCourse = null;
      }
    } else {
      this.resetFormDetails();
    }
  }

  resetFormDetails() {
    this.selectedGrade = '';
    this.availableCourses = [];
    this.attendanceForm.get('courseId')?.setValue(null);
    this.canLogin = false;
    this.canLogout = false;
    this.selectedCourse = null;
  }

  markLogin() {
    if (this.attendanceForm.invalid) return;

    const userId = this.attendanceForm.value.userId;
    const courseId = this.attendanceForm.value.courseId;

    this.attendanceSandbox.markLogin(userId, courseId);

    // Optionally clear messages after some time or reset form here
  }

  markLogout() {
    const userId = this.attendanceForm.value.userId;
    if (!userId) return;

    this.attendanceSandbox.markLogout(userId);
    // Optionally clear messages or reset form here
  }

  ngOnDestroy() {
    // cleanup timer when component is destroyed
    this.timerSubscription?.unsubscribe();
  }
}
