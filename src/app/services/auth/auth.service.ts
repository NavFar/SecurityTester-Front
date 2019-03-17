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
     return !this.jwtHelper.isTokenExpired(token);
   }
   public login(username,password,recaptcha){
     return this.http.post<any>("/api/admin/login/",{username:username , password:password , recaptcha : recaptcha});
   }
}
