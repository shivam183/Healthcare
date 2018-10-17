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
  ID: any;
  PatientName: any;

  constructor(private patientService: PatientService,
    private recordService: RecordsService,
    private flashMessage: FlashMessagesService,
    private router: Router) { }

  //Delete Record
  deleteRecord(pid: any, id: any) {
    var records = this.records;
    if (window.confirm("Are you sure you want to delete this Record?")) {
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
  }

  redirect(){
    this.router.navigate(['/addRecord']);
  }


  ngOnInit() {
    //Get Patient Data from view-patient component
    this.patientService.apiData$.subscribe(patient => {

      if (patient) {
        this.patient = patient;
        this.recordService.saveID(patient._id);
      }

    });

    this.ID = JSON.parse(localStorage.getItem("ID"));


    //Get all records 
    this.recordService.getRecords(this.ID).subscribe((records: any) => {
      this.records = records;
    })
  }

}
