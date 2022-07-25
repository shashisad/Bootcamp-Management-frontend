import { Component, OnInit } from '@angular/core';
import {IRanking} from "../../model/ranking.model";
import {LandingPageService} from "./landing-page.service";
import {AuthService} from "../login/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ranking: IRanking[]=[];
  constructor(private landingPageService: LandingPageService,
              private router: Router,
              private authService: AuthService) { }
  ngOnInit(): void {

    this.getLeaderBoard();
  }

  getLeaderBoard() {
    this.landingPageService.getLeaderBoard().subscribe(
      data => {
        console.log("LeaderBoARD",data);
        this.ranking=data.leaderBoard;
      }
    )
  }

  Logout () {
    this.authService.logout().subscribe(
      data => {
        console.log("loggedout", data);
      }
    )
    this.router.navigate(['/login']);
  }
}
