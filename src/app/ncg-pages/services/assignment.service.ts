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

  ncgSubmittedLink: any;
  private SUBMIT_ASSIGNMENT = "http://localhost:4000/api/v1/user/submitAssignment/";
  constructor(private http: HttpClient) { }

  getAssignments() {

  }

  submitAssignment(assignmentId: string) : Observable<any>  {
    // const body= {
    //   ncgSubmittedLink:{
    //     link:"somethin.drive.com"
    //   }
    // }

    let link = 'somethin.drive.com';

    return this.http.post(this.SUBMIT_ASSIGNMENT+assignmentId, {
      link}, httpOptions);
  }
}
