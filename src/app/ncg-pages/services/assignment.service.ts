import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AssignmentService {


  private SUBMIT_ASSIGNMENT = "http://localhost:4000/api/v1/user/submitAssignment/";
  private SUBMIT_TEAM_ASSIGNMENT = "http://localhost:4000/api/v1/teams/submitTeamAssignment/";
  private GET_TEAM_MEMBERS = "http://localhost:4000/api/v1/teams/getTeamMembers";

  constructor(private http: HttpClient) { }

  submitAssignment(assignmentId: string, submission: string) : Observable<any>  {
    const body= {
      ncgSubmittedLink:{
        link:'subm-link'
      }
    }
    return this.http.post(this.SUBMIT_ASSIGNMENT+assignmentId, body, httpOptions);
  }

  submitTeamAssignment(teamId: string, submission: string) : Observable<any>  {
    const body= {
      teamSubmittedLink:{
        link:submission
      }
    }
    return this.http.post(this.SUBMIT_ASSIGNMENT+teamId, {
      body}, httpOptions);
  }

  getTeamMembers(): Observable<any>{
  return this.http.get(this.GET_TEAM_MEMBERS,httpOptions).pipe
  (map(res => res));
}

}
