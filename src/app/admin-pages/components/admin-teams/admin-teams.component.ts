import { Component, OnInit } from '@angular/core';
import {AdminTeamsService} from "../../services/admin-teams.service";
import {TeamModel} from "../../../model/team.model";

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {

  allteams: TeamModel[] =[];
  constructor(private adminTeamsService: AdminTeamsService) { }

  ngOnInit(): void {
    this.getAllTeams();
  }
  getAllTeams() {
    this.adminTeamsService.getAllTeams()
      .subscribe(data => {
        console.log(data)
        var obj = parseObject(data)
        for (var i of obj){
          this.allteams.push(i)
        }
        console.log("fin1",  this.allteams)

        var res = this.adminTeamsService.parsingObject(data);
        console.log("res", res);
      })
  }

  createTeam () {
    //dummy data
    const members =[
      "62d3d3e8f4e97b038697af0e",
      "62d3d51cf4e97b038697af10"
    ]
    this.adminTeamsService.createTeam(1,members).subscribe(
      data => {
        console.log("Team created", data)
      }
    )
  }

  deleteTeam( teamId: number) {
    this.adminTeamsService.deleteTeam(teamId).subscribe(
      data => {
        console.log("Deleted")
      }
    )
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
