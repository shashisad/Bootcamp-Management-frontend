
import {Component, OnInit, ViewChild} from '@angular/core';
import {NcgService} from "../../services/ncg.service";
import {AdminAssignmentComponent} from "../../admin-pages/admin-assignment/admin-assignment.component";
import {Assignment} from "../../model/assignment.model";

@Component({
  selector: 'app-ncg',
  templateUrl: './ncg.component.html',
  styleUrls: ['./ncg.component.css']
})
export class NcgComponent implements OnInit {
  @ViewChild("wizardmd") wizardMedium: any;
  lgOpen: boolean = false;
  allNcgs: any
  ncgs :Ncg[] = [];

  constructor( private ncgService: NcgService ) { }


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

class Ncg {
  _id: string |any
  name: string |any
  email: string |any
  role: string |any
  assignments: Assignment[] |any
  __v: number|any
}
