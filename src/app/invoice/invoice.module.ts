import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';
import { InvoiceListingComponent } from '../invoice-listing/invoice-listing.component';
import { InvoiceViewComponent } from './invoice-view.component';
import { RouterModule } from '@angular/router';
import { ClientModule } from '../client/client.module';
import { ClientListingComponent } from '../client-listing/client-listing.component';



@NgModule({
  declarations: [InvoiceListingComponent, InvoiceViewComponent,ClientListingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    ClientModule
  ],
  exports : [InvoiceListingComponent]
})
export class InvoiceModule { }
