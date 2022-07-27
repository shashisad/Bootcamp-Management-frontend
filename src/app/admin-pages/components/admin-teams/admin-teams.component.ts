import { Component, OnInit } from '@angular/core';
import {AdminTeamsService} from "../../services/admin-teams.service";
import {MyTeamModel, TeamModel} from "../../../model/team.model";
import {ClrDatagridStringFilterInterface} from "@clr/angular";
import {Ncg} from "../../../model/ncg.model";

export class NameFilter implements ClrDatagridStringFilterInterface<MyTeamModel> {
  accepts(user:MyTeamModel, search: string):boolean {
    return "" + user.name == search
      || user.name.toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
  selector: 'app-admin-teams',
  templateUrl: './admin-teams.component.html',
  styleUrls: ['./admin-teams.component.css']
})
export class AdminTeamsComponent implements OnInit {
  nameFilter = new NameFilter();
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

