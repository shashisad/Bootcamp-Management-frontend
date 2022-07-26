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
  private CREATE_ALL_TEAMS = "http://localhost:4000/api/v1/admin/teams/addTeam";
  private GET_TEAM = "http://localhost:4000/api/v1/admin/teams/createAllTeams}";


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

  deleteTeam(teamId: string) {
    let httpParams = new HttpParams().set('teamId', teamId);
    let options = { params: httpParams };
    return this.http.delete(this.DELETE_TEAM+teamId, options);
  }

  parsingObject(obj: any) : any {
    for(var key in obj) {
      if(obj[key] instanceof Object) {
        this.parsingObject(obj[key]);
      }
      var result = obj[key];
    }
    return result
  }

  createAllTeams() : Observable<any> {
    return this.http.post(this.CREATE_ALL_TEAMS, {}, httpOptions);
  }

  getTeam (teamId:string) {
    return this.http.get(this.GET_TEAM+teamId).pipe
    (map(res => res));
  }

}
