import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if (user.name == undefined || user.name.length == 0 || user.email == undefined || user.username.length == 0 || user.username == undefined || user.password.length == 0 || user.password == undefined) {
      return false;
    }
    else {
      return true;
    }

  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateLogin(user) {
    if (user.username == undefined || user.username.length == 0 || user.password == 0 || user.password.length == 0) {
      return false;
    }
    else {
      return true;
    }
  }


}
