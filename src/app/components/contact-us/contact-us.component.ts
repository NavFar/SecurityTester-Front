import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsFields:any[];
  contactUsText:string;
  constructor() {
    this.contactUsText="متن ارتباط با ما"
    this.contactUsFields=[
      {name:"name",placeholder:"نام و نام خانوادگی",type:"text"},
      {name:"email",placeholder:"ایمیل",type:"text"},
      {name:"phone",placeholder:"شماره تلفن",type:"text"},
      {name:"subject",placeholder:"موضوع",type:"text"},
      {name:"text",placeholder:"متن پیام",type:"textarea"},
    ];
  }

  ngOnInit() {
  }

}
