import { Component } from '@angular/core';
import { TutorSandbox } from '../../store/sandbox/tutor.sandbox';
import { AttendanceRecord } from '../../models/attendance.model';

@Component({
  selector: 'app-view-daily-attendance',
  templateUrl: './view-daily-attendance.component.html',
  styleUrl: './view-daily-attendance.component.scss'
})
export class ViewDailyAttendanceComponent {
selectedDate: Date = new Date();  // default to today
  attendanceRecords: AttendanceRecord[] = [];
  loading = false;
  error: string | null = null;

  constructor(public attendanceSandbox: TutorSandbox) {}

  ngOnInit() {
    this.loadRecords();

    this.attendanceSandbox.records$.subscribe(records => {
      this.attendanceRecords = records;
    });

    this.attendanceSandbox.loading$.subscribe(loading => {
      this.loading = loading;
    });

    this.attendanceSandbox.error$.subscribe(error => {
      this.error = error;
    });
  }

  onDateChange(event: any) {
    const value = event.target.value;
    if (value) {
      this.selectedDate = new Date(value);
      this.loadRecords();
    }
  }

  loadRecords() {
    this.attendanceSandbox.loadAttendance(this.selectedDate);
  }
}
