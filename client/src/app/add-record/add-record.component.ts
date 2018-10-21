import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Records } from '../records';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

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
  };


  constructor(private fb: FormBuilder) { }


  onRecordSubmit() {



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
      foodAllergy: ['no'],
      diabetic: ['no'],
      heartDisease: ['no'],
      surgery: ['no'],
      accident: ['no'],
    });
  }

  logKeyValuePairs(group: FormGroup): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.logKeyValuePairs(abstractControl);
      } else {
        abstractControl.errors;
      }
    })
  }

}
