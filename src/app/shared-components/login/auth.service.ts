import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";
const AUTH_API = 'http://localhost:4000/api/v1/user/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  credentials: "include"
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login (email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      email,
      password
    }, httpOptions);
  }

  register (username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username,
      email,
      password
    }, httpOptions);
  }

  logout () {
      return this.http.get(AUTH_API+'logout', { withCredentials: true }).pipe(
        map(res => res)
      );
    window.sessionStorage.clear();
  }
}
