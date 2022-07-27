import { Component, OnInit } from '@angular/core';
import {AdminTeamsService} from "../../services/admin-teams.service";
import {MyTeamModel, TeamModel} from "../../../model/team.model";

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {

  allteams: MyTeamModel[] =[];
  constructor(private adminTeamsService: AdminTeamsService) { }

  ngOnInit(): void {
    this.getAllTeams();
  }
  getAllTeams() {
    this.adminTeamsService.getAllTeams()
      .subscribe(data => {
        var obj = this.adminTeamsService.parsingObject(data)
        for (var i of obj){
          this.allteams.push(i)
        }

      })
  }
}

