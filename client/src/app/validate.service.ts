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

  validatePatient(Patient) {
    if (Patient.first_name == undefined || Patient.fist_name.length == 0 || Patient.last_name == undefined || Patient.last_name.length == 0 || Patient.email == undefined || Patient.email.length == 0 || Patient.DOB == undefined || Patient.DOB.length == 0 || Patient.address == undefined || Patient.address.length == 0 || Patient.city == undefined || Patient.city.length == 0 || Patient.province == undefined || Patient.province.length == 0 || Patient.postal_code == undefined || Patient.postal_code.length == 0 || Patient.phone == undefined || Patient.phone.length == 0 || Patient.department == undefined || Patient.department.length == 0 || Patient.doctor == undefined || Patient.doctor.length == 0) {

      return false;
    }
    else {
      return true;
    }

  }
}
