import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title :string;
  links:any[];
  constructor() {
    this.title = "عنوان سایت";
    this.links=[
      {name:"صفحه نخست",link:"home"},
      {name:"سوالات رایج",link:"#"},
      {name:"ارزیابی‌های اخیر",link:"#"},
      {name:"درباره ما",link:"#"},
      {name:"تماس و پشتیبانی",link:"contactus"},
    ];
   }

  ngOnInit() {
  }

}
