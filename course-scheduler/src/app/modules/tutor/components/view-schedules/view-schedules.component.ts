import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingDetail } from '../../../student/models/studet-details.model';
import { TutorSandbox } from '../../store/sandbox/tutor.sandbox';

@Component({
  selector: 'app-view-schedules',
  templateUrl: './view-schedules.component.html',
})
export class ViewSchedulesComponent implements OnInit {
  bookings$: Observable<BookingDetail[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private tutorSandbox: TutorSandbox) {
    this.bookings$ = this.tutorSandbox.bookings$;
    this.loading$ = this.tutorSandbox.loading$;
    this.error$ = this.tutorSandbox.error$;
  }

  ngOnInit() {
    this.tutorSandbox.loadAllBookings();
  }
}
