import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { TutorSandbox } from '../../store/sandbox/tutor.sandbox';

@Component({
  selector: 'app-tutor-registration',
  templateUrl: './tutor-registration.component.html'
})
export class TutorRegistrationComponent implements OnInit {
tutorForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private tutorSandbox: TutorSandbox
  ) {}

  ngOnInit() {
    
        this.tutorForm = this.fb.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],  // <-- added email with validator
          contactNo: ['', [Validators.required]],
          qualification: [''],
          expertiseArea: [''],
          nricFin: ['', Validators.required],
          gender: [''],
          dob: [''],
          address: [''],
          password: ['', [Validators.required, Validators.minLength(6)]],
        });
  }

  onSubmit() {
    if (this.tutorForm.valid) {
      this.tutorSandbox.addTutor(this.tutorForm.value);
    }
  }
}
