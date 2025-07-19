import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentSandbox } from '../../store/sandbox/student.sandbox';
import { BookingDto, RetrieveBookingDto } from '../../models/studet-details.model';

@Component({
  selector: 'app-view-student-booking',
  templateUrl: './view-student-booking.component.html',
})
export class ViewStudentBookingComponent implements OnInit {
  bookings$: Observable<RetrieveBookingDto[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  studentId: number =0;
  constructor(private studentSandbox: StudentSandbox) {
    this.bookings$ = this.studentSandbox.bookings$;
    this.loading$ = this.studentSandbox.loading$;
    this.error$ = this.studentSandbox.error$;
  }

  ngOnInit() {
    
    this.studentSandbox.user$.subscribe(data=>{
        this.studentId = data?.id ?? 0;
      });
    this.studentSandbox.loadBookings(this.studentId);
  }

  cancelBooking(bookingId: number) {
    this.studentSandbox.cancelBooking(this.studentId, bookingId);
  }
}
