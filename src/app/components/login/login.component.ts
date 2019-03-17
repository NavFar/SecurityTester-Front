import { Component, OnInit } from '@angular/core';
import { PageContentService } from '../../services/page-content/page-content.service'

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
  constructor(private pageContentService : PageContentService) {
    this.usernamePlaceHolder="";
    this.passwordPlaceHolder="";
    this.login="";
    this.loginTitle="";
   }

   ngOnInit() {
     this.pageContentService.getPageContent().subscribe(
       (res) =>{
         this.usernamePlaceHolder=res.usernamePlaceHolder;
         this.passwordPlaceHolder=res.passwordPlaceHolder;
         this.login=res.login;
         this.loginTitle=res.loginTitle;

       },
       (err) =>{
         console.log("cant get values sorry");
       }
     );
   }
   submit(){
     console.log(localStorage.getItem(currentUser));
   }
}
