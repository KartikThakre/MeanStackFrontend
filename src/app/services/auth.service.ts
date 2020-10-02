import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, LoginResponse, SignupResponse, LogoutRsp } from "../models/User";
import { Observable } from 'rxjs/observable';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient : HttpClient) { }

  login(body :User) : Observable<LoginResponse>{
    return this.httpclient.post<LoginResponse>(`${environment.api_url}/user/login`,body); 
  }

  signup(body :User) : Observable<SignupResponse>{
    return this.httpclient.post<SignupResponse>(`${environment.api_url}/user/signup`,body); 
  }

  logOut(): Observable<LogoutRsp> {
    return this.httpclient.get<LogoutRsp>(`${environment.api_url}/user/logout`);
  }

  forgotpassword(data : {email: string}): Observable<{message : string}>{
    return this.httpclient.post<{message : string}>(`${environment.api_url}/user/forgot-password`,data);
  }
}
