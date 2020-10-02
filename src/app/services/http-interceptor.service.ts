import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor
{

  
  constructor(private jwtservice : JwtService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headerConfig ={
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }
    
    const token = this.jwtservice.getToken()
    if(token){
      headerConfig['Authorization'] = `bearer ${token}`
    }
    const _req = req.clone({setHeaders : headerConfig});
    return next.handle(_req);

  }
}
