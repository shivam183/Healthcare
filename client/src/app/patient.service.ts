import { Injectable, NgModule } from '@angular/core';
import { Patient } from './Patient';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthService } from './auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'


@Injectable({
  providedIn: 'root'
})



export class PatientService {

  authToken: any;
  private apiData = new BehaviorSubject<Patient>(null);
  public apiData$ = this.apiData.asObservable();

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
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' }).set('Authorization', this.authToken);
    return this.http.post('http://localhost:3000/api/patient', newPatient, { headers: headers });

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
    //this.apiData$ = this.apiData.asObservable();
  }


  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}
