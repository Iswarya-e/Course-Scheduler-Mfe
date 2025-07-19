import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorSandbox } from '../../store/sandbox/tutor.sandbox';
import { LoginTutorDto } from '../../models/tutor-login-dto.model';

@Component({
  selector: 'app-tutor-login',
  templateUrl: './tutor-login.component.html',
})
export class TutorLoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading$ = this.sandbox.loading$;
  error$ = this.sandbox.error$;

  constructor(
    private fb: FormBuilder,
    private sandbox: TutorSandbox,
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const payload = {
        email: email,
        password: password
      } as LoginTutorDto
      this.sandbox.login(payload);
    }
  }
}
