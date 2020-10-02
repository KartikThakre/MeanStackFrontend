import { Injectable } from '@angular/core';
import { CanActivate,  Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate , CanActivateChild
{

  constructor(private jwtservice : JwtService,
    private router : Router) { }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    throw new Error("Method not implemented.");
  }

  canActivate(): boolean {

    if(this.jwtservice.getToken()){
      debugger;
      return true;
    }
    else{
      this.router.navigate(['/login']);
      debugger;
      return false;
    }

  }
  CanActivateChild() : boolean{
    return this.canActivate();
  }
}
