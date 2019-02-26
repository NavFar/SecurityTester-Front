import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  moto:string;
  introduction:string;
  ipInputPlaceHolder:string;
  exposeText:string;
  notBotText:string;
  constructor() {
    this.moto="شعار سایت";
    this.introduction="متن معرفی";
    this.ipInputPlaceHolder="نام دامنه یا ای‌پی "
    this.test="ارزیابی";
    this.exposeText="نتایج این ارزیابی برای عموم قابل مشاهده نباشد.";
    this.notBotText="من بات نیستم.";
   }

  ngOnInit() {
  }

}
