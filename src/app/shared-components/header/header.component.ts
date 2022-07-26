import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../login/auth.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  Logout () {
    this.authService.logout().subscribe(
      data => {
      }
    )
    window.sessionStorage.clear();
    this.router.navigate(['/register']);
  }

}
