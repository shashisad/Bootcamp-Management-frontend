import {Component, OnInit} from '@angular/core';
import OrgChart from "@balkangraph/orgchart.js";
import action = OrgChart.action;
import {AssignmentService} from "../../services/assignment.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
  teamMembers: any = {
    _id: '',
    userList: [],
    teamMentor: ''
  }

  newdata = [
    {id: 1, name: "Denny Curtis", title: "Mentor", img: "../../../assets/mentor-profile-pic.png"},
    {id: 2, pid: 1, name: "Ashley Barnett", title: "Ncg", img: ""},
    {id: 3, pid: 1, name: "Caden Ellison", title: "Ncg", img: ""},
    {id: 4, pid: 1, name: "Elliot Patel", title: "Ncg", img: ""},
    {id: 5, pid: 1, name: "Lynn Hussain", title: "Ncg", img: ""},
    {id: 6, pid: 1, name: "Tanner May", title: "Ncg", img: ""},
  ];

  constructor(private assignmentService: AssignmentService) {
  }

  ngOnInit() {
    const tree = document.getElementById('tree');
    if (tree) {
      const chart = new OrgChart(tree, {
        nodeBinding: {
          field_0: "name",
          title: "title",
          img_0: "img"
        },
        searchFieldsWeight: {
          "name": 100, //percent
          "manager": 20 //percent
        },
        nodeMouseClick: OrgChart.action.none,
        mouseScrool: action.centerNode,
        template: "diva",
        enableDragDrop: false,
        nodeMouseDbClick: action.pan,
      });

      const teamData = this.getTeamMembers();
      chart.load(teamData)
    }

  }

  getTeamMembers() : any{
    let teamData: any = [];
    this.assignmentService.getTeamMembers().subscribe(
      data => {
        console.log(data)
        this.teamMembers = data.userList

        const item = {
          id: 1,
          name: data.teamMentor,
          title: "Ncg",
          img: "../../../assets/mentor-profile-pic.png"
        }
        teamData.push(item)

        let count = 2
        for (var i of this.teamMembers) {
          const item = {
            id: count,
            pid: 1,
            name: i.name,
            title: "Ncg",
            img: "../../../assets/img2.png"
          }
          count++;
          teamData.push(item)
        }
      }
    )
    console.log(teamData)
    return teamData
  }
}
