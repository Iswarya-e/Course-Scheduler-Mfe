// student-login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentSandbox } from '../../store/sandbox/student.sandbox';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDto } from '../../models/studet-details.model';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
})
export class StudentLoginComponent {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentSandbox: StudentSandbox,
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.studentSandbox.isLoggedIn$.subscribe((loggedIn) => {
      if (loggedIn) {
        this.router.navigate(['/student/dashboard']);
      }
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const payload = {
        email: email,
        password: password,
      } as LoginDto;
      this.studentSandbox.loginStudent(payload);
    }
  }
}
