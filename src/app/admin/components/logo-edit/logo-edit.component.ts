import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';

@Component({
  selector: 'admin-logo-edit',
  templateUrl: './logo-edit.component.html',
  styleUrls: ['./logo-edit.component.css']
})
export class LogoEditComponent implements OnInit {

  logoEdit:string;
  submitButton:string;
  notShowLogo:string;
  logoURL:string;
  link:string;
  url:string;
  destination:string;
  show:boolean;
  constructor(private adminApi:AdminApiService ,private toast :ToastrService ) {
    this.logoEdit="ویرایش لوگوی سایت";
    this.submitButton = "اعمال تغییرات";
    this.notShowLogo="عدم نمایش لوگو";
    this.logoURL="آدرس لوگو";
    this.link="مقصد";
    this.url="";
    this.destination="";
    this.show=false;
    this.toast.info("در حال دریافت اطلاعات");
   }
   ngOnInit() {
     this.adminApi.getLogo().subscribe(
       (res)=>{
         this.toast.success("اطلاعات دریافت شد");
         this.show=!res.show;
         this.url=res.url;
         this.destination=res.destination;
       },
       (err)=>{
         this.toast.error("عدم برقراری ارتباط");
       }
     );
   }
   submit(){
     this.toast.info("در حال ثبت داده");
     this.adminApi.setLogo({logo:{show:!this.show,url:this.url,destination:this.destination}}).subscribe(
       (res)=>{
         this.toast.success("اطلاعات ثبت شد");
       },
       (err)=>{
         this.toast.error("عدم برقراری ارتباط");
       }
     );
   }

}
