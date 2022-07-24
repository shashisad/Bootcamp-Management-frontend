import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { TokenStorageService } from './token-storage.service';
import { AuthService} from './auth.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: any = {};
  loading = true;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService, private tokenStorage: TokenStorageService) {

    const navigation = this.router.getCurrentNavigation();
  }

  ngOnInit() {
    this.roles.selectedRole ='';
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }


  onSubmit() {
    const { email, password } = this.form;
    this.authService.login(email, password).subscribe(
      data => {
        // this.tokenStorage.saveToken(data.accessToken);
        // this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
        console.log("login",data)
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.log("login err",this.errorMessage)
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }

  onLoggedIn() {
    this.loading=false
    console.log("role", this.roles.selectedRole)
    if(this.roles.selectedRole=="ncg")
      this.router.navigate(['/landing']);
    else{
      this.router.navigate(['/admin-landing']);
    }
  }
}
