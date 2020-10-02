import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../models/Invoice';
import { Client } from '../models/Client';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.css']
})
export class InvoiceViewComponent implements OnInit {

  invoice : Invoice;
  client : Client[] = [];
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data:any) => {
      this.invoice =  data.invoice;
      console.log(this.invoice);
    });
  }



  
}
