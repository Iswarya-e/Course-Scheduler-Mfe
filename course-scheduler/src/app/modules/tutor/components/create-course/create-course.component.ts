import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TutorSandbox } from '../../store/sandbox/tutor.sandbox';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {
  courseForm!: FormGroup;
  loading$ = this.sandbox.loading$;
  error$ = this.sandbox.error$;

  constructor(
    private fb: FormBuilder,
    private sandbox: TutorSandbox,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    });

    // when a course is created, redirect back to dashboard or courses list
    
  }

  onSubmit(): void {
    if (this.courseForm.invalid) return;
    this.sandbox.createCourse(this.courseForm.value);
    this.router.navigate(['/tutor/view-courses']); // <-- fix path here
  }
}
