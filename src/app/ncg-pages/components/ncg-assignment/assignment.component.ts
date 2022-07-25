import { Component, OnInit , ViewChild} from '@angular/core';
import {AssignmentService} from "../../services/assignment.service";
import {AdminAssignmentService} from "../../../admin-pages/services/admin-assignment.service";

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
   model: any;
  longText = `This is long paragraph text containing several words continued. An example of implementing dynamically limit long text This is long paragraph text containing several words continued. An example of implementing dynamically limit long text This is long paragraph text containing several words continued. An example of implementing dynamically limit long text`;

  showText() {
    this.readMore = !this.readMore
  }

  constructor(private assignmentService: AssignmentService, private adminAssignmentService: AdminAssignmentService) { }

  ngOnInit(): void {
    // this.model.link = '';
    this.getAllIndividualAssignments();
  }

  onSubmit(id: string) {
    console.log("id",id)
    this.assignmentService.submitAssignment("62dd0bb2eec6c6bd9c235601","testlink").subscribe(
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

}
