import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';

@Component({
  selector: 'admin-contact-us-edit',
  templateUrl: './contact-us-edit.component.html',
  styleUrls: ['./contact-us-edit.component.css']
})
export class ContactUsEditComponent implements OnInit {

  contactUsEdit:string;
  submitButton:string;
  notShowContactUs:string;
  location:string;
  content:string;
  show:boolean;
  constructor(private adminApi:AdminApiService ,private toast :ToastrService ) {
    this.contactUsEdit="ویرایش متن تماس با ما";
    this.submitButton = "اعمال تغییرات";
    this.notShowContactUs="عدم نمایش متن تماس با ما";
    this.location="موقعیت روی نقشه"
    this.content="";
    this.show=false;
    this.toast.info("در حال دریافت اطلاعات");
   }
  ngOnInit() {
    this.adminApi.getContactUs().subscribe(
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
    this.adminApi.setContactUs({contactUs:{show:this.show,content:this.content}}).subscribe(
      (res)=>{
        this.toast.success("اطلاعات ثبت شد");
      },
      (err)=>{
        this.toast.error("عدم برقراری ارتباط");
      }
    );
  }

 }
