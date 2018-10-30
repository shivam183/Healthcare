import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../Patient';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
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

  addPatientForm: FormGroup;


  formErrors = {
    'first_name': '',
    'last_name': '',
    'DOB': '',
    'email': '',
    'address': '',
    'city': '',
    'province': '',
    'postal_code': '',
    'phone': '',
    'department': '',
    'doctor': '',
  }

  validationMessages = {
    'first_name': {
      'required': 'First Name is Required'
    },
    'last_name': {
      'required': 'Last Name is Required'
    },
    'DOB': {
      'required': 'Date Of Birth is Required'
    },
    'email': {
      'required': 'Email is Required',
      'email': 'Please Provide Correct Email'
    },
    'address': {
      'required': 'Address is Required'
    },
    'city': {
      'required': 'City is Required'
    },
    'province': {
      'required': 'Province is Required'
    },
    'postal_code': {
      'required': 'Postal Code is Required'
    },
    'phone': {
      'required': 'Phone is Required'
    },
    'department': {
      'required': 'Department is Required'
    },
    'doctor': {
      'required': 'Doctors Name is Required'
    },

  }

  constructor
    (
    private patientService: PatientService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private fb: FormBuilder
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

    this.patientService.addPatient(newPatient).subscribe((patient: any) => {
      this.patients = patient;
      this.flashMessage.show("Patient Sucessfully added", { cssClass: 'alert-success text-center', timeout: 3000 });
      this.router.navigate(['/dashboard']);
    });



  }


  ngOnInit() {

    this.addPatientForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      DOB: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postal_code: ['', Validators.required],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      doctor: ['', Validators.required]
    });

    this.addPatientForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.addPatientForm);
    })
  }

  logValidationErrors(group: FormGroup = this.addPatientForm): void {
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
