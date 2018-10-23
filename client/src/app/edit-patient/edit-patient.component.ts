import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../Patient';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {

  patient: Patient;
  ID: any;

  constructor(private patientService: PatientService,
    private recordService: RecordsService) { }

  ngOnInit() {
    this.patientService.apiData$.subscribe(patient => {

      if (patient) {
        this.patient = patient;
        this.recordService.saveID(patient._id);
      }

    });

    this.ID = JSON.parse(localStorage.getItem("ID"));
  }

}
