import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../Patient';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'
import { ValidateService } from '../validate.service';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [PatientService]
})
export class PatientsComponent implements OnInit {

  patients: Patient[];
  patient: Patient;
  first_name: String;
  last_name: String;
  DOB: String;
  email: String;
  address: String;
  city: String;
  province: String;
  postal_code: String;
  phone: String;
  department: String;
  doctor: String

  constructor
    (
    private patientService: PatientService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private validate: ValidateService
    ) { }




  addPatient() {
    const newPatient = {
      first_name: this.first_name,
      last_name: this.last_name,
      DOB: this.DOB,
      email: this.email,
      address: this.address,
      city: this.city,
      province: this.province,
      postal_code: this.postal_code,
      phone: this.phone,
      department: this.department,
      doctor: this.doctor

    }

    if (!this.validate.validatePatient(newPatient)) {

      this.flashMessage.show('All Fields are Required', { cssClass: 'alert-danger', timeout: 3000 })
      return false;
    }

    if (!this.validate.validateEmail(newPatient.email)) {

      this.flashMessage.show('Please enter a valid Email', { cssClass: 'alert-danger', timeout: 3000 })
      return false;
    }

    this.patientService.addPatient(newPatient).subscribe((patient: any) => {
      console.log(patient);

      if (patient.success) {
        this.flashMessage.show("Patient Sucessfully added", { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/dashboard']);
      }
      else {
        this.flashMessage.show("Something Went Wrong", { cssClass: 'alert-danger', timeout: 3000 });
      }
    }

    );



  }


  ngOnInit() {



  }

}
