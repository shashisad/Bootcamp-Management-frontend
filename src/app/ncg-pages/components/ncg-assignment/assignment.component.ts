import { Component, OnInit , ViewChild} from '@angular/core';
import {AssignmentService} from "../../services/assignment.service";
import {AdminAssignmentService} from "../../../admin-pages/services/admin-assignment.service";
import {TokenStorageService} from "../../../shared-components/login/token-storage.service";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  @ViewChild("wizardmd") wizardMedium:  any;
  lgOpen: boolean = false;
   readMore = false;
    allAssignments: any;
    teamAssignments: any;
   link :string= "";
   userId: string = "";
  longText = `This is long paragraph text containing several words continued. An example of implementing dynamically limit long text This is long paragraph text containing several words continued. An example of implementing dynamically limit long text This is long paragraph text containing several words continued. An example of implementing dynamically limit long text`;

  showText() {
    this.readMore = !this.readMore
  }

  constructor(private assignmentService: AssignmentService, private adminAssignmentService: AdminAssignmentService, private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
    // this.model.link = '';
    this.getAllIndividualAssignments();
  }

  getUserName(){
    this.userId = this.tokenStorageService.getUser()._id;
    return this.userId;

  }
  onSubmit(id: string) {
    console.log("id",id)
    this.assignmentService.submitAssignment(id,this.link).subscribe(
      data => {
        console.log("submitted", data)
      }
    )

  }
  getAllIndividualAssignments() {
    this.adminAssignmentService.getAllAssignments()
      .subscribe(data => {

        this.allAssignments = data.allAssignments;
        console.log("dd",this.allAssignments);
      });
  }

  getAllTeamAssignments() {
    this.adminAssignmentService.getAllTeamsAssignments()
      .subscribe(data =>{
        this.teamAssignments = data.allAssignments;
      })
  }

}
