import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDailyAttendanceComponent } from './view-daily-attendance.component';

describe('ViewDailyAttendanceComponent', () => {
  let component: ViewDailyAttendanceComponent;
  let fixture: ComponentFixture<ViewDailyAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewDailyAttendanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewDailyAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
