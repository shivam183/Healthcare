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

  URL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  //Retriving Patients

  getPatients() {
    this.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken).set
      ('Content-Type', 'application/json');
    return this.http.get(`${this.URL}patients`, { headers: headers });
  }

  //Add Patient

  addPatient(newPatient) {
    this.loadToken();
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' }).set('Authorization', this.authToken);
    return this.http.post(`${this.URL}patients`, newPatient, { headers: headers });

  }

  //Delete Patient
  deletePatient(id) {
    this.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.delete(`${this.URL}patient/${id}`, { headers: headers });
  }

  getSinglePatient(id) {
    this.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.get(`${this.URL}patient/${id}`, { headers: headers });
  }

  //Update Patient
  updatePatient(id, Patient) {
    this.loadToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' }).set('Authorization', this.authToken);
    return this.http.put(`${this.URL}patient/${id}`, Patient, { headers: headers });
  }


  setData(data) {
    this.apiData.next(data);
  }


  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}
