import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../Patient';
import { RecordsService } from '../records.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  patient: Patient;
  ID: any;
  editPatientForm: FormGroup;

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

  constructor(private patientService: PatientService,
    private recordService: RecordsService,
    private fb: FormBuilder,
    private flashMessage: FlashMessagesService,
    private router: Router) { }



  editPatient() {
    const patient = {
      first_name: this.patient.first_name,
      last_name: this.patient.last_name,
      DOB: this.patient.DOB,
      email: this.patient.email,
      address: this.patient.address,
      city: this.patient.city,
      province: this.patient.province,
      postal_code: this.patient.postal_code,
      phone: this.patient.phone,
      department: this.patient.department,
      doctor: this.patient.doctor
    }
    this.patientService.updatePatient(this.ID, patient).subscribe((patient: any) => {
      console.log(patient);
      this.flashMessage.show(patient.msg, { cssClass: 'alert-success', timeout: 3000 })
      this.router.navigate(['/patients'])
    })
  }
  ngOnInit() {
    this.patientService.apiData$.subscribe(patient => {

      if (patient) {
        this.patient = patient;
        this.recordService.saveID(patient._id);
      }

    });

    this.ID = JSON.parse(localStorage.getItem("ID"));

    this.patientService.getSinglePatient(this.ID).subscribe((data: any) => {
      this.patient = data;
    })

    this.editPatientForm = this.fb.group({
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

    this.editPatientForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.editPatientForm);
    })



  }

  logValidationErrors(group: FormGroup = this.editPatientForm): void {
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
