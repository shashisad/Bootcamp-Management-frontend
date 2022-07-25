import { Component } from '@angular/core';
import {TokenStorageService} from './login/token-storage.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  email?: string;

  constructor(private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log("whatver",!!this.tokenStorageService.getToken())
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      console.log("whatver user",this.tokenStorageService.getUser())
      this.roles = user.roles;
      // this.showAdminBoard = this.roles.includes('admin');
      this.email = user.email;
    }
  }
}
