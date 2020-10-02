
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceBuilderComponent } from './invoice-builder.component';
import { InvoiceListingComponent } from '../invoice-listing/invoice-listing.component';
import { ClientListingComponent } from '../client-listing/client-listing.component';
import { InvoiceFormComponent } from '../invoice-form/invoice-form.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { EditInvoiceResolverService } from '../services/edit-invoice-resolver.service';
import { InvoiceViewComponent } from '../invoice/invoice-view.component';
const routes: Routes = [
  {
    path : 'invoice-builder',
    component : InvoiceBuilderComponent,
    canActivate : [AuthGuardService],
    children : [
        {
          path : 'invoices',
          component :InvoiceListingComponent,
          canActivateChild :[AuthGuardService]
        },
        {
          path : 'invoices/new',
          component :InvoiceFormComponent,
          canActivateChild :[AuthGuardService]
        },
        // {
        //   path : 'invoices/:id/view',
        //   component :InvoiceViewComponent,
        //   canActivateChild :[AuthGuardService],
        //   resolve : {
        //     invoice : EditInvoiceResolverService
        //   }
        // },
         {
          path : 'invoices/:id',
          component :InvoiceFormComponent,
          canActivateChild :[AuthGuardService],
          resolve : {
            invoice : EditInvoiceResolverService
          }
        },
        {
          path : 'clients',
          component : ClientListingComponent,
          canActivateChild :[AuthGuardService]
        },
        {
          path: '**',
          redirectTo : 'invoices',
          canActivateChild :[AuthGuardService]
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceBuilderRoutingModule { }
