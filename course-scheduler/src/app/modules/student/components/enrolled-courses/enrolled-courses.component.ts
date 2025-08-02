import { Component } from '@angular/core';
import { StudentSandbox } from '../../store/sandbox/student.sandbox';
import { Course } from '../../../tutor/models/course.model';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrl: './enrolled-courses.component.scss'
})
export class EnrolledCoursesComponent {
 enrolledCourses: Course[] = [];

  constructor(private sandbox: StudentSandbox) {}

  ngOnInit(): void {
    this.sandbox.loadMyCourses();

    this.sandbox.myCourses$.subscribe(courses => {
      this.enrolledCourses = courses;
    });

  }
}
