import { Component, OnInit } from '@angular/core';
import {IRanking} from "../../model/model";
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  ranking : IRanking[] =[{
    rankNo: 1,
    ncgName: "Shashi",
    ncgEmail: "ssad@vmware.com",
    marks: 500,
  },
    {
      rankNo: 2,
      ncgName: "Ketki",
      ncgEmail: "keki@vmware.com",
      marks: 499,
    },
    {
      rankNo: 3,
      ncgName: "Tushar",
      ncgEmail: "tushar@vmware.com",
      marks: 100,
    }]
  constructor() { }

  ngOnInit(): void {

  }

}
