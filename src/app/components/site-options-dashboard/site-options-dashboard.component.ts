import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-options-dashboard',
  templateUrl: './site-options-dashboard.component.html',
  styleUrls: ['./site-options-dashboard.component.css']
})
export class SiteOptionsDashboardComponent implements OnInit {
  links:any[];
  constructor() {
    this.links=[
      {name:"عنوان سایت",link:""},
      {name:"لوگوی سایت",link:""},
      {name:"متن کپی رایت",link:""},
      {name:"متن زیرنویس",link:""},
      {name:"مدیریت کاربران",link:""},
      {name:"مدیریت سوالات رایج",link:""},
      {name:"درباره ما",link:""},
      {name:"تماس و پشتیبانی",link:""}
    ];
   }

  ngOnInit() {
  }

}