import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth:AuthService , public router:Router) {
   }
   canActivate():boolean{
     let flag:boolean = this.auth.isAuthenticated();
     if(!flag)
     {
       this.router.navigate(['login']);
       return false;
     }
     return true;
   }
}
