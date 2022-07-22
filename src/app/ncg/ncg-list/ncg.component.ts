
import {Component, OnInit, ViewChild} from '@angular/core';
import {NcgService} from "../../services/ncg.service";
import {AdminAssignmentComponent} from "../../admin-pages/admin-assignment/admin-assignment.component";
import {Assignment} from "../../model/assignment.model";
import {AdminTeamsService} from "../../services/admin-teams.service";

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

  constructor( private ncgService: NcgService , private adminTeamsService: AdminTeamsService) { }


  ngOnInit() {
    this.getNcg();
  }

  getNcg() {
    this.ncgService.getNcg()
      .subscribe(data => {
          this.allNcgs = data;
        console.log(this.allNcgs);
        var obj = parseObject(this.allNcgs)
        for (var i of obj){
          this.ncgs.push(i)
        }
        console.log("fin1",this.ncgs);
        }
      );
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

}
function parseObject(obj : any): any
{
  for(var key in obj) {
    if(obj[key] instanceof Object) {
      parseObject(obj[key]);
    }
    var fin = obj[key];
    console.log("fin",fin);
  }
  return fin
}

interface Ncg {
  _id: string
  name: string
  email: string
  role: string
  assignments: Assignment[]
  __v: number
}
