import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { StudentSandbox } from '../../store/sandbox/student.sandbox';
import { Course } from '../../../tutor/models/course.model';
import { TimeSlot } from '../../models/studet-details.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
})
export class CreateBookingComponent implements OnInit {
  bookingForm: FormGroup;
  studentId: number = 0;
  courses$: Observable<Course[]>;
  timeSlots$: Observable<TimeSlot[]>;


  constructor(private fb: FormBuilder, private studentSandbox: StudentSandbox) {
    this.bookingForm = this.fb.group({
      courseId: [null, Validators.required],
      date: [null, Validators.required],
      timeSlotId: [null, Validators.required],
    });

    this.courses$ = this.studentSandbox.courses$;
    this.timeSlots$ = this.studentSandbox.timeSlots$;
  }

  ngOnInit() {
      this.studentSandbox.user$.subscribe(data=>{
        this.studentId = data?.id ?? 0;
      });
    this.studentSandbox.loadCourses();
    this.studentSandbox.loadTimeSlots();
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const booking = this.bookingForm.value;
       // implement this method in sandbox to get current logged in student ID
      this.studentSandbox.scheduleBooking(this.studentId, booking);
    } else {
      this.bookingForm.markAllAsTouched();
    }
  }
}
