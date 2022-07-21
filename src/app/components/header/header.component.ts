import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TokenStorageService} from "../../login/token-storage.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private tokenStorageService :TokenStorageService) { }

  ngOnInit(): void {
  }

  Logout() {
    this.tokenStorageService.logOut();
    this.router.navigate(['/login']);
  }

}
