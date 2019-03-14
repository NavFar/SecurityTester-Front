import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  logout = faSignOutAlt;
  username:string;
  constructor() {
    this.username="نام کاربر"
   }

  ngOnInit() {
  }

}
