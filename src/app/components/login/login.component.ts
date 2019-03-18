import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../services/page-content/page-content.service'
import { AuthService } from '../../services/auth/auth.service'
import { Router }from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernamePlaceHolder:string;
  passwordPlaceHolder:string;
  loginTitle:string;
  login:string;
  username:string;
  password:any;
  recaptcha:string;
  emptyUsername:string;
  emptyPassword:string;
  emptyRecaptch:string;
  successLogin:string;
  failedLogin:string;
  recaptchaFaild:string;
  serveFailed:string;
  waiting:string;
  constructor(private pageContentService : PageContentService ,private toast :ToastrService ,private auth :AuthService,private router:Router) {
    this.usernamePlaceHolder="";
    this.passwordPlaceHolder="";
    this.login="";
    this.loginTitle="";
    this.emptyUsername="";
    this.emptyPassword="";
    this.emptyRecaptch="";
    this.successLogin="";
    this.failedLogin ="";
    this.recaptchaFaild="";
    this.serveFailed="";
    this.waiting="";
   }

   ngOnInit() {
     this.pageContentService.getPageContent().subscribe(
       (res) =>{
         this.usernamePlaceHolder=res.usernamePlaceHolder;
         this.passwordPlaceHolder=res.passwordPlaceHolder;
         this.login=res.login;
         this.loginTitle=res.loginTitle;
         this.emptyUsername=res.emptyUsername;
         this.emptyPassword=res.emptyPassword;
         this.emptyRecaptch=res.emptyRecaptch;
         this.successLogin=res.successLogin;
         this.failedLogin =res.failedLogin;
         this.recaptchaFaild=res.recaptchaFaild;
         this.serveFailed=res.serveFailed;
         this.waiting=res.waiting;
       },
       (err) =>{
         console.log("cant get values sorry");
       }
     );
   }
   submit(){
     let flag:boolean= true;
     if(!this.username){
       this.toast.error('',this.emptyUsername);
       flag=false;
     }
     if(!this.password){
       this.toast.error('',this.emptyPassword);
       flag=false;
     }
     if(!this.recaptcha){
       this.toast.error('',this.emptyRecaptch);
       flag=false;
     }
     if(!flag)
        return;
     this.toast.info('',this.waiting);
     this.auth.login(this.username,this.password,this.recaptcha).subscribe(
       (res)=>{
         this.toast.success('',this.successLogin);
         localStorage.setItem('token', res.token);
         this.router.navigate(['admin'])
       },
       (err)=>{
         this.username="";
         this.password="";
         this.recaptcha="";
         if(err.status==500)
         {
           this.toast.error('',this.serveFailed);
           return;
         }
         if(err.status==429||err.status==503)
         {
           this.toast.error('',this.recaptchaFaild);
           return;
         }
         if(err.status==401)
         {
           this.toast.error('',this.failedLogin);
           return;
         }

       }
     );
   }
}
