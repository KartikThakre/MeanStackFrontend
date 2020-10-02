import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Invoice } from '../models/Invoice';
import { InvoiceService } from './invoice.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditInvoiceResolverService implements Resolve<Invoice>{

  constructor(private invoiceservice :InvoiceService,
    private route : Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Invoice>  {
  
    let id =route.paramMap.get('id');
   return this.invoiceservice.getInvoice(id)
    .pipe(
      take(1),
      map(invoice => {
        if(invoice){
          return invoice;
        }
        else{
          this.route.navigate(['/invoice-builder','invoices']);
          return null;
        }
      })
    )
    
  }
}
