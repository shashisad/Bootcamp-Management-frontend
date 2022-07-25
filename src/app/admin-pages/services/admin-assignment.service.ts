import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  credentials: "include"
};
@Injectable({
  providedIn: 'root'
})
export class AdminAssignmentService {

  private GET_ALL_ASSIGNMENTS = "http://localhost:4000/api/v1/getAllAssignments";
  private GET_ALL_TEAMS_ASSIGNMENTS = "http://localhost:4000/api/v1/getAllTeamAssignments";
  private CREATE_ASSIGNMENTS_FOR_ALL = "http://localhost:4000/api/v1/admin/assignments/createAssignmentForAll"
  private CREATE_TEAM_ASSIGNMENT = "http://localhost:4000/api/v1/admin/teams/createAssignment/";
  private CREATE_ASSIGNMENTS_FOR_ALL_TEAMS = "http://localhost:4000/api/v1/admin/assignments/createAssignmentForAllTeams";
  private GET_USER_SUBMISSION = "http://localhost:4000/api/v1/admin/assignments/getSingleUserSubmission/";
  private UPLOAD_NCG_MARKS = "http://localhost:4000/api/v1/admin/assignments/uploadOrUpdateMarks/";
  private UPLOAD_TEAM_MARKS = "http://localhost:4000/api/v1/admin/assignments/uploadOrUpdateTeamMarks/"

  constructor(private http: HttpClient) { }

  getAllAssignments() : Observable<any> {
    return this.http.get(this.GET_ALL_ASSIGNMENTS,httpOptions).pipe
    (map(res => res));
  }

  getAllTeamsAssignments() : Observable<any> {
    return this.http.get(this.GET_ALL_TEAMS_ASSIGNMENTS,httpOptions).pipe
    (map(res => res));
  }
  createAssignment (title: string, content: string, credit: number, dueDate: string) : Observable<any> {
  return this.http.post(this.CREATE_ASSIGNMENTS_FOR_ALL, {
    title,
    content,
    credit,
    dueDate
  }, httpOptions);
  }

  createTeamAssignment (teamId: string, title: string, content: string, credit: number, dueDate: string) : Observable<any> {
    return this.http.post(this.CREATE_TEAM_ASSIGNMENT+teamId, {
      title,
      content,
      credit,
      dueDate
    }, httpOptions);
  }

  createAllTeamsAssignment (title: string, content: string, credit: number,dueDate: string) : Observable<any> {
    return this.http.post(this.CREATE_ASSIGNMENTS_FOR_ALL_TEAMS, {
      title,
      content,
      credit,
      dueDate
    }, httpOptions);
  }

  getUserSubmission(userId: string, assignmentId: string) {
    return this.http.get(this.GET_USER_SUBMISSION+assignmentId+"/"+userId).pipe
    (map(res => res));
  }

  uploadNcgMarks(userId: string, assignmentId: string, marks: number) {
    return this.http.post(this.UPLOAD_NCG_MARKS+assignmentId+"/"+userId, {
      marks
    }, httpOptions);
  }

  uploadTeamMarks(teamId: string, assignmentId: string, marks: number) {
    return this.http.post(this.UPLOAD_TEAM_MARKS+assignmentId+"/"+teamId, {
     marks
    }, httpOptions);
  }

}
