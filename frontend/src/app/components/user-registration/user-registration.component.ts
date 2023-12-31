import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserService } from 'src/app/service/register-user.service';
// import { UserService } from '../services/user.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit{
  registrationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: RegisterUserService,
    private router : Router
  ) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
}

register() {
  console.log("HELLO I AM BEING HITTT")
  if (this.registrationForm.valid) {
    console.log("HELLO I AM BEING HITTT part 2")
    const userData = this.registrationForm.value;
    this.userService.registerUser(userData).subscribe(
      (response) => {
        console.log('User registered successfully!', response);
        this.router.navigate(['/login'])
      },
      (error) => {
        console.error('Registration failed!', error);
      }
    );
  }
}

}


