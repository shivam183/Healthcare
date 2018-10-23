import { Component, OnInit, Injectable } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../Patient';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css'],
  //providers: [PatientService]
})

@Injectable()
export class ViewPatientsComponent implements OnInit {

  patients: Patient[];

  constructor(
    private patientService: PatientService,
    private flashMessasge: FlashMessagesService,
    private router: Router) { }

  deletePatient(id: any) {
    var patients = this.patients;
    if (window.confirm("Are you sure you want to Delete this patient?")) {
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
  }

  getSinglePatient(id: any) {
    this.patientService.getSinglePatient(id).subscribe((data: any) => {
      this.patients = data;
      this.patientService.setData(data);
      this.router.navigate(['/records']);
    });

  }

  editPatient(id: any) {
    this.patientService.getSinglePatient(id).subscribe((data: any) => {
      this.patients = data;
      this.patientService.setData(data);
      this.router.navigate(['/editPatient']);
    })

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
