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

  //Delete Record
  deleteRecord(pid: any, id: any) {
    var records = this.records;
    this.recordService.deleteRecord(pid, id).subscribe((data: any) => {
      if (data.n == 1) {
        for (var i = 0; i < records.length; i++) {
          if (records[i]._id == id) {
            records.splice(i, 1)
          }
        }
        this.flashMessage.show('Deleted Sucessfully', { cssClass: 'alert-success', timeout: 3000 });
      }
    });
  }


  ngOnInit() {
    //Get Patient Data from view-patient component
    this.patientService.apiData$.subscribe(patient => {
      this.patient = patient;
      if (!patient) {
        this.router.navigate(['/patients'])
        this.flashMessage.show("Please Select a Patient", { cssClass: 'alert-danger', timeout: 3000 });
      }
    });

    //Get all records 
    this.recordService.getRecords(this.patient._id).subscribe((records: any) => {
      this.records = records;
    })
  }

}
