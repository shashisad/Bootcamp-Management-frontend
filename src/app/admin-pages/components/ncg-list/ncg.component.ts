import {Component, OnInit, ViewChild} from '@angular/core';
import {NcgService} from "../../services/ncg.service";
import {AdminTeamsService} from "../../services/admin-teams.service";
import {Ncg} from "../../../model/ncg.model"
import {UserModel} from "../../../model/user.model";

@Component({
  selector: 'app-ncg',
  templateUrl: './ncg.component.html',
  styleUrls: ['./ncg.component.css']
})


export class NcgComponent implements OnInit {
  @ViewChild("wizardmd") wizardMedium: any;
  lgOpen: boolean = false;
  allNcgs: any;
  ncgs :Ncg[] = [];
  teamMembers:any[] =[];
  model: any = {}
  selectedUser : Ncg | any;
  constructor( private ncgService: NcgService , private adminTeamsService: AdminTeamsService) { }


  ngOnInit() {
    this.getNcg();
    this.model.name = "";
    this.model.email ="";
    this.model.role = "";
  }

  getNcg() {
    this.ncgService.getNcg().subscribe(
      data => {
        this.allNcgs = data;
        var obj = parseObject(this.allNcgs)

        for (var i of obj) {
          this.ncgs.push(i)
        }
        console.log("fin1",this.ncgs);
      });
  }

  onChecked ($event:any, id:any) {
    const isChecked = $event.target.checked;
    if(isChecked === true) {
      this.teamMembers.push(id)
      console.log("id",this.teamMembers)
    }
    else {
      var indx = this.teamMembers.indexOf(id);
      if (indx >-1) {
        this.teamMembers.splice(indx,1);
      }
    }
    console.log("ckd id",this.teamMembers)
  }

  createTeam() {
    this.adminTeamsService.createTeam(1,this.teamMembers).subscribe(
      data => {
        console.log("Team created", data)
      }
    )
  }

  addUser() {
    this.lgOpen = false
    console.log("model", this.model)
    this.ncgService.addUser(this.model).subscribe(
      data => {
        console.log("User created", data)
      }
    )
  }

  deleteUser() {
    this.ncgService.deleteUser(this.selectedUser._id).subscribe(
      data =>{
        console.log("User deleted", data)
      }
    )
  }

  createAllTeams() {
    this.ncgService.createAllTeams().subscribe(
      data => {
        console.log("created teams", data)
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


