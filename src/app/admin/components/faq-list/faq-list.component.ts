import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListComponent implements OnInit {
  faqs:any[];
  constructor(private router:Router,private adminApi:AdminApiService,private toast :ToastrService) {
    this.toast.info("در حال دریافت اطلاعات");
}
ngOnInit() {

  this.adminApi.getAllFaqs().subscribe(
    (res)=>{
      this.toast.success("اطلاعات دریافت شد");
      this.faqs = res;
    },
    (err)=>{
      this.toast.error("عدم برقراری ارتباط");
    }
  );
}
  click(id){
    this.router.navigate(['/admin',{ outlets: { adminRouter: ["faqEdit",id]} }]);
  }
  pageChanged(id){
    console.log(id)
  }
  new(){
    this.router.navigate(['/admin',{ outlets: { adminRouter: ["faqEdit","new"]} }]);
  }
}
