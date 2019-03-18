import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';

@Component({
  selector: 'admin-about-us-edit',
  templateUrl: './about-us-edit.component.html',
  styleUrls: ['./about-us-edit.component.css']
})
export class AboutUsEditComponent implements OnInit {

  aboutUsEdit:string;
  submitButton:string;
  notShowAboutUs:string;
  content:string;
  show:boolean;
  constructor(private adminApi:AdminApiService ,private toast :ToastrService ) {
    this.aboutUsEdit="ویرایش متن درباره ما";
    this.submitButton = "اعمال تغییرات";
    this.notShowAboutUs="عدم نمایش متن درباره ما";
    this.content="";
    this.show=false;
    this.toast.info("در حال دریافت اطلاعات");
   }
  ngOnInit() {
    this.adminApi.getAboutUs().subscribe(
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
    this.adminApi.setAboutUs({aboutUs:{show:!this.show,content:this.content}}).subscribe(
      (res)=>{
        this.toast.success("اطلاعات ثبت شد");
      },
      (err)=>{
        this.toast.error("عدم برقراری ارتباط");
      }
    );
  }

}
