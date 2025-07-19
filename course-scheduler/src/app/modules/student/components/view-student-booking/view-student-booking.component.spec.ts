import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentBookingComponent } from './view-student-booking.component';

describe('ViewStudentBookingComponent', () => {
  let component: ViewStudentBookingComponent;
  let fixture: ComponentFixture<ViewStudentBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewStudentBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewStudentBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
