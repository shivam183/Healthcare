import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../Patient';
import { PatientService } from '../patient.service';
import { RecordsService } from '../records.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Records } from '../records';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']

})
export class RecordsComponent implements OnInit {

  patient: Patient;
  records: Records[];

  constructor(private patientService: PatientService,
    private recordService: RecordsService,
    private flashMessage: FlashMessagesService,
    private router: Router) { }




  ngOnInit() {
    this.patientService.apiData$.subscribe(patient => {
      console.log(patient)
      this.patient = patient;
      if (!patient) {
        this.router.navigate(['/patients'])
        this.flashMessage.show("Please Select a Patient",{cssClass:'alert-danger',timeout:3000});
      }

    });


    this.recordService.getRecords(this.patient._id).subscribe((records: any) => {

      console.log(records);
      this.records = records;
    })
  }

}
