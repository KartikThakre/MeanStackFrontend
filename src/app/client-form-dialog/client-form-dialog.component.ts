import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-client-form-dialog',
  templateUrl: './client-form-dialog.component.html',
  styleUrls: ['./client-form-dialog.component.css']
})
export class ClientFormDialogComponent implements OnInit {

  clientForm : FormGroup;
  title = 'New Client'
  constructor(
    public dialogRef: MatDialogRef<ClientFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb : FormBuilder,
    private clientservice : ClientService,
    private snakBar:MatSnackBar) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.initClientForm();
    if(this.data && this.data.clientId){
      this.setClientToform(this.data.clientId)
    }
  }

  private setClientToform(clientId) {
    this.title = 'Edit Client';
    this.clientservice.getclient(clientId)
    .subscribe(client =>{
      this.clientForm.patchValue(client);
    },err => this.errorHandler(err,'Failed to load Client'))
  }

  private initClientForm(){
    this.clientForm = this.fb.group({
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        email:['',Validators.required]
    })
}

private errorHandler(error, message){
  console.log(error);
  this.snakBar.open(message,'Error',{
    duration:2000
  });
}

}
