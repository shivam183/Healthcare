import { Injectable, NgModule } from '@angular/core';
import { Patient } from './Patient';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'


@Injectable({
  providedIn: 'root'
})



export class PatientService {

  authToken: any;
  private apiData = new BehaviorSubject<Patient>(null);
  public apiData$ = this.apiData.asObservable();

  constructor(private http: HttpClient) { }

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
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' }).set('Authorization', this.authToken);
    return this.http.post('http://localhost:3000/api/patients', newPatient, { headers: headers });

  }

  //Delete Patient


  deletePatient(id) {
    this.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.delete('http://localhost:3000/api/patient/' + id, { headers: headers });
  }

  getSinglePatient(id) {
    this.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.get('http://localhost:3000/api/patient/' + id, { headers: headers });
  }

  setData(data) {
    this.apiData.next(data);
  }


  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}
