import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-admin-assignment',
  templateUrl: './admin-assignment.component.html',
  styleUrls: ['./admin-assignment.component.css']
})
export class AdminAssignmentComponent implements OnInit {

  @ViewChild("wizardlg") wizardLarge :any;
  mdOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
