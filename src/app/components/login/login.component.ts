import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  login:string;
  constructor() {
    this.username="نام کاربری";
    this.password="گذرواژه";
    this.login="ورود";
   }

  ngOnInit() {
  }

}
