import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminAssignmentService} from '../../services/admin-assignment.service'
import {Assignment,NcgSubmission} from '../../model/assignment.model'

@Component({
  selector: 'app-admin-assignment',
  templateUrl: './admin-assignment.component.html',
  styleUrls: ['./admin-assignment.component.css']
})
export class AdminAssignmentComponent implements OnInit {

  @ViewChild("wizardlg") wizardLarge :any;
  mdOpen: boolean = false;
  allAssignments: any;
  form: any = {};
  assignment: Assignment[] = [];

  constructor(private adminAssignmentService: AdminAssignmentService) { }

  ngOnInit(): void {
    this.getAllAssignments();
    this.form.title = '';
    this.form.content = '';
    this.form.dueDate = '';
    this.form.credit = '';
  }

  getAllAssignments() {
    this.adminAssignmentService.getAllAssignments()
      .subscribe(data => {

       this.allAssignments = data;
        var obj = parseObject(this.allAssignments)
        for (var i of obj){
          this.assignment.push(i)
        }
        console.log("fin1",  this.assignment)
      });
  }

  createAssignment() {
    this.adminAssignmentService.createAssignment(this.form.title,this.form.content,2,this.form.dueDate).subscribe(
      data => {
        console.log("created assgn",data);
      }
    )
    console.log(this.form.title, this.form.content,this.form.credit,this.form.dueDate);
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
