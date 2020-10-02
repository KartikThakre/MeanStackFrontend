import { Client } from './client';

export class Invoice{
    
    _id: string;
    item : string;
    qty : number;
    date : Date;
    due : Date;
    tax : number;
    rate : number;
}
export class InvioicePaginationResponce{
    docs:Invoice[];
    total:number;
    pages:number;
    page:number;
    limit:number;
}
