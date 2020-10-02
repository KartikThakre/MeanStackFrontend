import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ClientFormDialogComponent } from '../client-form-dialog/client-form-dialog.component';
import {  MatSnackBar } from '@angular/material/snack-bar';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import { remove } from 'lodash';

@Component({
  selector: 'app-client-listing',
  templateUrl: './client-listing.component.html',
  styleUrls: ['./client-listing.component.css']
})
export class ClientListingComponent implements OnInit {

  displayedColumns = ['firstname','lastname','email','action'];
  dataSource = new MatTableDataSource<Client>();
  isResultsLoading = false;
  client : Client[];

  constructor(private clientservice : ClientService,
    public dialog: MatDialog,
    private snakBar:MatSnackBar) { }

  ngOnInit() {
    this.isResultsLoading = true;
    this.clientservice.getClients()
    .subscribe(data => {
      this.dataSource.data = data
    },err => this.errorHandler(err, 'Opps!!! Something Went Wrong'),
    () => this.isResultsLoading = false);
  }

  saveBtnHanlder(){
    console.log("jxuas");
  }

  deleteBtnHandler(clientId){
    this.clientservice.deleteInvoice(clientId)
    .subscribe(data => {
      const removedItems = remove(this.dataSource.data, (item) => {
        return item._id === data._id
      });
      this.dataSource.data = [...this.dataSource.data];
      this.snakBar.open('Client deleted', 'Success', {
        duration: 2000
      })
    }, err => this.errorHandler(err, 'Failed to delete client'))
  }

  openDialog(clientId : string): void {
    const options ={
      width: '400px',
      height: '300px',
      data :{}
    }
    if(clientId){
      options.data = {clientId:clientId, title: 'Edit Client'}
    }
    const dialogRef = this.dialog.open(ClientFormDialogComponent, options); 
      
  dialogRef.afterClosed()
  .filter(clientParam => typeof clientParam === 'object')
  .flatMap(result => {
    return clientId ? this.clientservice.updateClient(clientId,result) : 
     this.clientservice.createClients(result);
  })
  .subscribe(client => {
    let successMsg = '';
    if (clientId) {
      this.dataSource.data.findIndex(client => client._id === clientId);
      this.dataSource.data = client;
      successMsg = 'Client updated'
    }
    else {
      this.dataSource.data.push();
      successMsg = 'Client created'
    }
    this.dataSource.data = [...this.dataSource.data];
    this.snakBar.open(successMsg, 'Success', {
      duration: 2000
    })
  }, err => this.errorHandler(err, 'Failed to created Client'))    
}
  
    private errorHandler(error, message){
      this.isResultsLoading = false;
      console.log(error);
      this.snakBar.open(message,'Error',{
        duration:2000
      });
    }
}
