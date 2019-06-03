import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'admin-admin-base',
  templateUrl: './admin-base.component.html',
  styleUrls: ['./admin-base.component.css']
})
export class AdminBaseComponent implements OnInit {
  userActivity;
userInactive: Subject<any> = new Subject();

constructor(private router:Router, private adminApi:AdminApiService,private toast:ToastrService) {
  this.setTimeout();
  this.userInactive.subscribe(() =>{
    this.adminApi.logout().subscribe(
      (res)=>{
        localStorage.setItem('token', "");
        this.router.navigate(['login']);
        this.toast.warning("جلسه منقضی شد.");
      },
      (err)=>{
        this.toast.error("عدم برقراری ارتباط");
      }
    );
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
