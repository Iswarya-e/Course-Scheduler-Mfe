import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorSandbox } from '../../store/sandbox/tutor.sandbox';
import { Student, StudentDetail } from '../../../student/models/studet-details.model';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
})
export class ViewStudentsComponent implements OnInit {
  students$: Observable<Student[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private tutorSandbox: TutorSandbox) {
    this.students$ = this.tutorSandbox.students$;
    this.loading$ = this.tutorSandbox.loading$;
    this.error$ = this.tutorSandbox.error$;
  }

  ngOnInit() {
    this.tutorSandbox.loadAllStudents();
  }
}
