import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice, InvioicePaginationResponce } from '../models/Invoice';
import { Observable } from 'rxjs';


const BASE_URL = 'http://localhost:3000/api'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private httpclient : HttpClient) { }

  getInvoices({ page, perPage, sortField, sortDir, filter }): Observable<InvioicePaginationResponce> {
    let queryString = `${BASE_URL}/invoices?page=${page + 1}&perPage=${perPage}`;
    if (sortField && sortDir) {
      queryString = `${queryString}&sortField=${sortField}&sortDir=${sortDir}`;
    }
    if (filter) {
      queryString = `${queryString}&filter=${filter}`
    }
    return this.httpclient.get<InvioicePaginationResponce>(queryString);
  }

  createInvoice(body : Invoice) : Observable<Invoice>{
    return this.httpclient.post<Invoice>(`${BASE_URL}/invoices`,body)
  }

  deleteInvoice(id:string) : Observable<Invoice>{
    return this.httpclient.delete<Invoice>(`${BASE_URL}/invoices/${id}`)
  }

  getInvoice(id:string): Observable<Invoice> {
    return this.httpclient.get<Invoice>(`${BASE_URL}/invoices/${id}`)
  }

  updateInvoice(id:string, body:Invoice): Observable<Invoice>{
    return this.httpclient.put<Invoice>(`${BASE_URL}/invoices/${id}`,body)
  }

}
