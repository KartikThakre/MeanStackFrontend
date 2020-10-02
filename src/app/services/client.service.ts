import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Client } from "../models/client";

const BASE_URL = 'http://localhost:3000/api'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpclient : HttpClient) { }

  getClients() : Observable<Client[]>{
    return this.httpclient.get<Client[]>(`${BASE_URL}/client`);
  }

  createClients(body :Client) : Observable<Client[]>{
    return this.httpclient.post<Client[]>(`${BASE_URL}/client`,body);
  }

  getclient(id:string): Observable<Client> {
    return this.httpclient.get<Client>(`${BASE_URL}/client/${id}`)
  }

  updateClient(id:string, body:Client): Observable<Client>{
    return this.httpclient.put<Client>(`${BASE_URL}/client/${id}`,body)
  }

  deleteInvoice(id:string) : Observable<Client>{
    return this.httpclient.delete<Client>(`${BASE_URL}/client/${id}`)
  }
}
