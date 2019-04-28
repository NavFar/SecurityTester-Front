import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';

@Component({
  selector: 'admin-footnote-edit',
  templateUrl: './footnote-edit.component.html',
  styleUrls: ['./footnote-edit.component.css']
})
export class FootnoteEditComponent implements OnInit {

  footnoteEdit:string;
  notShowFootnote:string;
  submitButton:string;
  content:string;
  show:boolean;
  constructor(private adminApi:AdminApiService ,private toast :ToastrService ) {
    this.footnoteEdit="ویرایش متن زیرنویس";
    this.submitButton = "اعمال تغییرات";
    this.notShowFootnote="عدم نمایش متن زیرنویس";
    this.content="";
    this.show=false;
    this.toast.info("در حال دریافت اطلاعات");

   }
   ngOnInit() {
     this.adminApi.getFooter().subscribe(
       (res)=>{
         this.toast.success("اطلاعات دریافت شد");
         this.show=!res.show;
         this.content=res.content;
       },
       (err)=>{
         this.toast.error("عدم برقراری ارتباط");
       }
     );
   }
   submit(){
     this.toast.info("در حال ثبت داده");
     this.adminApi.setFooter({footer:{show:!this.show,content:this.content}}).subscribe(
       (res)=>{
         this.toast.success("اطلاعات ثبت شد");
       },
       (err)=>{
         this.toast.error("عدم برقراری ارتباط");
       }
     );
   }

}
