import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { Records } from '../records';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {

  record: Records;
  editRecord: FormGroup;
  ID: any;

  constructor(private recordService: RecordsService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private fb: FormBuilder) { }


  validationMessages = {
    'date': {
      'required': 'Date is required.'
    },
    'nurse': {
      'required': 'Nurse name is required.'
    },
    'type': {
      'required': 'Type of test is required.'
    },
    'category': {
      'required': 'Category of test is required.'
    },
    'reading1': {
      'required': 'Atleast 1 reading is required.'
    },
    'bp': {
      'required': 'Blood Pressure is required.'
    },
    'food_allergy': {
      'required': 'Please Specify Food Allergy.'
    },
    'diabetic': {
      'required': 'Please Specify Diabetic.'
    },
    'heart_disease': {
      'required': 'Please Specify Heart Disease'
    },
    'surgery': {
      'required': 'Please Specify Surgery'
    },
    'accident': {
      'required': 'Please Spcify Accident'
    }
  };

  formErrors = {
    'date': '',
    'nurse': '',
    'type': '',
    'category': '',
    'reading1': '',
    'bp': '',
    'food_allergy': '',
    'diabetic': '',
    'heart_disease': '',
    'surgery': '',
    'accident': ''
  };

  onRecordUpdate() {
    const Urecord = {
      patient_id: this.record.patient_id,
      date: this.record.date,
      nurse_name: this.record.nurse_name,
      type: this.record.type,
      category: this.record.category,
      reading1: this.record.reading1,
      reading2: this.record.reading2,
      food_allergy: this.record.food_allergy,
      bp: this.record.bp,
      diabetic: this.record.diabetic,
      heart_disease: this.record.heart_disease,
      surgery: this.record.surgery,
      accident: this.record.accident
    }
    this.recordService.editRecord(this.record.patient_id, this.record._id, Urecord).subscribe((record: any) => {
      this.flashMessage.show(record.msg, { cssClass: 'alert-success', timeout: 3000 })
      this.router.navigate(['/records'])
    })
  }

  ngOnInit() {
    this.recordService.apiData$.subscribe(record => {
      if (record) {
        this.record = record;
      }
    })

    this.ID = localStorage.getItem('ID');

    this.editRecord = this.fb.group({
      date: ['', Validators.required],
      nurse: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      reading1: ['', Validators.required],
      reading2: [''],
      bp: ['', Validators.required],
      food_allergy: ['', Validators.required],
      diabetic: ['', Validators.required],
      heart_disease: ['', Validators.required],
      surgery: ['', Validators.required],
      accident: ['', Validators.required],
    });

    this.editRecord.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.editRecord);
    })
  }

  logValidationErrors(group: FormGroup = this.editRecord): void {
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
