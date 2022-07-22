import { Component, OnInit , ViewChild} from '@angular/core';
import {AssignmentService} from "./assignment.service";
import {AdminAssignmentService} from "../../services/admin-assignment.service";

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

  onSubmit() {
    // this.assignmentService.submitAssignment()
    //
  }
  getAllIndividualAssignments() {
    this.adminAssignmentService.getAllAssignments()
      .subscribe(data => {

        this.allAssignments = data.allAssignments;
        console.log("dd",this.allAssignments);
        // var obj = parseObject(this.allAssignments)
        // for (var i of obj){
        //   this.assignment.push(i)
        // }
        // console.log("fin1",  this.assignment)
      });
  }

}
