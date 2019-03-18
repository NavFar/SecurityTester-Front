import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';

@Component({
  selector: 'admin-introduction-edit',
  templateUrl: './introduction-edit.component.html',
  styleUrls: ['./introduction-edit.component.css']
})
export class IntroductionEditComponent implements OnInit {

  introductionEdit:string;
  submitButton:string;
  notShowIntroduction:string;
  content:string;
  show:boolean;
  constructor(private adminApi:AdminApiService ,private toast :ToastrService ) {
    this.introductionEdit="ویرایش متن معرفی سایت";
    this.submitButton = "اعمال تغییرات";
    this.notShowIntroduction="عدم نمایش متن معرفی سایت";
    this.content="";
    this.show=false;
    this.toast.info("در حال دریافت اطلاعات");
   }
   ngOnInit() {
     this.adminApi.getIntroduction().subscribe(
       (res)=>{
         this.toast.success("اطلاعات دریافت شد");
         this.show=res.show;
         this.content=res.content;
       },
       (err)=>{
         this.toast.error("عدم برقراری ارتباط");
       }
     );
   }
  submit(){
    this.toast.info("در حال ثبت داده");
    this.adminApi.setIntroduction({introduction:{show:!this.show,content:this.content}}).subscribe(
      (res)=>{
        this.toast.success("اطلاعات ثبت شد");
      },
      (err)=>{
        this.toast.error("عدم برقراری ارتباط");
      }
    );
  }
}
