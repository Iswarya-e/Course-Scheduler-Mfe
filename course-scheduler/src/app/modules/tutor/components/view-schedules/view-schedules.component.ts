import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingDetail } from '../../../student/models/studet-details.model';
import { TutorSandbox } from '../../store/sandbox/tutor.sandbox';
import { GRADES } from '../../../../shared/const';

@Component({
  selector: 'app-view-schedules',
  templateUrl: './view-schedules.component.html',
})
export class ViewSchedulesComponent implements OnInit {
  bookings$: Observable<BookingDetail[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  grades: string[] = GRADES;
  timeSlots: string[] = [];// Assuming time slots are available in the store

  allBookings: BookingDetail[] = [];
  filteredBookings: BookingDetail[] = [];

  filters = {
    studentName: '',
    courseTitle: '',
    date: '',
    time: '',
    grade: '',
  };

  constructor(private tutorSandbox: TutorSandbox) {
    this.bookings$ = this.tutorSandbox.bookings$;
    this.loading$ = this.tutorSandbox.loading$;
    this.error$ = this.tutorSandbox.error$;
  }

  ngOnInit() {
    this.tutorSandbox.loadAllBookings();
    this.tutorSandbox.loadTimeSlots(); 
    this.bookings$.subscribe((bookings) => {
      this.allBookings = bookings;
      this.filteredBookings = [...bookings]; // Initialize with full list
    });
    this.tutorSandbox.timeSlots$.subscribe((slots) => {
      this.timeSlots = slots.map(slot => `${slot.startTimeString}`);
    })
  }

  applyFilter() {
    this.filteredBookings = this.allBookings.filter((booking) => {
      const fullName = `${booking.student?.studentDetail?.firstName ?? ''} ${booking.student?.studentDetail?.lastName ?? ''}`.toLowerCase();
      const courseTitle = booking.course?.title?.toLowerCase() ?? '';
      const date = booking.date ? new Date(booking.date).toDateString().toLowerCase() : '';
      const time = `${booking.timeSlot?.startTimeString ?? ''}`.toLowerCase();
      const grade = booking.student?.studentDetail?.grade?.toLowerCase() ?? '';

      return (
        fullName.includes(this.filters.studentName.toLowerCase()) &&
        courseTitle.includes(this.filters.courseTitle.toLowerCase()) &&
        date.includes(this.filters.date.toLowerCase()) &&
        time.includes(this.filters.time.toLowerCase()) &&
        grade.includes(this.filters.grade.toLowerCase())
      );
    });
  }
}
