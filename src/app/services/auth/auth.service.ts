import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ,public jwtHelper : JwtHelperService) {
   }
   public isAuthenticated():boolean{
     const token=localStorage.getItem('token');
     try{
       return !this.jwtHelper.isTokenExpired(token);
     }
     catch(e)
     {
       return  false;
     }
   }
   public login(username,password,recaptcha){
     return this.http.post<any>("/api/admin/user/login/",{username:username , password:password , recaptcha : recaptcha});
   }
}
