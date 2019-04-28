import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-faq-edit',
  templateUrl: './faq-edit.component.html',
  styleUrls: ['./faq-edit.component.css']
})
export class FaqEditComponent implements OnInit {
  new:boolean;
  title:string;
  question:string;
  answer:string;
  id:string;
  constructor(private router:Router,private adminApi:AdminApiService,private toast :ToastrService,private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.new=false;
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    if(this.id=="new")
      this.new=true;
    if(!this.new){
      this.adminApi.getFaq({id:this.id}).subscribe(
        (res)=>{
          this.toast.success("اطلاعات دریافت شد");
          this.title = res.title;
          this.question = res.question;
          this.answer = res.answer;
        },
        (err)=>{
          this.toast.error("عدم برقراری ارتباط");
        }
      );
    }
  }
  submit(){
    this.toast.info("در حال ثبت اطلاعات");
    this.adminApi.addFaq({id:this.id,title:this.title,question:this.question,answer:this.answer}).subscribe(
      (res)=>{
        this.toast.success("اطلاعات ثبت شد");
        this.router.navigate(['/admin',{ outlets: { adminRouter: ["faqList"]} }]);
      },
      (err)=>{
        this.toast.error("عدم برقراری ارتباط");
      }
    );
  }
  delete(){
    if(this.new)
      return;
      this.toast.info("در حال حذف");
      this.adminApi.deleteFaq({id:this.id}).subscribe(
        (res)=>{
          this.toast.success("حذف شد");
          this.router.navigate(['/admin',{ outlets: { adminRouter: ["faqList"]} }]);
        },
        (err)=>{
          this.toast.error("عدم برقراری ارتباط");
        }
      );
  }
}
