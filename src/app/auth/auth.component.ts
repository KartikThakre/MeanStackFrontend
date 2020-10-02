import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { JwtService } from '../services/jwt.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authform : FormGroup;
  title = '';
  isResultsLoading = false;

  constructor(private fb : FormBuilder,
              private authservice :AuthService,
              private jwtservice : JwtService,
              private router : Router,
              public snackBar : MatSnackBar,) { }

  ngOnInit() {
    this.initForm();
    this.title = this.router.url === '/login' ? 'Login' : 'Signup';    //Add title of form dynamically
  }

  // forgotPassHandler(){
  //   debugger;
  //   this.router.navigate(['/forgot-password']);
  // }
  onSubmit(){
    if(this.title === 'Signup'){
      this.isResultsLoading = true;
      this.authservice.signup(this.authform.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/invoice-builder','invoices']);
      },err => this.errorHandler(err, 'Opps!!! Somethig Went Wrong'),
      () => this.isResultsLoading = false);
    }
    else{
    this.isResultsLoading = true
    this.authservice.login(this.authform.value)
    .subscribe(data => {
      console.log(data);
      this.jwtservice.setToken(data.token);
      this.router.navigate(['/invoice-builder','invoices']);
    },err => this.errorHandler(err, 'Failed to filter invoices'),
    () => this.isResultsLoading = false);
  }
  }


  private initForm(){
    this.authform = this.fb.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  private errorHandler(error, message) {
    this.isResultsLoading = false;
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000
    });
    
  }

}
