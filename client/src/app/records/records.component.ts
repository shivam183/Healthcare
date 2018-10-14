import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../Patient';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  patient: Patient;
  constructor() { 

    this.patient=new Patient();
  }

  ngOnInit() {
  }

}
