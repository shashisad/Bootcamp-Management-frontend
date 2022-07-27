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
        var obj = parseObject(data)
        for (var i of obj){
          this.allteams.push(i)
        }

      })
  }
}

function parseObject(obj : any): any
{
  for(var key in obj) {
    if(obj[key] instanceof Object) {
      parseObject(obj[key]);
    }
    var fin = obj[key];
  }
  return fin
}
