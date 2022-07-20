import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class NcgService {

  private GET_ALL_NCGS = "http://localhost:4000/api/v1/getAllAssignments";
  constructor(private http: HttpClient) { }

  getNcg() {
    return this.http.get(this.GET_ALL_NCGS)
      .pipe(map(res => res));
  }
}
