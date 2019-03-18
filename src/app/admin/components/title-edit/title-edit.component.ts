import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';


@Component({
  selector: 'admin-title-edit',
  templateUrl: './title-edit.component.html',
  styleUrls: ['./title-edit.component.css']
})
export class TitleEditComponent implements OnInit {
  titleEdit:string;
  submitButton:string;
  content:string;

    constructor(private adminApi:AdminApiService ,private toast :ToastrService ) {
    this.titleEdit="ویرایش عنوان سایت";
    this.submitButton = "اعمال تغییرات";
    this.content="";
    this.toast.info("در حال دریافت اطلاعات");
   }

   ngOnInit() {
     this.adminApi.getTitle().subscribe(
       (res)=>{
         this.toast.success("اطلاعات دریافت شد");
         this.content=res.content;
       },
       (err)=>{
         this.toast.error("عدم برقراری ارتباط");
       }
     );
   }
   submit(){
     this.toast.info("در حال ثبت داده");
     this.adminApi.setTitle({title:{content:this.content}}).subscribe(
       (res)=>{
         this.toast.success("اطلاعات ثبت شد");
       },
       (err)=>{
         this.toast.error("عدم برقراری ارتباط");
       }
     );
   }

}
