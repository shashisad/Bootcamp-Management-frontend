import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  credentials: "include"
}

@Injectable({
  providedIn: 'root'
})

export class AdminMentorService {

  private GET_ALL_MENTORS = "http://localhost:4000/api/v1/getAllMentors";
  constructor( private httpClient: HttpClient) { }

  getAllMentors( ) : Observable<any>{
    return this.httpClient.get(this. GET_ALL_MENTORS,httpOptions).pipe
    (map(res => res));
  }
}
