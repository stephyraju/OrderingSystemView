import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/UserService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  isSubmitted = false;

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get fc() {
    return this.registrationForm.controls;
  }

  submitForm(): void {
    this.isSubmitted = true;
    if (this.registrationForm.invalid) return;

    this.userService.registerUser(this.registrationForm.value).subscribe(
      response => {
        console.log('User registered successfully!', response);
        // Clear form fields after successful registration
        this.registrationForm.reset();
      },
      error => {
        console.error('Error registering user:', error);
      }
    );
  }
}
