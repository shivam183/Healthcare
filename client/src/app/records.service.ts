import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Records } from './records';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) { }

  authToken: any;
  private apiData = new BehaviorSubject<Records>(null);
  public apiData$ = this.apiData.asObservable();

  URL = 'http://localhost:3000/api/patient/';


  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  saveID(id) {
    localStorage.removeItem("ID");
    localStorage.setItem("ID", JSON.stringify(id));
  }

  getRecords(id) {
    this.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.get(`${this.URL}${id}/records`, { headers: headers });
  }

  addRecord(id, newRecord) {
    this.loadToken();
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' }).set('Authorization', this.authToken);
    return this.http.post(`${this.URL}${id}/records`, newRecord, { headers: headers });

  }

  deleteRecord(pid, id) {
    this.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.delete(`${this.URL}${pid}/record/${id}`, { headers: headers });
  }

  getSingleRecord(pid, id) {
    this.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.get(`${this.URL}${pid}/record/${id}`, { headers: headers });
  }

  editRecord(pid, id, record) {
    this.loadToken();
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' }).set('Authorization', this.authToken);
    return this.http.put(`${this.URL}${pid}/record/${id}`, record, { headers: headers });
  }

  setData(data) {
    this.apiData.next(data);
  }

}
