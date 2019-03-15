import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-logo-edit',
  templateUrl: './logo-edit.component.html',
  styleUrls: ['./logo-edit.component.css']
})
export class LogoEditComponent implements OnInit {

  logoEdit:string;
  submitButton:string;
  notShowLogo:string;
  logoURL:string;
  link:string;
  constructor() {
    this.logoEdit="ویرایش لوگوی سایت";
    this.submitButton = "اعمال تغییرات";
    this.notShowLogo="عدم نمایش لوگو";
    this.logoURL="آدرس لوگو";
    this.link="مقصد"
   }
  ngOnInit() {
  }

}
