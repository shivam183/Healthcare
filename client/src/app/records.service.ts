import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Records } from './records';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { }

  authToken: any

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getRecords(id) {
    this.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.get('http://localhost:3000/api/patient/' + id + '/records', { headers: headers });
  }

  addRecord(id, newPatient) {
    this.loadToken();
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' }).set('Authorization', this.authToken);
    return this.http.post('http://localhost:3000/api/patient/' + id, newPatient, { headers: headers });

  }

  deleteRecord(pid, id) {
    this.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.delete('http://localhost:3000/api/patient/' + pid + '/record/' + id, { headers: headers });
  }

  getSingleRecord(pid, id) {
    this.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.get('http://localhost:3000/api/patient' + pid + '/record/' + id, { headers: headers });
  }


}
