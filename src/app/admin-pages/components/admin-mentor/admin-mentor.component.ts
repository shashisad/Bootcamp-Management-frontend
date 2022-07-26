import { Component, OnInit } from '@angular/core';
import {AdminMentorService} from "../../services/admin-mentor.service";

@Component({
  selector: 'app-admin-mentor',
  templateUrl: './admin-mentor.component.html',
  styleUrls: ['./admin-mentor.component.css']
})
export class AdminMentorComponent implements OnInit {

  constructor(private adminMentorService : AdminMentorService) { }

  ngOnInit(): void {
    this.getAllMentors();
  }

  getAllMentors() {
    this.adminMentorService.getAllMentors().subscribe(
      data => {
        console.log ("mentors", data)
      }
    )
  }

}
