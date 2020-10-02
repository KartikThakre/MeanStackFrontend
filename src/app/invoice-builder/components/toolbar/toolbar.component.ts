import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtService } from 'src/app/services/jwt.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(
    private jwtService: JwtService,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  logout() {
    //this.authService.logOut().subscribe(
      //data => {
        //debugger;
        //console.log(data);
      //},
      //err => this.errorHandler(err, 'Something went wrong'),
      {
        
        console.log('clicked');
        this.jwtService.destroyToken();
        this.router.navigate(['/login']);
      }
    //);
  }
  // private errorHandler(error, message) {
  //   console.error(error);
  //   this.snackBar.open(message, 'Error', {
  //     duration: 2000
  //   });
  // }

}
