import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../login/auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //                                      firstName: ['', Validators.required],
    //                                      username: ['', Validators.required],
    //                                      password: ['', [Validators.required, Validators.minLength(6)]]
    //                                    });
  }
  // get f() { return this.form.controls; }

  onSubmit() {
    // this.submitted = true;
    // // stop here if form is invalid
    // if (this.form.invalid) {
    //   return;
    // }
    //
    // this.loading = true;

    const { username, email, password } = this.form;
    this.authService.register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
