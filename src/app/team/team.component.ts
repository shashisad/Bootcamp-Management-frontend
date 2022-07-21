import {Component, OnInit} from '@angular/core';
import OrgChart from "@balkangraph/orgchart.js";
import action = OrgChart.action;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {
  constructor() { }

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
        nodeMouseDbClick: action.pan
      });

      chart.load([
        { id: 1, name: "Denny Curtis", title: "CEO", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 2, pid: 1, name: "Ashley Barnett", title: "Sales Manager", img: "https://cdn.balkan.app/shared/3.jpg" },
        { id: 3, pid: 1, name: "Caden Ellison", title: "Dev Manager", img: "https://cdn.balkan.app/shared/4.jpg" },
        { id: 4, pid: 1, name: "Elliot Patel", title: "Sales", img: "https://cdn.balkan.app/shared/5.jpg" },
        { id: 5, pid: 1, name: "Lynn Hussain", title: "Sales", img: "https://cdn.balkan.app/shared/6.jpg" },
        { id: 6, pid: 1, name: "Tanner May", title: "Developer", img: "https://cdn.balkan.app/shared/7.jpg" },
      ]);


    }
  }
}
