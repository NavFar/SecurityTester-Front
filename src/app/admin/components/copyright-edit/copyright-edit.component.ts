import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';

@Component({
  selector: 'admin-copyright-edit',
  templateUrl: './copyright-edit.component.html',
  styleUrls: ['./copyright-edit.component.css']
})
export class CopyrightEditComponent implements OnInit {

  copyrightEdit:string;
  submitButton:string;
  notShowCopyright:string;
  content:string;
  show:boolean;
  constructor(private adminApi:AdminApiService ,private toast :ToastrService ) {
    this.copyrightEdit="ویرایش متن زیرنویس سایت";
    this.submitButton = "اعمال تغییرات";
    this.notShowCopyright="عدم نمایش متن زیرنویس";
    this.content="";
    this.show=false;
    this.toast.info("در حال دریافت اطلاعات");
   }
   ngOnInit() {
     this.adminApi.getCopyright().subscribe(
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
     this.adminApi.setCopyright({copyright:{show:this.show,content:this.content}}).subscribe(
       (res)=>{
         this.toast.success("اطلاعات ثبت شد");
       },
       (err)=>{
         this.toast.error("عدم برقراری ارتباط");
       }
     );
   }

}
