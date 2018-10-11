import { Injectable, NgModule } from '@angular/core';
import { Patient } from './Patient';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})



export class PatientService {

  authToken: any;


  constructor(private http: HttpClient, private authService: AuthService) { }

  //Retriving Patients

  getPatients() {
    this.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken).set
      ('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/api/patients', { headers: headers });
  }

  //Add Patient

  addPatient(newPatient) {
    this.loadToken();
    console.log(this.authToken);
    var headers = new HttpHeaders().set('Authorization', this.authToken).set
      ('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/patient', newPatient, { headers: headers });

  }

  //Delete Patient


  deletePatient(id) {
    this.authService.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.delete('http://localhost:3000/api/patient/' + id, { headers: headers });
  }


  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}
