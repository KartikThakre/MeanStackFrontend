import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InvoiceService } from '../services/invoice.service';
import {  MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { Invoice } from '../models/Invoice';
import { ClientService } from '../services/client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {


  private invoice : Invoice;
  invoiceform : FormGroup;
  clients : Client[] = [];
  title = 'New Invoice';
  constructor(private fb: FormBuilder,
    private invoiceservice : InvoiceService,
    public snakBar : MatSnackBar,
    private Router : Router,
    private route : ActivatedRoute,
    private clientservice : ClientService) { }

  ngOnInit() {
    this.createForm();
    this.setInvoice();
    this.setClient();
  }
  
  onSubmit(){
    if(this.invoice){
      this.invoiceservice.updateInvoice(this.invoice._id,this.invoiceform.value)
      .subscribe(data =>{
        this.snakBar.open('Invoice Updated!','Success',{
          duration:2000
        })
        this.Router.navigate(['invoice-builder','invoices'])
      },
      err =>this.errorHandler(err,'Failed to update Invoice'));
    }
    else{
    this.invoiceservice.createInvoice(this.invoiceform.value).subscribe(
      data =>{
        this.snakBar.open('Invoice Created!','Success',{
          duration:2000
        })
        this.invoiceform.reset();
        this.Router.navigate(['invoice-builder','invoices'])
      },
      err =>this.errorHandler(err,'Failed to create Invoice')   
    );
    }
  }

  private setInvoice(){
    this.route.params.subscribe(params =>{
      let id = params['id'];
      if(!id){
        return;
      }
      this.title = 'Edit Invoice';
      // this.invoiceservice.getInvoice(id).subscribe(invoice =>{
        
      //   this.invoice = invoice;
      //   this.invoiceform.patchValue(this.invoice);
      // })
      this.route.data.subscribe((data : {invoice : Invoice})=>{
      this.invoice = data.invoice;
      debugger;
       this.invoiceform.patchValue(this.invoice);
      })
    })
  }

  private setClient(){
    this.clientservice.getClients()
    .subscribe(clients => {
      this.clients = clients;
    },err =>this.errorHandler(err,'Failed to create Clients'))
  }

 private createForm(){
    this.invoiceform = this.fb.group({
      item:['',Validators.required],
      qty:['',Validators.required],
      date:['',Validators.required],
      due:['',Validators.required],
      client:['',Validators.required],
      rate:'',
      tax:''
    });
  }
  private errorHandler(error, message){
    console.log(error);
    this.snakBar.open(message,'Error',{
      duration:2000
    });
  }
  
}

