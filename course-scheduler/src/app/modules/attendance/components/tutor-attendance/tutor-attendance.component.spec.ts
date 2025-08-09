import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorAttendanceComponent } from './tutor-attendance.component';

describe('TutorAttendanceComponent', () => {
  let component: TutorAttendanceComponent;
  let fixture: ComponentFixture<TutorAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorAttendanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
