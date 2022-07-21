import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AdminTeamsService {


  private GET_ALL_TEAMS = "http://localhost:4000/api/v1/getAllTeams";
  private CREATE_TEAM = "http://localhost:4000/api/v1/admin/teams/addTeam";
  private DELETE_TEAM = "http://localhost:4000/api/v1/admin/teams/removeTeam/{teamId}";
  constructor(private http: HttpClient) { }

  getAllTeams() : Observable<any> {
    return this.http.get(this.GET_ALL_TEAMS).pipe
    (map(res => res));
  }

  createTeam(teamId: number, members: any[]) : Observable<any> {
    return this.http.post(this.CREATE_TEAM, {
      teamId, members
    }, httpOptions);
  }

  deleteTeam(teamId: number) {
    let httpParams = new HttpParams().set('teamId', teamId);
    let options = { params: httpParams };
    return this.http.delete(this.DELETE_TEAM, options);
  }

}
