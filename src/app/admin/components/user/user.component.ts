import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Router }from '@angular/router';

@Component({
  selector: 'admin-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  logout = faSignOutAlt;
  username:string;
  constructor(private router:Router) {
    this.username="نام کاربر"
   }

  ngOnInit() {
  }
  exit(){
    console.log("dont")
    localStorage.setItem('token', "");
    this.router.navigate(['login'])
  }
}
