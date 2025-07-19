import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterStudentDto } from '../../models/studet-details.model';
import { StudentSandbox } from '../../store/sandbox/student.sandbox';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
})
export class StudentRegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private studentSandbox: StudentSandbox) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      schoolName: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      grade: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const form = this.registrationForm.value;

        const payload = {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
          schoolName: form.schoolName,
          contactNo: form.contactNo,
          address: form.address,
          dob: form.dateOfBirth,
          grade: form.grade,
          gender: form.gender,
        } as RegisterStudentDto;
      this.studentSandbox.registerStudent(payload);
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
