import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {UserModel} from "../../model/user.model";
import {Observable} from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class NcgService {

  private GET_ALL_USERS = "http://localhost:4000/api/v1/users";
  private ADD_USER = "http://localhost:4000/api/v1/user/add";
  private ADD_ALL_USERS = "http://localhost:4000/api/v1/user/addAll";
  private UPDATE_USER = "http://localhost:4000/api/v1/user/update";
  private DELETE_USER = "http://localhost:4000/api/v1/user/delete";
  private CREATE_ALL_TEAMS = "http://localhost:4000/api/v1/admin/teams/createAllTeams"

  constructor(private http: HttpClient) { }

  getNcg() {
    return this.http.get(this.GET_ALL_USERS)
      .pipe(map(res => res));
  }

  addUser (user: UserModel) {
    return this.http.post(this.ADD_USER, user, httpOptions);
  }

  addAllUsers(users: UserModel[]) {
    return this.http.post(this.ADD_ALL_USERS, {
      users}, httpOptions);
  }

 createAllTeams() {
   return this.http.post(this.CREATE_ALL_TEAMS,httpOptions);
  }

  deleteUser(id: string) {
    let httpParams = new HttpParams().set('id', id);
    let options = { body: httpParams };
    return this.http.delete(this.DELETE_USER, options);
  }



}
