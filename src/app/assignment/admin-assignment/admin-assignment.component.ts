import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminAssignmentService} from './admin-assignment.service'
import {Assignment} from '../assignment.model'

@Component({
  selector: 'app-admin-assignment',
  templateUrl: './admin-assignment.component.html',
  styleUrls: ['./admin-assignment.component.css']
})
export class AdminAssignmentComponent implements OnInit {

  @ViewChild("wizardlg") wizardLarge :any;
  mdOpen: boolean = false;
  allAssignments: Assignment[] = [];
  asgn : Object = [];

  constructor(private adminAssignmentService: AdminAssignmentService) { }

  ngOnInit(): void {
    this.getAllAssignments();
   // this.createAssignment();
  }

  getAllAssignments() {
    this.adminAssignmentService.getAllAssignments()
      .subscribe(data => {
        console.log(data)
        this.asgn = data;
      });
  }

  createAssignment() {
    this.adminAssignmentService.createAssignment('abcbd','dcdcsfdcsfvce',2,'05-10-2022').subscribe(
      data => {
        console.log("okkk");
        console.log(data);
      }
    )
  }
}
