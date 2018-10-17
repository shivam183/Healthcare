import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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


  constructor(private fb: FormBuilder) { }


  onRecordSubmit() {



  }

  ngOnInit() {

    this.addRecord = this.fb.group({
      date: [''],
      nurse: [''],
      type: [''],
      category: [''],
      reading1: [''],
      reading2: [''],
      bp: [''],
      foodAllergy: ['no'],
      diabetic: ['no'],
      heartDisease: ['no'],
      surgery: ['no'],
      accident: ['no'],
    });

  }

}
