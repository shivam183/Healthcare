import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
  
})
export class RecordsComponent implements OnInit {

  patient: Patient;
  constructor(private patientService: PatientService) {


  }

  ngOnInit() {
    this.patientService.apiData$.subscribe(patient => this.patient=patient);
  }

}
