import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  private SUBMIT_ASSIGNMENT = "";
  constructor(private http: HttpClient) { }

  getAssignments() {

  }

  submitAssignment(assignmentId: string) : Observable<any>  {
    const body= {
      ncgSubmittedLink:{
        link:"somethin.drive.com"
      }
    }

    return this.http.post(this.SUBMIT_ASSIGNMENT+assignmentId, {
      body}, httpOptions);
  }
}
