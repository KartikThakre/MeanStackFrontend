import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListingComponent } from '../client-listing/client-listing.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientFormDialogComponent } from '../client-form-dialog/client-form-dialog.component';

@NgModule({
  declarations: [ClientFormDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports : [ClientFormDialogComponent],
  entryComponents : [ClientFormDialogComponent]
})
export class ClientModule { }
