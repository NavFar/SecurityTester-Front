import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';

@Component({
  selector: 'admin-moto-edit',
  templateUrl: './moto-edit.component.html',
  styleUrls: ['./moto-edit.component.css']
})
export class MotoEditComponent implements OnInit {

  motoEdit:string;
  submitButton:string;
  notShowMoto:string;
  content:string;
  show:boolean;
  constructor(private adminApi:AdminApiService ,private toast :ToastrService ) {
    this.motoEdit="ویرایش شعار سایت";
    this.submitButton = "اعمال تغییرات";
    this.notShowMoto="عدم نمایش شعار سایت";
    this.content="",
    this.show=false;
    this.toast.info("در حال دریافت اطلاعات");
   }
  ngOnInit() {
    this.adminApi.getMoto().subscribe(
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
    this.adminApi.setMoto({moto:{show:this.show,content:this.content}}).subscribe(
      (res)=>{
        this.toast.success("اطلاعات ثبت شد");
      },
      (err)=>{
        this.toast.error("عدم برقراری ارتباط");
      }
    );
  }

}
