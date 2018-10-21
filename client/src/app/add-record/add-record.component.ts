import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Records } from '../records';
import { RecordsService } from '../records.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  ID: any;
  addRecord: FormGroup;

  records: Records[];
  record: Records;
  patient_id: String;
  date: String;
  nurse_name: String;
  type: String;
  category: String
  reading1: String;
  reading2: String;
  food_allergy: String;
  bp: String;
  diabetic: String;
  heart_disease: String;
  surgery: String;
  accident: String;


  validationMessages = {
    'date': {
      'required': 'Date is required.',
      'pattern': 'Please provide correct format of date DD/MM/YYYY'
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
  };

  formErrors = {
    'date': '',
    'nurse': '',
    'type': '',
    'category': '',
    'reading1': '',
    'bp': ''
  };


  constructor(private fb: FormBuilder,
    private recordService: RecordsService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }


  onRecordSubmit() {
    const newRecord = {
      patient_id: this.ID,
      date: this.date,
      nurse_name: this.nurse_name,
      type: this.type,
      category: this.category,
      reading1: this.reading1,
      reading2: this.reading2,
      food_allergy: this.food_allergy,
      bp: this.bp,
      diabetic: this.diabetic,
      heart_disease: this.heart_disease,
      surgery: this.surgery,
      accident: this.accident
    }
    this.recordService.addRecord(this.ID, newRecord).subscribe((record: any) => {
      this.records = record;
      this.flashMessage.show("Record added sucessfully", { 'cssClass': 'alert-success', 'timeout': 3000 });
      this.router.navigate(['/records']);
    })

  }

  ngOnInit() {

    this.addRecord = this.fb.group({
      date: ['', Validators.required],
      nurse: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      reading1: ['', Validators.required],
      reading2: [''],
      bp: ['', Validators.required],
      food_allergy: ['no'],
      diabetic: ['no'],
      heart_disease: ['no'],
      surgery: ['no'],
      accident: ['no'],
    });

    this.addRecord.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.addRecord);
    })


    this.ID = JSON.parse(localStorage.getItem("ID"));
  }

  logValidationErrors(group: FormGroup = this.addRecord): void {
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
