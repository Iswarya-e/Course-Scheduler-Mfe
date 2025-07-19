import { Component } from '@angular/core';
import { TutorSandbox } from '../../store/sandbox/tutor.sandbox';
import { Subscription } from 'rxjs';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrl: './view-courses.component.scss'
})
export class ViewCoursesComponent {
  courses: Course[] = [];
  private subscription!: Subscription;

  constructor(private sandbox: TutorSandbox) {}

  ngOnInit() {
    this.sandbox.loadCourses();
    this.subscription = this.sandbox.course$.subscribe((data)=>{
      this.courses = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
