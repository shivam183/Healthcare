import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/register', user, {
      headers: headers
    });
  }

  authenticateUser(user) {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/authenticate', user, {
      headers: headers
    });
  }

  getProfile() {
    this.loadToken();
    let headers = new HttpHeaders().set('Authorization', this.authToken);
    return this.http.get('http://localhost:3000/api/profile', {
      headers: headers
    });
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn() {

    const helper = new JwtHelperService();
    return helper.isTokenExpired(localStorage.getItem('id_token'));

  }
}
