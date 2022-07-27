import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminAssignmentService} from '../../services/admin-assignment.service'
import {Assignment,NcgSubmission} from '../../../model/assignment.model'
import {AdminTeamsService} from "../../services/admin-teams.service";
import {NcgService} from "../../services/ncg.service";
import {Ncg} from "../../../model/ncg.model";

@Component({
  selector: 'app-admin-assignment',
  templateUrl: './admin-assignment.component.html',
  styleUrls: ['./admin-assignment.component.css']
})
export class AdminAssignmentComponent implements OnInit {

  @ViewChild("wizardlg") wizardLarge :any;
  mdOpen: boolean = false;
  ncgs :Ncg[] = [];
  allAssignments: any;
  ncgSubmissions: NcgSubmission[] =[];
  allTeamAssignments: Assignment[]=[];
  form: any = {
    title : '',
    content :'',
    dueDate : '',
    credit : ''
  };
  selectedAssignment :Assignment;
  actionBarConfig: Array<{
    id: string,
    label: string,
    isDisabled: boolean,
    iconShape: string
  }>
  assignment: Assignment[] = [];
  lgOpen: boolean= false;
  review: boolean = false;
  assignmentId: string=''
  marksBody:any[] =[]

  constructor(private adminAssignmentService: AdminAssignmentService, private ncgService: NcgService, private adminTeamsService: AdminTeamsService) { }

  ngOnInit(): void {
    this.getAllAssignments();
    this.initializeActionBarConfig();
  }

  selectionChanged(e:Assignment){
    this.selectedAssignment = e;
    if (this.selectedAssignment) {
      this.setButtonDisableState('REVIEW_ASSIGNMENT', false);
    }
  }

  setButtonDisableState(key:string, isDisabled:boolean){
    // @ts-ignore
    this.actionBarConfig.find(item => item.id === key).isDisabled = isDisabled;
  }

  initializeActionBarConfig() {
    this.actionBarConfig = [
      {
        id: "CREATE_ASSIGNMENT",
        label: "Create Assignment",
        isDisabled: false,
        iconShape: "plus",
      },
      {
        id: "REVIEW_ASSIGNMENT",
        label: "Review Assignment",
        isDisabled: true,
        iconShape: "pencil",
      }

    ]

  }

  onActionButtonClick(key: string) {
    switch (key) {
      case 'CREATE_ASSIGNMENT':
       this.mdOpen = true;
        break;
      case 'REVIEW_ASSIGNMENT':
        this.review = true
        this.reviewAssignment(this.selectedAssignment)
        break;
    }
  }

  reviewAssignment(selected:  Assignment) {
    for(let item of this.allAssignments){
      if(item._id == selected._id) {
          this.ncgSubmissions = selected.ncgSubmittedLink
        this.assignmentId =  selected._id
      }
    }
  }

  uploadMarks() {
    this.review = false
    for(let ncgs of this.ncgSubmissions) {
      let uploadedMarks =  {
        ncgId: ncgs.ncg_id,
        marks: ncgs.marks
      }
      this.marksBody.push(uploadedMarks)
    }
    console.log(this.marksBody)
    console.log(this.assignmentId, this.marksBody)
    this.adminAssignmentService.uploadNcgMarks(this.assignmentId, this.marksBody)

  }

  getAllAssignments() {
    this.adminAssignmentService.getAllAssignments()
      .subscribe(data => {

       this.allAssignments = data.allAssignments;
        console.log("indiv assg",this.allAssignments);

        // var obj = this.adminTeamsService.parsingObject(data.allAssignments.ncgSubmittedLink);
        // for (var i of obj) {
        //   this.ncgSubmissions.push(i)
        // }
        // console.log("ncg submis", this.allAssignments[0].ncgSubmittedLink)


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

  createTeamAssignment() {
    this.adminAssignmentService. createAllTeamsAssignment(this.form.title,this.form.content,4,this.form.dueDate).subscribe(
      data => {
        console.log("created team assgn",data);
      }
    )
    console.log(this.form.title, this.form.content,this.form.credit,this.form.dueDate);
  }


  getAllTeamAssignment() {
    this.adminAssignmentService.getAllTeamsAssignments()
      .subscribe(
        data => {
          this.allTeamAssignments = data.allAssignments;
          console.log("team assgn",this.allTeamAssignments);
        }
      )
  }

  getAllNcgs() {
    this.ncgService.getNcg().subscribe(
      data => {
        let obj = this.adminTeamsService.parsingObject(data);
        for (let i of obj) {
          this.ncgs.push(i)
        }
      });
  }

  }


