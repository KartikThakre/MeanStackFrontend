import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  form : FormGroup;
  isResultsLoading = false;

  constructor(private fb : FormBuilder,
    private authservice : AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(){
    this.form = this.fb.group({
      email : ['', Validators.required]
    })
  }

  onSubmit(){
    this.authservice.forgotpassword(this.form.value)
    .subscribe(data =>{
      console.log(data);
    },err => {
      console.error(err);
    }
    )

  }
}
