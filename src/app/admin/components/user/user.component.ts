import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';
@Component({
  selector: 'admin-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  logout = faSignOutAlt;
  username:string;
  constructor(private router:Router ,private adminApi:AdminApiService ,private toast :ToastrService ) {
    this.username="نام کاربر"
    this.toast.info("درحال دریافت اطلاعات کاربر");

   }

  ngOnInit() {
    this.adminApi.getUsername().subscribe(
      (res)=>{
        this.username = res;
        this.toast.success("اطلاعات کاربر دریافت شد");

      },
      (err)=>{
        this.toast.error("عدم برقراری ارتباط");
      }
    );
  }
  exit(){
    localStorage.setItem('token', "");
    this.router.navigate(['login'])
  }
}
