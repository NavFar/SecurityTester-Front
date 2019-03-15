import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-site-options-dashboard',
  templateUrl: './site-options-dashboard.component.html',
  styleUrls: ['./site-options-dashboard.component.css']
})
export class SiteOptionsDashboardComponent implements OnInit {
  links:any[];
  constructor() {
    this.links=[
      {name:"عنوان سایت",link:"titleEdit"},
      {name:"لوگوی سایت",link:"logoEdit"},
      {name:"متن کپی رایت",link:"copyrightEdit"},
      {name:"متن زیرنویس",link:"footnoteEdit"},
      {name:"مدیریت کاربران",link:""},
      {name:"مدیریت سوالات رایج",link:""},
      {name:"درباره ما",link:"aboutUsEdit"},
      {name:"تماس و پشتیبانی",link:"contactUsEdit"}
    ];
   }

  ngOnInit() {
  }

}
