import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Assignment} from "../../model/assignment.model"
import {Observable} from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AdminAssignmentService {

  private GET_ALL_ASSIGNMENTS = "http://localhost:4000/api/v1/getAllAssignments"
  private CREATE_ASSIGNMENTS = "http://localhost:4000/api/v1/admin/assignments/createAssignment"
  constructor(private http: HttpClient) { }

  getAllAssignments() : Observable<any> {
    return this.http.get(this.GET_ALL_ASSIGNMENTS).pipe
    (map(res => res));
  }

  createAssignment (title: string, content: string, credit: number, dueDate: string) : Observable<any> {
  return this.http.post(this.CREATE_ASSIGNMENTS, {
    title,
    content,
    credit,
    dueDate
  }, httpOptions);
  }
}
