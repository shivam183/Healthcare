import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../Patient';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css'],
  providers: [PatientService]
})
export class ViewPatientsComponent implements OnInit {

  patients: Patient[];

  constructor(
    private patientService: PatientService,
    private flashMessasge: FlashMessagesService) { }

  deletePatient(id: any) {
    var patients = this.patients;
    this.patientService.deletePatient(id)
      .subscribe((data: any) => {
        if (data.n == 1) {
          for (var i = 0; i < patients.length; i++) {
            if (patients[i]._id == id) {
              patients.splice(i, 1);
            }
          }
          this.flashMessasge.show('Deleted Sucessfully', { cssClass: 'alert-success', timeout: 3000 });
        }
      });

  }


  ngOnInit() {
    this.patientService.getPatients().subscribe((patients: any) => {
      if (!patients.success) {
        this.patients = patients;
        return true;
      }
      if (this.patients.length <= 0) {
        this.flashMessasge.show('No Patients Found', { cssClass: 'alert-danger', timeout: 3000 })
        return false;
      }
    })
  }





}
