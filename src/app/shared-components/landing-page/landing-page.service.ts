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
export class LandingPageService {

  private GET_LEADERBOARD = "http://localhost:4000/api/v1/getLeaderboardInfo";
  constructor(private http: HttpClient) { }

  getLeaderBoard() : Observable<any>{
    return this.http.get(this.GET_LEADERBOARD).pipe(
      map(res =>res)
    );
  }
}
