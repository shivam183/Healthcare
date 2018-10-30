import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  register: FormGroup
  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.register = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  formErrors = {
    'name': '',
    'email': '',
    'username': '',
    'password': ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Please provide Valid Email'
    },
    'username': {
      'required': 'Username is required.'
    },
    'password': {
      'required': 'Password is required.'
    }
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show("All Fields are required", { cssClass: 'alert-danger text-center', timeout: 3000 });
      return false;
    }
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show("Please enter a valid Email Address", { cssClass: 'alert-danger text-center', timeout: 3000 });
      return false;
    }

    //Register User
    this.authService.registerUser(user).subscribe((data: any) => {
      if (data.success) {
        this.flashMessage.show("You are now Registered and Can LogIN", { cssClass: 'alert-success text-center', timeout: 5000 });
        this.router.navigate(['/login']);

      }
      else {
        this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger text-center', timeout: 3000 });
        this.router.navigate(['/register']);
      }

    })
  }
  logValidationErrors(group: FormGroup = this.register): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      } else {
        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }
      }
    })
  }
}
