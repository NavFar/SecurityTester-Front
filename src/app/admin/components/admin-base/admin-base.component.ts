import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'admin-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.css']
})
export class AdminBaseComponent implements OnInit {
  userActivity;
userInactive: Subject<any> = new Subject();

constructor(private router:Router) {
  this.setTimeout();
  this.userInactive.subscribe(() =>{
    localStorage.setItem('token', "");
    this.router.navigate(['login'])
  }
);
}
setTimeout() {
  this.userActivity = setTimeout(() => this.userInactive.next(undefined), 300000);
}
@HostListener('window:mousemove')
@HostListener('window:click') refreshUserState() {
  clearTimeout(this.userActivity);
  this.setTimeout();
}
  ngOnInit() {
  }

}
