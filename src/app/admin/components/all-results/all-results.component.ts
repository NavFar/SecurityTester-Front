import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from  '../../services/admin-api/admin-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.css']
})
export class AllResultsComponent implements OnInit {
  results:any;
  currPage:number;
  maxPages:number;
  maxRows:number;
  constructor(private router:Router,private adminApi:AdminApiService,private toast :ToastrService) {
    this.toast.info("در حال دریافت اطلاعات");
    this.currPage=1;
    this.maxPages=0;
    this.maxRows=10;
}

  ngOnInit() {
    this.adminApi.getResultsCount().subscribe(
      (res)=>{
        this.maxPages = Math.ceil(res/this.maxRows);
      },
      (err)=>{
        this.toast.error("عدم برقراری ارتباط");
      }
    );
    this.adminApi.getAllResults((this.currPage-1)*this.maxRows,this.maxRows).subscribe(
      (res)=>{
        this.toast.success("اطلاعات دریافت شد");
        this.results = res;

      },
      (err)=>{
        this.toast.error("عدم برقراری ارتباط");
      }
    );
  }
  click(id){
    this.router.navigate(['/result',id]);
  }
  pageChanged(id){
    this.currPage=id;
    this.toast.info("در حال دریافت اطلاعات");
    this.adminApi.getAllResults((this.currPage-1)*this.maxRows,this.maxRows).subscribe(
      (res)=>{
        this.toast.success("اطلاعات دریافت شد");
        this.results = res;

      },
      (err)=>{
        this.toast.error("عدم برقراری ارتباط");
      }
    );
  }
}
