import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterStudentDto } from '../../models/studet-details.model';
import { StudentSandbox } from '../../store/sandbox/student.sandbox';
import { Observable } from 'rxjs';
import { Course } from '../../../tutor/models/course.model';
import { GRADES } from '../../../../shared/const';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
})
export class StudentRegistrationComponent {
  registrationForm: FormGroup;
  courses$: Observable<Course[]>;
  courses : Course[] = [];
  selectedCourses: number[] = [];
  gradeOptions: string[] = GRADES;

  constructor(private fb: FormBuilder, private studentSandbox: StudentSandbox) {
    this.courses$ = this.studentSandbox.courses$;
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.minLength(6)]],
      schoolName: ['', Validators.required],
      contactNo: ['', [Validators.required]],
      dateOfBirth: ['', Validators.required],
      grade: ['', Validators.required],
      gender: ['', Validators.required],
      courseIds: [[]],
    });
  }

  ngOnInit(): void {
    this.studentSandbox.loadCourses();
    this.courses$.subscribe(courses => {
      this.courses = courses;
    });
  }


onSubmit(): void {
  if (this.registrationForm.valid) {
    const form = this.registrationForm.value;

    const payload: RegisterStudentDto = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
      schoolName: form.schoolName,
      contactNo: form.contactNo,
      dob: form.dateOfBirth,
      grade: form.grade,
      gender: form.gender,

      courseIds: this.selectedCourses,
    };

    this.studentSandbox.registerStudent(payload);
  } else {
    this.registrationForm.markAllAsTouched();
  }
}


  onCourseCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const value = Number(checkbox.value);
    const index = this.selectedCourses.indexOf(value);

    if (checkbox.checked && index === -1) {
      this.selectedCourses.push(value);
    } else if (!checkbox.checked && index !== -1) {
      this.selectedCourses.splice(index, 1);
    }
  }

  getCourseTitleById(id: number): string {
    const course = this.courses.find(c => c.id === id);
    return course ? course.title : '';
  }

  // used in getSelectedCourseTitles
  getSelectedCourseTitles(): string {
    if (!this.selectedCourses || this.selectedCourses.length === 0) {
      return 'Select Courses (Optional)';
    }
    return this.selectedCourses.map(id => this.getCourseTitleById(id)).join(', ');
  }

  
  isCourseSelected(courseId: number): boolean {
    return this.selectedCourses.includes(courseId);
  }

}
