import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminAssignmentService} from '../../services/admin-assignment.service'
import {Assignment,NcgSubmission} from '../../../model/assignment.model'
import {AdminTeamsService} from "../../services/admin-teams.service";

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

       this.allAssignments = data.allAssignments;
        console.log("dd",this.allAssignments);
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

