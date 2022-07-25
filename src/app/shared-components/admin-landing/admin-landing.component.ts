import { Component, OnInit } from '@angular/core';
import {NcgService} from "../../admin-pages/services/ncg.service";
import {Ncg} from "../../model/ncg.model";
import {AdminTeamsService} from "../../admin-pages/services/admin-teams.service";

@Component({
  selector: 'app-admin-landing',
  templateUrl: './admin-landing.component.html',
  styleUrls: ['./admin-landing.component.css']
})
export class AdminLandingComponent implements OnInit {

  allNcgs: any;
  ncgs :Ncg[] = [];
  constructor(private ncgService: NcgService, private adminTeamsService: AdminTeamsService ) { }

  ngOnInit(): void {
    this.getAllNcgs()
  }

  getAllNcgs() {
    this.ncgService.getNcg().subscribe(
      data => {
        this.allNcgs = data;
        var obj = this.adminTeamsService.parsingObject(data);
        for (var i of obj) {
          this.ncgs.push(i)
        }
        console.log("fin1",this.ncgs);
      });
  }
}
